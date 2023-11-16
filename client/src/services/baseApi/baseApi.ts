import { createApi } from '@reduxjs/toolkit/query/react'
import {baseQueryWithMutex} from "./base-api-witch-reauth";
export const productsApi = createApi({
    reducerPath: 'productsApi',
    baseQuery: baseQueryWithMutex,
    tagTypes:['products','auth'],
    endpoints: (builder) => ({}),
})





