export type CommentsType = {
    userId: string
    message: string
    userName: string
    _id:string
}

export type CommentPageProps = {
    authUserId:string|undefined
    userName:string | undefined
    imageId:string
    title: string
    price: number
    image: string
    userId: string
    comments: CommentsType[]
}
