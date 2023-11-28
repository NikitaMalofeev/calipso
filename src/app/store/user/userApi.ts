import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "api/user",
  baseQuery: fetchBaseQuery({baseUrl: "url с бека",}),
  endpoints: (builder) => ({
    loginByEmail: builder.query({
      query: (email) => `login?email=${email}`,
    }),
    loginByPhone: builder.query({
      query: (phone) => `login?phone=${phone}`,
    }),
  }),
});
