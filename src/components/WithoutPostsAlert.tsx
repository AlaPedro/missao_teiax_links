import Image from 'next/image'
import PrimaryButton from '../atoms/primaryButton'
import StrongText from '@/atoms/StrongText'
import SpanText from '@/atoms/SpanText'
import { CirclePlus } from 'lucide-react'

export default function WithoutPostsAlert() {
    return (
        <div className="flex flex-col items-center gap-6">
            <Image
                src={'/alert-icon.svg'}
                width={68}
                height={68}
                alt="mini icon"
            />
            <div className="flex flex-col gap-4 items-center">
                <StrongText text="Você não tem investigações criadas" />
                <SpanText text="Criar uma investigação com o HI SPY é simples. Em alguns passos sua investigação estará criada." />
            </div>
            <PrimaryButton
                icon={CirclePlus}
                actionText="Nova investigação"
                redirectRoute="/dashboard/NewInvestigation"
            />
        </div>
    )
}
