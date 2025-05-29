import React, { useState } from 'react';
import {
  Container, Row, Col, Card, Button, Form, Offcanvas, Spinner, Dropdown,
} from 'react-bootstrap';
import {
  useFetchAllCategoriesQuery,
  useCreateCategoryMutation,
  useDeleteCategoryMutation,
} from 'features/category/categorySlice';
import { useGetSubcategoriesByCategoryIdQuery } from 'features/subcategory/subcategorySlice';
import Breadcrumb from 'Common/BreadCrumb';

const Categories = () => {
  document.title = 'Categories | Admin';

  const { data: categories = [], isLoading: loadingCategories } = useFetchAllCategoriesQuery();
  const [createCategory] = useCreateCategoryMutation();
  const [deleteCategory] = useDeleteCategoryMutation();

  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(null);
  const { data: subcategories = [], isLoading: loadingSubData } = useGetSubcategoriesByCategoryIdQuery(
    selectedCategoryId!,
    { skip: !selectedCategoryId }
  );

  const [selectedSubcategory, setSelectedSubcategory] = useState<any>(null);
  const [name, setName] = useState('');
  const [showCanvas, setShowCanvas] = useState(false);

  const handleCreateCategory = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name.trim()) return;
    await createCategory({ name });
    setName('');
  };

  const handleDeleteCategory = async (id: string) => {
    if (window.confirm('Are you sure you want to delete this category?')) {
      await deleteCategory(id);
    }
  };

  return (
    <Container fluid className="page-content">
      <Breadcrumb title="Categories" pageTitle="Products" />
      <Row>
        {/* Create Category Form */}
        <Col xxl={3}>
          <Card>
            <Card.Header>
              <h6 className="mb-0">Create Category</h6>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={handleCreateCategory}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter category name"
                    required
                  />
                </Form.Group>
                <Button type="submit" variant="success">Add Category</Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>

        {/* Categories List */}
        <Col xxl={9}>
          <Row>
            {loadingCategories ? (
              <Col><Spinner animation="border" /></Col>
            ) : (
              categories.map((cat) => (
                <Col xxl={4} md={6} key={cat._id}>
                  <Card className="mb-4">
                    <Card.Body>
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5>{cat.name}</h5>
                        <Dropdown>
                          <Dropdown.Toggle variant="outline-secondary" size="sm">
                            ⋮
                          </Dropdown.Toggle>
                          <Dropdown.Menu>
                            <Dropdown.Item onClick={() => alert('Edit logic here')}>Edit</Dropdown.Item>
                            <Dropdown.Item onClick={() => handleDeleteCategory(cat?._id!)}>Delete</Dropdown.Item>
                          </Dropdown.Menu>
                        </Dropdown>
                      </div>

                      {/* Load Subcategories */}
                      <Button
                        variant="outline-info"
                        size="sm"
                        onClick={() => setSelectedCategoryId(cat?._id!)}
                      >
                        Load Subcategories
                      </Button>

                      {selectedCategoryId === cat._id && loadingSubData && (
                        <div className="mt-2"><Spinner animation="border" size="sm" /></div>
                      )}

                      {selectedCategoryId === cat._id && subcategories.length > 0 && (
                        <ul className="mt-3 ps-3">
                          {subcategories.map((sub) => (
                            <li key={sub._id} className="mb-1 d-flex justify-content-between align-items-center">
                              {sub.name}
                              <Button
                                variant="outline-primary"
                                size="sm"
                                onClick={() => {
                                  setSelectedSubcategory(sub);
                                  setShowCanvas(true);
                                }}
                              >
                                View Subsubcategories
                              </Button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </Col>
      </Row>

      {/* Offcanvas for Subsubcategories */}
      <Offcanvas show={showCanvas} onHide={() => setShowCanvas(false)} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            Subsubcategories of <span className="text-primary">{selectedSubcategory?.name}</span>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {selectedSubcategory?.subsubcategories?.length > 0 ? (
            <ul>
              {selectedSubcategory.subsubcategories.map((subsub:any) => (
                <li key={subsub._id}>{subsub.name}</li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">No subsubcategories found.</p>
          )}
        </Offcanvas.Body>
      </Offcanvas>
    </Container>
  );
};

export default Categories;
