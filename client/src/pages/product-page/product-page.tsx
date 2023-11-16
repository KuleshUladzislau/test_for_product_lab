import React from 'react';
import style from './products-page.module.css'

import {Image} from './Image/Image'
import { useMeQuery } from 'services/auth-sevice/auth-api';
import { useGetProductsQuery } from 'services/product-service/product-service';



export const ProductPage = () => {

    const {data} = useGetProductsQuery()
    const {data:medata} = useMeQuery()

    const images = data?.map(el => <Image
            imageId={el._id}
            title={el.title}
            price={el.price}
            image={el.image}
            userId={el.userId}
            comments={el.comments}
            userName={medata?.userName}
            authUserId={medata?._id}
            key={el.title}
        />
    )

    return (
        <div className={style.container}>
            {images}
        </div>
    );
};








