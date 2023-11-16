import { fetchBaseQuery } from '@reduxjs/toolkit/query'
import type { BaseQueryFn, FetchArgs, FetchBaseQueryError } from '@reduxjs/toolkit/query'
import { Mutex } from 'async-mutex'

const baseQuery = fetchBaseQuery({
    baseUrl: 'http://localhost:9000/',
    credentials: 'include',
})

const mutex = new Mutex()

export const baseQueryWithMutex: BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryError
> = async (args, api, extraOptions) => {
    await mutex.waitForUnlock()
    let result = await baseQuery(args, api, extraOptions)

    if (result.error && result.error.status === 401) {
        if (!mutex.isLocked()) {
            const release = await mutex.acquire()

            try {
                const refreshResult = await baseQuery(
                    { url: 'auth/refresh', method: 'GET' },
                    api,
                    extraOptions
                )



                if (refreshResult?.meta?.response?.status === 203) {
                    result = await baseQuery(args, api, extraOptions)
                }
            } finally {
                release()
            }
        } else {
            await mutex.waitForUnlock()
            result = await baseQuery(args, api, extraOptions)
        }
    }

    return result
}
