import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
  endpoints: (builders) => ({
   

    phone: builders.query({
      query: (phoneNumber) => ({
        url: `/user/phone/${phoneNumber}`,
        method: "GET",
      }),
    }),


    requestForAgent: builders.mutation({
      query: () => ({
        url: "/user/agent-request",
        method: "POST",
      }),
    }),

    payNow: builders.mutation({
      query: (userId) => ({
        url: `/payment/init-payment/${userId}`,
        method: "POST",
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
  useUserQuery,
  useLazyPhoneQuery,
  useGetAllUsersQuery,
  useRequestForAgentMutation,
  usePayNowMutation
} = userApi;
