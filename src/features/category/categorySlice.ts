import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "app/store";

export interface Category {
  _id?: string;
  name: string;
  slug?: string;
}

export const categorySlice = createApi({
  reducerPath: "category",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/category/`,
   
  }),
  tagTypes: ["Category"],
  endpoints: (builder) => ({
    fetchAllCategories: builder.query<Category[], void>({
      query: () => "get-categories",
      providesTags: ["Category"],
    }),
    createCategory: builder.mutation<Category, Partial<Category>>({
      query: (payload) => ({
        url: "create-category",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Category"],
    }),
    updateCategory: builder.mutation<Category, Category>({
      query: ({ _id, ...rest }) => ({
        url: `update-category/${_id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Category"],
    }),
    deleteCategory: builder.mutation<void, string>({
      query: (id) => ({
        url: `delete-category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Category"],
    }),
  }),
});

export const {
  useFetchAllCategoriesQuery,
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useDeleteCategoryMutation,
} = categorySlice;
