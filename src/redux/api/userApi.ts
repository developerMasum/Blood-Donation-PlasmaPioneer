import { baseApi } from "@/redux/api/baseApi";
import { tagTypes } from "@/redux/tag-types";
import { IMeta } from "@/types";
// import { TAdmin } from "@/types/admin";

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
   

    deleteUser: build.mutation({
      query: (id) => ({
        url: `/user/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.donner],
    }),
    createUser: build.mutation({
      query: (data) => ({
        url: "/register",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    //get single Admin
    getSingleAdmin: build.query({
      query: (id: string | string[] | undefined) => ({
        url: `/admin/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.admin],
    }),
    // update a Admin
    updateAdmin: build.mutation({
      query: (data) => ({
        url: `/admin/${data.id}`,
        method: "PATCH",
        data: data.body,
      }),
      invalidatesTags: [tagTypes.admin, tagTypes.user],
    }),
  }),
});

export const {
  //   useGetAllAdminsQuery,
useDeleteUserMutation,
  useGetSingleAdminQuery,
  useUpdateAdminMutation,
  useCreateUserMutation,
} = userApi;
