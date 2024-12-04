import PrimaryButton from '@/atoms/primaryButton'
import SecondaryButton from '@/atoms/secondaryButton'
import SpanText from '@/atoms/SpanText'
import StrongText from '@/atoms/StrongText'
import { Files } from 'lucide-react'
import Image from 'next/image'

export default function Modal() {
    return (
        <div className="flex flex-col justify-center items-center w-[636px] h-[502px] bg-[#020204] border border-grayBlueDark rounded-[20px]">
            <div className="w-[556px] h-[350px] flex flex-col justify-center items-center">
                <div className="flex flex-col items-center justify-center gap-8">
                    <Image
                        alt="confirm icon"
                        width={68}
                        height={68}
                        src={'/confirm-icon.svg'}
                    />
                    <div className="flex flex-col justify-center items-center gap-3">
                        <StrongText text="Investigação criada com sucesso!" />
                        <SpanText text="Copie o link e envie para o seu alvo." />
                    </div>
                </div>

                <div className="w-full bg-[#030711] h-[155px] border border-[#1D283A] rounded-[10px] flex flex-col justify-center items-start py-[20px] px-[24px] gap-[6px]">
                    <h1 className="text-white font-semibold text-base">
                        Link de captura
                    </h1>
                    <span className="text-[#E1E7EF] text-sm font-normal ">
                        Com ele você obterá apenas o IP do alvo. A
                        geolocalização não é precisa.
                    </span>
                    <div className="flex w-full justify-between">
                        <div className="h-[36px] w-[374px] bg-zinc-950 border border-zinc-800 rounded-md flex items-center gap-2 py-2 px-3">
                            <Image
                                src={'/airbnb-logo.svg'}
                                width={15}
                                height={15}
                                alt="Logo"
                            />
                            <span className="text-sm font-normal">
                                https://airbnb.oficial.cam/jfznrtklkxucfe
                            </span>
                        </div>
                        <PrimaryButton
                            icon={Files}
                            actionText="Copiar link"
                            redirectRoute="#"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-end mt-8">
                    <SecondaryButton actionText="Fechar" redirectRoute="#" />
                </div>
            </div>
        </div>
    )
}
