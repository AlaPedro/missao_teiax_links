import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { createClient } from '../../../utils/supabase/component'
import { Loader } from 'lucide-react'

export default function Success() {
    const supabase = createClient()
    const router = useRouter()
    const { id } = router.query
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const { data, error } = await supabase
                        .from('missao_teiax')
                        .select('*')
                        .eq('id', id)
                        .single()

                    if (error) throw error
                    console.log(data)
                    setData(data)
                    setLoading(false)
                } catch (error) {
                    console.error('Erro ao recuperar os dados:', error)
                    setLoading(false)
                }
            }

            fetchData()
        }
    }, [id])

    return (
        <div className="bg-black w-screen h-screen text-primaryWhite flex flex-col justify-center items-center gap-2">
            {loading ? (
                <Loader
                    width={200}
                    height={100}
                    className="animate-spin duration-[999]"
                />
            ) : (
                <Modal data={data} />
            )}

            <Footer />
        </div>
    )
}
