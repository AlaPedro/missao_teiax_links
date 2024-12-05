import { createClient } from '../../utils/supabase/component'
import { Ellipsis, Ban, Trash } from 'lucide-react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

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

export default function DropdownButton({ data }: CardProps) {
    const supabase = createClient()
    const investigationStatus = data.investigation_active
    const idToUpdate = data.id

    const updateStatus = async () => {
        try {
            const { error } = await supabase
                .from('missao_teiax')
                .update({ investigation_active: !investigationStatus })
                .eq('id', idToUpdate)
                .select()
            if (error) {
                console.log(error)
                return
            }
            window.location.reload()
        } catch (err) {
            console.log(err)
        }
    }

    const deleteRow = async () => {
        try {
            const {} = await supabase
                .from('missao_teiax')
                .delete()
                .eq('id', idToUpdate)

            window.location.reload()
        } catch (err) {
            console.log(err)
            return
        }
    }

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation()
    }

    return (
        <div onClick={handleClick}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <button className="w-10 h-10 bg-[#0F1629] border border-[#1D283A] rounded-lg flex items-center justify-center">
                        <Ellipsis />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56 bg-zinc-950">
                    <DropdownMenuItem
                        onClick={updateStatus}
                        className="text-zinc-50"
                    >
                        {data.investigation_active ? 'encerrar' : 'ativar'}
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                        className="text-red-600 font-semibold"
                        onClick={deleteRow}
                    >
                        <Trash />
                        Excluir
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}
