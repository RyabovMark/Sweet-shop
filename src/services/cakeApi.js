import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const cakeApi = createApi({
  reducerPath: 'cake/api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63275f48ba4a9c475335e1b0.mockapi.io/'
  }),
  endpoints: (build) => ({
    getFilteredData: build.query({
      query: ([field, count]) => ({
        url: `cake`,
        params: {
          type: field,
          page: 1,
          limit: count
        }
      })
    }),
    addQuestion: build.mutation({
      query: (body) => ({
        url: 'question',
        method: 'POST',
        body
      })
    }),
    addOrder: build.mutation({
      query: (body) => ({
        url: 'orders',
        method: 'POST',
        body
      })
    })
  }),
})

export const {
  useGetFilteredDataQuery,
  useAddQuestionMutation,
  useAddOrderMutation
} = cakeApi;