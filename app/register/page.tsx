import PaperPrimary from '@/common/paper/PaperPrimary'
import RegisterComponent from '@/components/auth-component/RegisterComponent'
import Image from 'next/image'
import React from 'react'

type Props = {}

export default function Register({}: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center">
    <PaperPrimary className="p-8 gap-4 md:gap-10">
        <div className="flex justify-center items-center">
            <Image
                src="/picture/logo/rapid-logo.png"
                alt="Rapid Logo"
                width={200}
                height={200}
            />
        </div>
        <div className="flex flex-col gap-4">
            <RegisterComponent/>
        </div>
    </PaperPrimary>
</div>
  )
}