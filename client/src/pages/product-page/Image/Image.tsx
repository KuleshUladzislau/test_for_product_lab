import React, {useState} from "react";
import style from "../products-page.module.css";


import {CommentPageProps} from "./types";
import {Comments} from "./comments/comments";
import { Modal } from "components/ui";

export const Image = (
    {
        price,
        title,
        userId,
        comments,
        image,
        userName,
        imageId,
        authUserId
    }
        : CommentPageProps) => {

    const [open, setOpen] = useState(false)

    const openModal = () => setOpen(true)

    return (
        <div>
            <img src={image} alt="img" className={style.productImage} onClick={openModal}/>
            <Modal setOpen={setOpen} open={open} >
                <Comments
                    key={userId}
                    title={title}
                    price={price}
                    image={image}
                    userId={userId}
                    comments={comments}
                    userName={userName}
                    imageId={imageId}
                    authUserId={authUserId}

                />
            </Modal>
        </div>

    )
}



