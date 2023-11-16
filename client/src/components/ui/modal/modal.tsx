import React, { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'



import s from './modal.module.css'
import * as Dialog from "@radix-ui/react-dialog";



export type ModalType = {
    children?: React.ReactNode
    title?: string
    className?: string
    setOpen: (value: boolean) => void
} & ComponentPropsWithoutRef<typeof Dialog.Root>

export const Modal = forwardRef<ElementRef<typeof Dialog.Root>, ModalType>(
    ({
         open,
         title,
         setOpen,
         children,
         ...restProps
     }, ref
    ) => {
        return (
            <Dialog.Root open={open} onOpenChange={setOpen} {...restProps} >
                {open && (
                    <Dialog.Portal forceMount>
                        <Dialog.Overlay className={s.overlay} forceMount />
                        <Dialog.Content ref={ref}>
                            <div className={s.content}>
                                {children}
                            </div>
                        </Dialog.Content>
                    </Dialog.Portal>
                )}
            </Dialog.Root>
        )
    }
)
