import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import {toast} from "react-toastify";

export type AddCommentsType = z.infer<typeof commentsSchema>

const commentsSchema = z.object({
    comment: z.string().min(1,'заполните поле')

})

export const useAddCommentsForm = () => {
    const {
        handleSubmit,
        register,
        reset,
        watch,

    } = useForm<{ comment: string }>({
        defaultValues: {
            comment: ''
        },
        resolver: zodResolver(commentsSchema)
    })

    return { handleSubmit, register,reset,watch }
}
