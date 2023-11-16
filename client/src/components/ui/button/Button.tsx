import {ComponentPropsWithoutRef} from "react";


export type ButtonProps = {
    title:string
} & ComponentPropsWithoutRef<'button'>

export const Button =  (
    {
        title,
        ...props
    }:ButtonProps
) => {


    return <button  {...props}>{title}</button>
};

