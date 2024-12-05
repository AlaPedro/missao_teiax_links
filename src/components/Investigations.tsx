import Card from '@/atoms/Card'
import DefaultTextInput from '@/atoms/DefaultTextInput'
import PrimaryButton from '@/atoms/primaryButton'
import StrongText from '@/atoms/StrongText'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { CirclePlus, Search } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createClient } from '../../utils/supabase/component'
import WithoutPostsAlert from './WithoutPostsAlert'

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

export default function Investigations() {
    const [investigations, setInvestigations] = useState<Investigation[]>([])
    const supabase = createClient()

    useEffect(() => {
        const fetchInvestigations = async () => {
            const { data, error } = await supabase
                .from('missao_teiax')
                .select('*')

            if (error) {
                console.error('Erro ao buscar dados:', error)
                return
            }

            setInvestigations(data as Investigation[])
        }

        fetchInvestigations()
    }, [])
    return (
        <div className="bg-primaryBlack w-screen min-h-full text-primaryWhite flex flex-col items-center gap-2 absolute">
            <Header />

            {investigations && investigations.length > 0 ? (
                <div className="relative top-[114px] justify-around w-screen max-w-[1236px] flex flex-col px-8">
                    <div className="flex justify-between mb-[20px]">
                        <StrongText text="Investigações" />
                        <PrimaryButton
                            icon={CirclePlus}
                            actionText="Nova investigação"
                            redirectRoute="/dashboard/NewInvestigation"
                        />
                    </div>
                    <div>
                        <DefaultTextInput
                            placeholder="Pesquisar"
                            value=""
                            onChange={() => {}}
                            icon={Search}
                        />
                    </div>
                    <div className="flex flex-col gap-4 mt-4 items-center justify-center">
                        {investigations.map((item) => (
                            <Card key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            ) : (
                <WithoutPostsAlert />
            )}

            <Footer />
        </div>
    )
}
