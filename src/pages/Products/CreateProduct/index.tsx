// import React, {useState} from 'react';
// import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
// import Breadcrumb from 'Common/BreadCrumb';
// import { Link } from 'react-router-dom';
// import Flatpickr from 'react-flatpickr'
// import 'flatpickr/dist/themes/material_blue.css'
// import Dropzone from "react-dropzone";
// import { CKEditor } from "@ckeditor/ckeditor5-react";
// import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

// const CreateProduct = () => {

//     document.title = "Create New Product | Modav";
//     const [step, setStep] = useState('general');

//     const [selectedFiles, setselectedFiles] = useState([]);

//     function handleAcceptedFiles(files: any) {
//         files.map((file: any) =>
//             Object.assign(file, {
//                 preview: URL.createObjectURL(file),
//                 formattedSize: formatBytes(file.size),
//             })
//         );
//         setselectedFiles(files);
//     }

//     /* Formats the size */
//     function formatBytes(bytes: any, decimals = 2) {
//         if (bytes === 0) return "0 Bytes";
//         const k = 1024;
//         const dm = decimals < 0 ? 0 : decimals;
//         const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

//         const i = Math.floor(Math.log(bytes) / Math.log(k));
//         return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
//     }

//     return (
//         <React.Fragment>
//             <div className="page-content">
//                 <Container fluid={true}>
//                     <Breadcrumb title="Create Product" pageTitle="Products" />
//                     <form id="createproduct-form" autoComplete="off" className="needs-validation" noValidate>
//                         <Row>
//                             <Col xl={9} lg={8}>
//                                 <Card>
//                                     <Card.Header>
//                                         <div className="d-flex">
//                                             <div className="flex-shrink-0 me-3">
//                                                 <div className="avatar-sm">
//                                                     <div className="avatar-title rounded-circle bg-light text-primary fs-20">
//                                                         <i className="bi bi-box-seam"></i>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="flex-grow-1">
//                                                 <h5 className="card-title mb-1">Product Information</h5>
//                                                 <p className="text-muted mb-0">Fill all information below.</p>
//                                             </div>
//                                         </div>
//                                     </Card.Header>
//                                     <Card.Body>
//                                         <div className="mb-3">

//                                             <Form.Label htmlFor="product-title-input">Product title</Form.Label>
//                                             <Form.Control type="hidden" id="formAction" name="formAction" defaultValue="add" />
//                                             <Form.Control type="text" className="d-none" id="product-id-input" />
//                                             <Form.Control type="text" id="product-title-input" defaultValue="" placeholder="Enter product title" required />
                                            
//                                             <div className="invalid-feedback">Please enter a product title.</div>
//                                         </div>
//                                         <div className="mb-3">
//                                             <Form.Label>Product description</Form.Label>
//                                             <CKEditor
//                                                 editor={ClassicEditor}
//                                                 data="<p>Tommy Hilfiger men striped pink sweatshirt. Crafted with cotton. Material composition is 100% organic cotton. This is one of the world’s leading designer lifestyle brands and is internationally recognized for celebrating the essence of classic American cool style, featuring preppy with a twist designs.</p>
//                                                         <ul>
//                                                             <li>Full Sleeve</li>
//                                                             <li>Cotton</li>
//                                                             <li>All Sizes available</li>
//                                                             <li>4 Different Color</li>
//                                                         </ul>"
//                                                 onReady={(editor:any) => {
//                                                     // You can store the "editor" and use when it is needed.
//                                                 }}
//                                                 onChange={(editor:any) => {
//                                                     editor.getData();
//                                                 }}
//                                             />
//                                         </div>

//                                         <div>
//                                             <div className="d-flex align-items-start">
//                                                 <div className="flex-grow-1">
//                                                     <Form.Label>Product category</Form.Label>
//                                                 </div>
//                                                 <div className="flex-shrink-0">
//                                                     <Link to="#" className="float-end text-decoration-underline">Add New</Link>
//                                                 </div>
//                                             </div>
//                                             <div>
//                                                 <select className="form-select" id="choices-category-input" name="choices-category-input">
//                                                     <option value="">Select product category</option>
//                                                     <option value="Appliances">Appliances</option>
//                                                     <option value="Automotive Accessories">Automotive Accessories</option>
//                                                     <option defaultValue="Electronics">Electronics</option>
//                                                     <option value="Fashion">Fashion</option>
//                                                     <option value="Furniture">Furniture</option>
//                                                     <option value="Grocery">Grocery</option>
//                                                     <option value="Kids">Kids</option>
//                                                     <option value="Watches">Watches</option>
//                                                 </select>
//                                             </div>
//                                             <div className="error-msg mt-1">Please select a product category.</div>
//                                         </div>
//                                     </Card.Body>
//                                 </Card>

//                                 <Card>
//                                     <Card.Header>
//                                         <div className="d-flex">
//                                             <div className="flex-shrink-0 me-3">
//                                                 <div className="avatar-sm">
//                                                     <div className="avatar-title rounded-circle bg-light text-primary fs-20">
//                                                         <i className="bi bi-images"></i>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="flex-grow-1">
//                                                 <h5 className="card-title mb-1">Product Gallery</h5>
//                                                 <p className="text-muted mb-0">Add product gallery images.</p>
//                                             </div>
//                                         </div>
//                                     </Card.Header>
//                                     <Card.Body>
//                                         <div className="dropzone my-dropzone">
//                                             <Dropzone
//                                                 onDrop={acceptedFiles => {
//                                                     handleAcceptedFiles(acceptedFiles);
//                                                 }}
//                                             >
//                                                 {({ getRootProps, getInputProps }) => (
//                                                     <div className="dropzone dz-clickable text-center">
//                                                         <div className="dz-message needsclick"
//                                                             {...getRootProps()}
//                                                         >
//                                                             <div className="mb-3">
//                                                                 <i className="display-4 text-muted ri-upload-cloud-2-fill" />
//                                                             </div>
//                                                             <h5>Drop files here or click to upload.</h5>
//                                                         </div>
//                                                     </div>
//                                                 )}
//                                             </Dropzone>
//                                             <div className="list-unstyled mb-0" id="file-previews">
//                                                 {selectedFiles.map((f: any, i: number) => {
//                                                     return (
//                                                         <Card
//                                                             className="mt-1 mb-0 shadow-none border dz-preview dz-processing dz-image-preview dz-success dz-image  dz-complete"
//                                                             key={i + "-file"}
//                                                         >
//                                                             <div className="p-2">
//                                                                 <Row className="align-items-center">
//                                                                     <Col className="col-auto">
//                                                                         <div className='image'>
//                                                                         <img
//                                                                             // data-dz-thumbnail=""
//                                                                             className="avatar-sm rounded bg-light"
//                                                                             alt={f.name}
//                                                                             src={f.preview}
//                                                                         />
//                                                                         </div>
//                                                                     </Col>
//                                                                     <Col>
//                                                                         <Link
//                                                                             to="#"
//                                                                             className="text-muted font-weight-bold"
//                                                                         >
//                                                                             {f.name}
//                                                                         </Link>
//                                                                         <p className="mb-0">
//                                                                             <strong>{f.formattedSize}</strong>
//                                                                         </p>
//                                                                     </Col>
//                                                                 </Row>
//                                                             </div>
//                                                         </Card>
//                                                     );
//                                                 })}
//                                             </div>
//                                         </div>
//                                         <div className="error-msg mt-1">Please add a product images.</div>
//                                     </Card.Body>
//                                 </Card>

//                                 <Card>
//                                     <Card.Header>
//                                         <div className="d-flex">
//                                             <div className="flex-shrink-0 me-3">
//                                                 <div className="avatar-sm">
//                                                     <div className="avatar-title rounded-circle bg-light text-primary fs-20">
//                                                         <i className="bi bi-list-ul"></i>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="flex-grow-1">
//                                                 <h5 className="card-title mb-1">General Information</h5>
//                                                 <p className="text-muted mb-0">Fill all information below.</p>
//                                             </div>
//                                         </div>
//                                     </Card.Header>
//                                     <Card.Body>
//                                         <Row>
//                                             <Col lg={6}>
//                                                 <div className="mb-3">
//                                                     <Form.Label htmlFor="manufacturer-name-input">Manufacturer Name</Form.Label>
//                                                     <Form.Control type="text" id="manufacturer-name-input" placeholder="Enter manufacturer name" />
//                                                 </div>
//                                             </Col>
//                                             <Col lg={6}>
//                                                 <div className="mb-3">
//                                                     <Form.Label htmlFor="manufacturer-brand-input">Manufacturer Brand</Form.Label>
//                                                     <Form.Control type="text" id="manufacturer-brand-input" placeholder="Enter manufacturer brand" />
//                                                 </div>
//                                             </Col>
//                                         </Row>
//                                         <Row>
//                                             <Col lg={3} sm={6}>
//                                                 <div className="mb-3">
//                                                     <Form.Label htmlFor="stocks-input">Stocks</Form.Label>
//                                                     <Form.Control type="text" id="stocks-input" placeholder="Stocks" required />
//                                                     <div className="invalid-feedback">Please enter a product stocks.</div>
//                                                 </div>
//                                             </Col>
//                                             <Col lg={3} sm={6}>
//                                                 <div className="mb-3">
//                                                     <Form.Label htmlFor="product-price-input">Price</Form.Label>
//                                                     <div className="input-group has-validation mb-3">
//                                                         <span className="input-group-text" id="product-price-addon">$</span>
//                                                         <Form.Control type="text" id="product-price-input" placeholder="Enter price" aria-label="Price" aria-describedby="product-price-addon" required />
//                                                         <div className="invalid-feedback">Please enter a product price.</div>
//                                                     </div>

//                                                 </div>
//                                             </Col>
//                                             <Col lg={3} sm={6}>
//                                                 <div className="mb-3">
//                                                     <Form.Label htmlFor="product-discount-input">Discount</Form.Label>
//                                                     <div className="input-group has-validation mb-3">
//                                                         <span className="input-group-text" id="product-discount-addon">%</span>
//                                                         <Form.Control type="text" id="product-discount-input" placeholder="Enter discount" aria-label="discount" aria-describedby="product-discount-addon" required />
//                                                         <div className="invalid-feedback">Please enter a product discount.</div>
//                                                     </div>

//                                                 </div>
//                                             </Col>
//                                             <Col lg={3} sm={6}>
//                                                 <div className="mb-3">
//                                                     <Form.Label htmlFor="orders-input">Orders</Form.Label>
//                                                     <Form.Control type="text" id="orders-input" placeholder="Orders" required />
//                                                     <div className="invalid-feedback">Please enter a product orders.</div>
//                                                 </div>
//                                             </Col>

//                                         </Row>


//                                         <Row>
//                                             <Col lg={6}>
//                                                 <div>
//                                                     <Form.Label>Colors</Form.Label>
//                                                     <ul className="clothe-colors list-unstyled hstack gap-2 mb-0 flex-wrap">
//                                                         <li>
//                                                             <Form.Check defaultValue="success" id="color-1" />
//                                                             <label className="avatar-xs btn btn-success p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-1"></label>
//                                                         </li>
//                                                         <li>
//                                                             <Form.Check defaultValue="info" id="color-2" />
//                                                             <label className="avatar-xs btn btn-info p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-2"></label>
//                                                         </li>
//                                                         <li>
//                                                             <Form.Check defaultValue="warning" id="color-3" />
//                                                             <label className="avatar-xs btn btn-warning p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-3"></label>
//                                                         </li>
//                                                         <li>
//                                                             <Form.Check defaultValue="danger" id="color-4" />
//                                                             <label className="avatar-xs btn btn-danger p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-4"></label>
//                                                         </li>
//                                                         <li>
//                                                             <Form.Check defaultValue="primary" id="color-5" />
//                                                             <label className="avatar-xs btn btn-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-5"></label>
//                                                         </li>
//                                                         <li>
//                                                             <Form.Check defaultValue="secondary" id="color-6" />
//                                                             <label className="avatar-xs btn btn-secondary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-6"></label>
//                                                         </li>
//                                                         <li>
//                                                             <Form.Check defaultValue="dark" id="color-7" />
//                                                             <label className="avatar-xs btn btn-dark p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-7"></label>
//                                                         </li>
//                                                         <li>
//                                                             <Form.Check defaultValue="light" id="color-8" />
//                                                             <label className="avatar-xs btn btn-light p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="color-8"></label>
//                                                         </li>
//                                                     </ul>
//                                                     <div className="error-msg mt-1">Please select a product colors.</div>
//                                                 </div>
//                                             </Col>
//                                             <Col lg={6}>
//                                                 <div className="mt-3 mt-lg-0">
//                                                     <Form.Label>Sizes</Form.Label>
//                                                     <ul className="clothe-size list-unstyled hstack gap-2 mb-0 flex-wrap" id="size-filter">
//                                                         <li>
//                                                             <Form.Check defaultValue="xs" id="sizeXs" />
//                                                             <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeXs">XS</label>
//                                                         </li>
//                                                         <li>
//                                                             <Form.Check defaultValue="s" id="sizeS" />
//                                                             <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeS">S</label>
//                                                         </li>
//                                                         <li>
//                                                             <Form.Check defaultValue="m" id="sizeM" />
//                                                             <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeM">M</label>
//                                                         </li>
//                                                         <li>
//                                                             <Form.Check defaultValue="l" id="sizeL" />
//                                                             <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeL">L</label>
//                                                         </li>
//                                                         <li>
//                                                             <Form.Check defaultValue="xl" id="sizeXl" />
//                                                             <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="sizeXl">XL</label>
//                                                         </li>
//                                                         <li>
//                                                             <Form.Check defaultValue="2xl" id="size2xl" />
//                                                             <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="size2xl">2XL</label>
//                                                         </li>
//                                                         <li>
//                                                             <Form.Check defaultValue="3xl" id="size3xl" />
//                                                             <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="size3xl">3XL</label>
//                                                         </li>
//                                                         <li>
//                                                             <Form.Check defaultValue="40" id="size40" />
//                                                             <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="size40">40</label>
//                                                         </li>
//                                                         <li>
//                                                             <Form.Check defaultValue="41" id="size41" />
//                                                             <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="size41">41</label>
//                                                         </li>
//                                                         <li>
//                                                             <Form.Check defaultValue="42" id="size42" />

//                                                             <label className="avatar-xs btn btn-soft-primary p-0 d-flex align-items-center justify-content-center rounded-circle" htmlFor="size42">42</label>
//                                                         </li>
//                                                     </ul>
//                                                     <div className="error-msg mt-1">Please select a product sizes.</div>
//                                                 </div>
//                                             </Col>
//                                         </Row>
//                                     </Card.Body>
//                                 </Card>
//                                 <div className="text-end mb-3">
//                                     <Button variant='success' type="submit" className="w-sm">Submit</Button>
//                                 </div>
//                             </Col>


//                             <Col xl={3} lg={4}>
//                                 <Card>
//                                     <Card.Header>
//                                         <h5 className="card-title mb-0">Publish</h5>
//                                     </Card.Header>
//                                     <Card.Body>
//                                         <div className="mb-3">
//                                             <label htmlFor="choices-publish-status-input" className="form-label">Status</label>

//                                             <select className="form-select" id="choices-publish-status-input" data-choices data-choices-search-false>
//                                                 <option defaultValue="Published">Published</option>
//                                                 <option value="Scheduled">Scheduled</option>
//                                                 <option value="Draft">Draft</option>
//                                             </select>
//                                         </div>

//                                         <div>
//                                             <Form.Label htmlFor="choices-publish-visibility-input">Visibility</Form.Label>
//                                             <select className="form-select" id="choices-publish-visibility-input" data-choices data-choices-search-false>
//                                                 <option defaultValue="Public">Public</option>
//                                                 <option value="Hidden">Hidden</option>
//                                             </select>
//                                         </div>
//                                     </Card.Body>

//                                 </Card>

//                                 <Card>
//                                     <Card.Header>
//                                         <h5 className="card-title mb-0">Publish Schedule</h5>
//                                     </Card.Header>

//                                     <Card.Body>
//                                         <div>
//                                             <Form.Label htmlFor="datepicker-publish-input">Publish Date & Time</Form.Label>
//                                             {/* <Flatpickr
//                                                 className="form-control flatpickr-input"
//                                                 placeholder='Enter publish date'
//                                                 options={{
//                                                     dateFormat: "d M, Y",
//                                             }}
//                                         /> */}
//                                         </div>
//                                     </Card.Body>
//                                 </Card>


//                                 <Card>
//                                     <Card.Header>
//                                         <h5 className="card-title mb-0">Product Tags</h5>
//                                     </Card.Header>
//                                     <Card.Body>
//                                         <div className="hstack gap-3 align-items-start">
//                                             <div className="flex-grow-1">
//                                                 <Form.Control data-choices data-choices-multiple-remove="true" placeholder="Enter tags" type="text" defaultValue="Cotton" />
//                                             </div>
//                                         </div>
//                                     </Card.Body>

//                                 </Card>

//                                 <Card>
//                                     <Card.Header>
//                                         <h5 className="card-title mb-0">Product Short Description</h5>
//                                     </Card.Header>
//                                     <Card.Body>
//                                         <p className="text-muted mb-2">Add short description for product</p>
//                                         <textarea className="form-control" placeholder="Must enter minimum of a 100 characters" rows={3}></textarea>
//                                     </Card.Body>

//                                 </Card>

//                             </Col>
//                         </Row>
//                     </form>
//                 </Container>
//             </div>
//         </React.Fragment >
//     );
// }

// export default CreateProduct;


import React, { useState } from 'react';
import { Button, Card, Col, Container, Form, Row, Nav } from 'react-bootstrap';
import Breadcrumb from 'Common/BreadCrumb';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_blue.css';
import Dropzone from 'react-dropzone';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const CreateProduct = () => {
  document.title = 'Create New Product | Modav';
  const [step, setStep] = useState('general');

  const renderStepContent = () => {
    switch (step) {
      case 'general':
        return (
          <Card className="mb-3">
            <Card.Header>
              <h5 className="card-title mb-0">Général</h5>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Nom du produit</Form.Label>
                <Form.Control type="text" placeholder="Nom du produit" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Courte description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Courte description" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <CKEditor editor={ClassicEditor} data="" onChange={(e:any, editor:any) => {}} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Taxe (%)</Form.Label>
                <Form.Control type="number" placeholder="Taxe" />
              </Form.Group>
            </Card.Body>
          </Card>
        );
      case 'images':
        return (
          <Card className="mb-3">
            <Card.Header>
              <h5 className="card-title mb-0">Images du produit</h5>
            </Card.Header>
            <Card.Body>
              <Dropzone onDrop={(acceptedFiles) => {}}>
                {({ getRootProps, getInputProps }) => (
                  <div {...getRootProps()} className="dropzone">
                    <input {...getInputProps()} />
                    <p>Glissez-déposez ou cliquez pour télécharger des images</p>
                  </div>
                )}
              </Dropzone>
            </Card.Body>
          </Card>
        );
      case 'inventory':
        return (
          <Card className="mb-3">
            <Card.Header>
              <h5 className="card-title mb-0">Inventaire</h5>
            </Card.Header>
            <Card.Body>
              <Form.Group className="mb-3">
                <Form.Label>Type</Form.Label>
                <Form.Select>
                  <option>Simple</option>
                  <option>Variable</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>SKU</Form.Label>
                <Form.Control type="text" placeholder="SKU" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Quantité en stock</Form.Label>
                <Form.Control type="number" />
              </Form.Group>
            </Card.Body>
          </Card>
        );
        case 'configuration':
  return (
    <Card className="mb-3">
      <Card.Header>
        <h5 className="card-title mb-0">Configuration</h5>
      </Card.Header>
      <Card.Body>
        <Form.Group className="mb-3">
          <Form.Label>Statut de vente</Form.Label>
          <Form.Select>
            <option value="active">Actif</option>
            <option value="inactive">Inactif</option>
          </Form.Select>
        </Form.Group>
        {/* <Form.Group className="mb-3">
          <Form.Label>Date de début</Form.Label>
          <Flatpickr className="form-control" options={{ dateFormat: 'Y-m-d' }} />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Date de fin</Form.Label>
          <Flatpickr className="form-control" options={{ dateFormat: 'Y-m-d' }} />
        </Form.Group> */}
        <Form.Group className="mb-3">
          <Form.Label>Unité</Form.Label>
          <Form.Control type="text" placeholder="pièce, kg, etc." />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Tags</Form.Label>
          <Form.Control type="text" placeholder="Ex: été, bio, tendance" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Catégories</Form.Label>
          <Form.Select multiple>
            <option>T-shirts</option>
            <option>Chaussures</option>
            <option>Accessoires</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Marques</Form.Label>
          <Form.Select>
            <option>Nike</option>
            <option>Zara</option>
            <option>Autre</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Produits associés (aléatoires)</Form.Label>
          <Form.Control type="text" placeholder="IDs séparés par des virgules" />
        </Form.Group>
      </Card.Body>
    </Card>
  );
  case 'seo':
  return (
    <Card className="mb-3">
      <Card.Header>
        <h5 className="card-title mb-0">Référencement (SEO)</h5>
      </Card.Header>
      <Card.Body>
        <Form.Group className="mb-3">
          <Form.Label>Méta titre</Form.Label>
          <Form.Control type="text" placeholder="Titre SEO" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Méta description</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Description SEO" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image pour partage (Open Graph)</Form.Label>
          <Form.Control type="file" />
        </Form.Group>
      </Card.Body>
    </Card>
  );
  case 'shipping':
  return (
    <Card className="mb-3">
      <Card.Header>
        <h5 className="card-title mb-0">Expédition</h5>
      </Card.Header>
      <Card.Body>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Livraison gratuite" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Poids (kg)</Form.Label>
          <Form.Control type="number" step="0.01" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Texte de livraison estimée</Form.Label>
          <Form.Control type="text" placeholder="Ex: Livraison sous 3-5 jours ouvrés" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Check type="checkbox" label="Retours acceptés" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Texte de la politique de retour</Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Conditions de retour" />
        </Form.Group>
      </Card.Body>
    </Card>
  );
      default:
        return <p>Choisissez une section à gauche</p>;
    }
  };

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumb title="Create Product" pageTitle="Products" />
          <Row>
            <Col lg={3}>
              <Nav variant="pills" className="flex-column" activeKey={step} onSelect={(k:any) => setStep(k)}>
                <Nav.Item>
                  <Nav.Link eventKey="general" className="fw-bold fs-5">Général </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="images" className="fw-bold fs-5">Images</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="inventory" className="fw-bold fs-5">Inventaire</Nav.Link>
                </Nav.Item>
                <Nav.Item><Nav.Link eventKey="configuration" className="fw-bold fs-5">Configuration</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link eventKey="seo" className="fw-bold fs-5">SEO</Nav.Link></Nav.Item>
<Nav.Item><Nav.Link eventKey="shipping" className="fw-bold fs-5">Expédition</Nav.Link></Nav.Item>
              </Nav>
            </Col>
            <Col lg={9}>
              <form id="createproduct-form" autoComplete="off" className="needs-validation" noValidate>
                {renderStepContent()}
                <div className="text-end">
                  <Button variant="primary" type="submit">Enregistrer le produit</Button>
                </div>
              </form>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default CreateProduct;
