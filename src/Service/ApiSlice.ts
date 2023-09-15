import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const BaseUrl = process.env.REACT_APP_BASE_URL;
const apiSlice = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: BaseUrl }),
  endpoints: () => ({}),
  tagTypes: ["limupa"],
});
export default apiSlice;
