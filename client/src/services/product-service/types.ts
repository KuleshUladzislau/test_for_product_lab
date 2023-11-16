
type CommentsType = {
    userId:string
    message:string
    userName:string
    _id:string
}

export type ProductsType ={
    _id:string
    title:string
    price:number
    image:string
    userId:string
    comments:CommentsType[]
}
export type CreateCommentType = {
    productId: string
    message:string
    userId:string | undefined
    userName:string | undefined
}

