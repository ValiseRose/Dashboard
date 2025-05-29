
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "app/store";
import { Subsubcategory } from "features/subsubcategory/subsubcategorySlice";


export interface Subcategory {
  _id?: string;
  name: string;
  slug?: string;
  category: string;
  subsubcategories?: Subsubcategory[];
}

export const subcategorySlice = createApi({
  reducerPath: "subcategory",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/subcategory/`,
   
  }),
  tagTypes: ["Subcategory"],
  endpoints: (builder) => ({
    fetchAllSubcategories: builder.query<Subcategory[], void>({
      query: () => "get-subcategories",
      providesTags: ["Subcategory"],
    }),
    createSubcategory: builder.mutation<Subcategory, Partial<Subcategory>>({
      query: (payload) => ({
        url: "create-subcategory",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Subcategory"],
    }),
    updateSubcategory: builder.mutation<Subcategory, Subcategory>({
      query: ({ _id, ...rest }) => ({
        url: `update-subcategory/${_id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Subcategory"],
    }),
    deleteSubcategory: builder.mutation<void, string>({
      query: (id) => ({
        url: `delete-subcategory/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Subcategory"],
    }),
    getSubcategoriesByCategoryId: builder.query<Subcategory[], string>({
      query: (categoryId) => `category/${categoryId}/subcategories`,
      providesTags: ["Subcategory"],
    }),
  }),
});

export const {
  useFetchAllSubcategoriesQuery,
  useCreateSubcategoryMutation,
  useUpdateSubcategoryMutation,
  useDeleteSubcategoryMutation,
  useGetSubcategoriesByCategoryIdQuery,
} = subcategorySlice;
