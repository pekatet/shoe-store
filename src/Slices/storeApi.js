// import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query'
//
// export const storeApi = createApi({
//   baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL}),
//   endpoints: (builder) => ({
//     getItems: builder.query({
//       query: ({offset, categoryId}) => ({
//         url: `items?offset=${offset}&categoryId=${categoryId}`,
//         validateStatus: (response, result) =>
//           response.status === 200 && !result.isError, // always returns a 200, but sets an `isError` property when there is an error.
//       }),
//     }),
//   }),
// })

import axios from 'axios'

export const itemsApi = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,//?offset=${offset}&categoryId=${categoryId}`,
  headers: {
    'Content-Type': 'application/json'
  },
})
