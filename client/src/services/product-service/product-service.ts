import {productsApi} from "../baseApi/baseApi";
import {CreateCommentType, ProductsType} from "./types";


const imageApi = productsApi.injectEndpoints({
    endpoints: (builder) => ({
        getProducts: builder.query<ProductsType[], void>({
            query: () => `products`,
            providesTags: ['products']
        }),
        addProducts: builder.mutation<void, { title: string, price?: number }>({
            query: ({title, price}) => ({
                url: 'products',
                method: 'POST',
                body: {
                    title,
                    price
                }
            }),
            invalidatesTags: ['products']
        }),
        deleteProduct: builder.mutation<void, { id: string }>({
            query: ({id}) => ({
                url: 'products',
                method: 'delete',
                body: {id}
            }),
            invalidatesTags: ['products']
        }),
        createComment: builder.mutation<void, CreateCommentType>({
            query: ({productId,userName,userId,message}) => ({
                url: 'products/comments',
                method: 'put',
                body: {
                    productId,
                    userName,
                    userId,
                    message
                }
            }),
            invalidatesTags: ['products']
        }),
        deleteComment: builder.mutation<void,{productId:string,commentId:string} >({
            query: ({productId,commentId}) => ({
                url: 'products/comments',
                method: 'delete',
                body: {
                    productId,
                    commentId
                }
            }),
            invalidatesTags: ['products']
        })
    }),
})

export const {
    useGetProductsQuery,
    useAddProductsMutation,
    useDeleteProductMutation,
    useCreateCommentMutation,
    useDeleteCommentMutation
} = imageApi



