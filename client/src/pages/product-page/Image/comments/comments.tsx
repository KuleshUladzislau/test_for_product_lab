import {SubmitHandler} from "react-hook-form";
import s from './comments-page.module.css'
import React from "react";
import {Comment} from "./comment/comment";
import {AddCommentsType, useAddCommentsForm} from "./useAddComments";
import { useCreateCommentMutation } from "services/product-service/product-service";
import { Button } from "components/ui";
import {CommentPageProps} from "../types";








export const Comments = (
    {
        price,
        title,
        userId,
        comments,
        image,
        imageId,
        userName,
        authUserId
    }
        : CommentPageProps
) => {


    const [addComment] = useCreateCommentMutation()

    const  {
        reset,
        register,
        handleSubmit,
        watch
    } = useAddCommentsForm()

    const onSubmitHandler: SubmitHandler<AddCommentsType> = (data) => {

        addComment({
            userId:authUserId,
            userName: userName,
            message: data.comment,
            productId: imageId
        })
        reset()
    }

    const isDisabled = watch('comment').length === 0



    const mappedComments = comments.map(c =>
       <Comment
           key={c._id}
           imageId={imageId}
           id={c._id}
           userId={userId}
           userName={c.userName}
           message={c.message}
           commentUserId={c.userId}
           authUserId={authUserId}
       />
    )






    return (
        <div className={s.container}>

            <img src={image} alt="" className={s.image}/>
            <div className={s.commentsWrapper}>
                <div className={s.titleWrapper}>
                    <h1>{title}</h1>
                    <h2>цена:{price} byn</h2>
                </div>
                <div className={s.commentsContainer2}>
                    {mappedComments}
                </div>
                <form className={s.formContainer} onSubmit={handleSubmit(onSubmitHandler)}>
                    <input tabIndex={-1} className={s.input} {...register('comment', {required: true})}  />
                    <Button title={'Send'} disabled={isDisabled} className={s.button} />
                </form>
            </div>


        </div>
    )
}
