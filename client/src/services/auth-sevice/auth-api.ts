import {productsApi} from "../baseApi/baseApi";
import {MeResponse} from "./types";


const authApi = productsApi.injectEndpoints({
    endpoints:builder=>({
        me:builder.query<MeResponse,void >({
            query:()=>({
                url: 'auth/me',
                method: "GET"
            }),
            providesTags:['auth'],
        })
        ,
        login:builder.mutation<void,{email:string,password:string}>({
            query:({email,password})=>({
                url:'auth/login',
                body:{email,password},
                method:'POST',
            }),
            invalidatesTags:['auth']
        }),
        logout:builder.mutation<void ,void>({
            query:()=>({
                url:'auth/logout',
                method:'POST'
            }),
            invalidatesTags: ['auth']
        }),
        registration:builder.mutation<void,{email:string,password:string}>({
            query:({email,password})=>({
                url:'auth/registration',
                body:{email,password},
                method:'POST',
            }),
            invalidatesTags:['auth']
        }),

    })
})

export const  {
    useLogoutMutation,
    useLoginMutation,
    useMeQuery,
    useRegistrationMutation
} = authApi




