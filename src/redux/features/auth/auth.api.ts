import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builders) => ({
    register: builders.mutation({
      query: (userInfo) => ({
        url: "/user/register",
        method: "POST",
        data: userInfo,
      }),
    }),

    login: builders.mutation({
      query: (loginInfo) => ({
        url: "/auth/login",
        method: "POST",
        data: loginInfo,
      }),
    }),

    logout: builders.mutation({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
    }),


    phone: builders.query({
      query: (phoneNumber) => ({
        url: `/user/phone/${phoneNumber}`,
        method: "GET",
      }),
    }),


    getAllUsers: builders.query({
      query: () => ({
        url: "user/all-users",
        method: "GET",
      }),
    }),

    user: builders.query({
      query: () => ({
        url: "/user/me",
        method: "GET",
      }),
      providesTags:["Transaction"]
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useUserQuery,
  useLogoutMutation,
  useLazyPhoneQuery,
  useGetAllUsersQuery
} = authApi;
