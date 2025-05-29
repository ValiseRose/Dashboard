import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { RootState } from "app/store";

export interface Subsubcategory {
  _id?: string;
  name: string;
  slug?: string;
  subcategory: string;
}

export const subsubcategorySlice = createApi({
  reducerPath: "subsubcategory",
  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.REACT_APP_API_URL}/api/subsubcategory/`,
   
  }),
  tagTypes: ["Subsubcategory"],
  endpoints: (builder) => ({
    fetchAllSubsubcategories: builder.query<Subsubcategory[], void>({
      query: () => "get-subsubcategories",
      providesTags: ["Subsubcategory"],
    }),
    createSubsubcategory: builder.mutation<Subsubcategory, Partial<Subsubcategory>>({
      query: (payload) => ({
        url: "create-subsubcategory",
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["Subsubcategory"],
    }),
    updateSubsubcategory: builder.mutation<Subsubcategory, Subsubcategory>({
      query: ({ _id, ...rest }) => ({
        url: `update-subsubcategory/${_id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Subsubcategory"],
    }),
    deleteSubsubcategory: builder.mutation<void, string>({
      query: (id) => ({
        url: `delete-subsubcategory/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Subsubcategory"],
    }),
  }),
});

export const {
  useFetchAllSubsubcategoriesQuery,
  useCreateSubsubcategoryMutation,
  useUpdateSubsubcategoryMutation,
  useDeleteSubsubcategoryMutation,
} = subsubcategorySlice;
