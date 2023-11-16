import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export type SignInValuesForm = z.infer<typeof signInSchema>

const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
})

export const useSignInForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<SignInValuesForm>({
        resolver: zodResolver(signInSchema),
        defaultValues: { email: '', password: '' },
    })

    return { handleSubmit, register, errors }
}
