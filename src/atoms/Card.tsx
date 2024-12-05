import DropdownButton from './DropdownButton'

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
    function formatDate(isoDate: string): string {
        const date = new Date(isoDate)
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()

        return `${day}/${month}/${year}`
    }

    return (
        <div className="bg-[#030711] border border-[#1D283A] h-20 w-full rounded-lg px-4 py-5 flex items-center">
            <div className="grid grid-cols-3 w-full">
                <div className="flex gap-4 items-center">
                    <div className="bg-red-500 w-10 h-10 flex justify-center items-center rounded-full">
                        ico
                    </div>
                    <div className="flex flex-col w-full">
                        <div className="flex justify-between">
                            <h1>{data.investigation_name}</h1>
                            <span
                                className={` rounded-md px-2 text-xs flex justify-center items-center ${
                                    data.investigation_active
                                        ? 'bg-green-800'
                                        : 'bg-[#374151]'
                                }`}
                            >
                                {data.investigation_active
                                    ? 'Ativa'
                                    : 'Encerrada'}
                            </span>
                        </div>

                        <span>{data.clicks} acessos</span>
                    </div>
                </div>

                <div className="flex flex-col items-end">
                    <span>Criada em</span>
                    <span>{formatDate(data.created_at)}</span>
                </div>
                <div className="flex flex-col items-end">
                    <DropdownButton data={data} />
                </div>
            </div>
        </div>
    )
}
