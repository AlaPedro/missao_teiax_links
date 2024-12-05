import PrimaryButton from '@/atoms/primaryButton'
import SecondaryButton from '@/atoms/secondaryButton'
import { Files } from 'lucide-react'
import Image from 'next/image'
import { useRef } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { createClient } from '../../utils/supabase/component'

interface CardProps {
    data: Investigation
    closeModal: () => void
}

interface Investigation {
    id: string
    investigation_name: string
    investigation_domain: string
    URL_path: string
    redirect_url: string
    investigation_objective: string
    investigation_active: boolean
    clicks: number
    created_at: string
    user_id: string
}

export default function ModalDetails({ data, closeModal }: CardProps) {
    const supabase = createClient()
    const linkRef = useRef<HTMLSpanElement | null>(null)
    const copyToClipboard = () => {
        if (linkRef.current) {
            navigator.clipboard
                .writeText(linkRef.current.innerText)
                .then(() => {
                    toastSuccess('Link copiado com sucesso!')
                })

            updateClicks().catch((err) => {
                console.error('Erro ao copiar o link: ', err)
                alert('Falha ao copiar o link')
            })
        }
    }

    const idToUpdate = data.id

    const updateClicks = async () => {
        try {
            const { error } = await supabase
                .from('missao_teiax')
                .update({ clicks: data.clicks + 1 })
                .eq('id', idToUpdate)
                .select()
            if (error) {
                console.log(error)
                return
            }
        } catch (err) {
            console.log(err)
        }
    }

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    const toastSuccess = (message: string) => {
        toast.success(message, {
            position: 'bottom-center',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
        })
    }
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="flex flex-col justify-center items-center w-[636px] h-[315px] bg-[#020204] border border-grayBlueDark rounded-[20px]">
                <div
                    onClick={handleClick}
                    className="w-[556px] h-[350px] flex flex-col justify-center items-center"
                >
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
                                    src={`/${data.investigation_domain}.svg`}
                                    width={20}
                                    height={20}
                                    alt="Logo"
                                />
                                <span
                                    ref={linkRef}
                                    className="text-sm font-normal"
                                >
                                    {`${data.investigation_domain}/${data.URL_path}`}
                                </span>
                            </div>
                            <PrimaryButton
                                onClickAction={copyToClipboard}
                                icon={Files}
                                actionText="Copiar link"
                                redirectRoute="#"
                            />
                        </div>
                    </div>
                    <div className="w-full flex justify-end mt-8">
                        <SecondaryButton
                            actionText="Fechar"
                            onClickAction={closeModal}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
