import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rtkQueryApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `/web`,
    credentials: 'include',
  }),
  endpoints: () => ({}),
});
