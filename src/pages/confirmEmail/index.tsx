import StrongText from '@/atoms/StrongText'
import Image from 'next/image'
import PrimaryButton from '@/atoms/primaryButton'
import { ArrowRight } from 'lucide-react'

export default function ConfirmEmail() {
    return (
        <div className="bg-black w-screen h-screen text-primaryWhite flex flex-col justify-center items-center gap-2">
            <div className="w-[400px] h-[350px] border rounded-lg border-grayBlueDark bg-[#020204] p-4 flex flex-col gap-4 justify-center items-center drop-shadow-md">
                <div className="flex items-center">
                    <StrongText text="Confirme seu email" />
                    <Image
                        src={'/logo-1.svg'}
                        width={40}
                        height={40}
                        alt="Logo"
                    />
                </div>
                <PrimaryButton
                    redirectRoute="/"
                    icon={ArrowRight}
                    actionText="Já confirmei meu email"
                />
            </div>
        </div>
    )
}
