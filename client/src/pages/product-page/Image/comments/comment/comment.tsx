import {Button} from 'components/ui';
import React from 'react';
import {useDeleteCommentMutation} from 'services/product-service/product-service';
import s from './comments.module.css'


type CommentProps = {
    imageId: string
    id: string
    userId: string
    userName: string
    message: string
    commentUserId: string
    authUserId: string | undefined
}
export const Comment = (
        {
            imageId,
            userId,
            id,
            message,
            userName,
            commentUserId,
            authUserId
        }: CommentProps
    ) => {


        const isMyComment = commentUserId === authUserId

        const [deleteComment] = useDeleteCommentMutation()
        const deleteProductHandler = () => {
            deleteComment({productId: imageId, commentId: id})
        }
        return (
            <div className={s.commentsContainer} key={userId}>
                {isMyComment && <Button className={s.deleteComment} title={'+'} onClick={deleteProductHandler}/>}
                <h3>{userName}:</h3>
                <p>{message}</p>
            </div>
        )

    }
;

