import Image from 'next/image'
import DropdownButton from './DropdownButton'
import ModalDetails from '@/components/ModalDetails'
import { useState } from 'react'

interface CardProps {
    data: Investigation
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
export default function Card({ data }: CardProps) {
    const [modalOpen, setModalOpen] = useState(false)

    const openModal = () => {
        console.log('clicou open')
        setModalOpen(true)
    }
    const closeModal = () => {
        console.log('clicou close')
        window.location.reload()
        // setModalOpen(false)
    }

    function formatDate(isoDate: string): string {
        const date = new Date(isoDate)
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()

        return `${day}/${month}/${year}`
    }

    return (
        <div
            id={data.id}
            onClick={openModal}
            className="bg-[#030711] border border-[#1D283A] h-20 w-full rounded-lg px-4 py-5 flex items-center cursor-pointer hover:bg-[#0F1629] transition-colors"
        >
            <div className="grid grid-cols-3 w-full">
                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 flex justify-center items-center rounded-full">
                        <Image
                            src={`/${data.investigation_domain}.svg`}
                            width={20}
                            height={20}
                            alt="Logo"
                        />
                    </div>
                    <div className="flex flex-col w-full gap-2">
                        <div className="flex h-5 justify-between items-center">
                            <h1 className="text-sm truncate">
                                {data.investigation_name}
                            </h1>
                            <span
                                className={` rounded-md px-2 text-xs flex  items-center justify-center ${
                                    data.investigation_active
                                        ? 'bg-green-800 w-[45px] h-20px'
                                        : 'bg-[#374151]'
                                }`}
                            >
                                {data.investigation_active
                                    ? 'Ativa'
                                    : 'Encerrada'}
                            </span>
                        </div>

                        <span className="text-xs">{data.clicks} acessos</span>
                    </div>
                </div>

                <div className="flex flex-col items-end">
                    <span className="text-sm">Criada em</span>
                    <span className="text-sm">
                        {formatDate(data.created_at)}
                    </span>
                </div>
                <div className="flex flex-col items-end">
                    <DropdownButton data={data} />
                </div>
                {modalOpen && (
                    <ModalDetails data={data} closeModal={closeModal} />
                )}
            </div>
        </div>
    )
}
