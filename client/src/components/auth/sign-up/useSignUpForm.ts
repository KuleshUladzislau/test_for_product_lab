import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export type SignUpValuesForm = z.infer<typeof signInSchema>

const signInSchema = z.object({
    email: z.string().email(),
    password: z.string().min(3),
})

export const useSignUpForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm<SignUpValuesForm>({
        resolver: zodResolver(signInSchema),
        defaultValues: { email: '', password: '' },
    })

    return { handleSubmit, register, errors }
}
