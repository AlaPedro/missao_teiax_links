import DefaultTextArea from '@/atoms/DefaultTextArea'
import DefaultTextInput from '@/atoms/DefaultTextInput'
import InputSelectDomain from '@/atoms/InputSelectDomain'
import MediumText from '@/atoms/MediumText'
import PrimaryButton from '@/atoms/primaryButton'
import StrongText from '@/atoms/StrongText'
import { createClient } from '../../utils/supabase/component'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function FormAddIvestigation() {
    const supabase = createClient()

    const [investigationName, setInvestigationName] = useState<string>('')
    const [investigationObjective, setInvestigationObjective] =
        useState<string>('')
    const [selectDomain, setSelectDomain] =
        useState<string>('airbnb.oficial.cam')
    const [urlPath, setUrlPath] = useState<string>('')
    const [redirectUrl, setRedirectUrl] = useState<string>('')
    const investigationIsActive = true
    const investigationClicks = 0
    const [userId, setUserId] = useState<string | undefined>('')

    const router = useRouter()

    function verifyData() {
        if (investigationName === '') {
            toastWarn('Defina o nome de sua investigação!')
            return
        }
        if (investigationName.length > 30) {
            toastWarn('O nome da sua investigação está muito grande!')
            return
        }
        if (urlPath === '') {
            toastWarn('Defina a personalização da URL!')
            return
        }
        if (redirectUrl === '') {
            toastWarn('Defina a URL de redirecionamento!')
            return
        } else {
            handleCreateInvestigation()
        }
    }

    async function handleCreateInvestigation() {
        try {
            const { data, error } = await supabase
                .from('missao_teiax')
                .insert([
                    {
                        investigation_name: `${investigationName}`,
                        investigation_domain: `${selectDomain}`,
                        URL_path: `${urlPath}`,
                        redirect_url: `${redirectUrl}`,
                        investigation_objective: `${investigationObjective}`,
                        investigation_active: investigationIsActive,
                        clicks: investigationClicks,
                        user_id: `${userId}`,
                    },
                ])
                .select()
            if (error) {
                console.log(error)
            }
            const insertedId = data![0]?.id
            router.push(`/dashboard/Success?id=${insertedId}`)
        } catch (err) {
            console.log(err)
        }
    }

    const toastWarn = (message: string) => {
        toast.warn(message, {
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

    useEffect(() => {
        const fetchData = async () => {
            const {
                data: { user },
            } = await supabase.auth.getUser()
            const userIdFetch = user?.id
            setUserId(userIdFetch)
        }
        fetchData()
    }, [])

    return (
        <div className="w-[550px] flex flex-col gap-8">
            <StrongText text="Nova Investigação" />

            <div className="flex flex-col gap-[6px]">
                <MediumText text="Como quer chamar a sua investigação?" />
                <DefaultTextInput
                    value={investigationName}
                    onChange={setInvestigationName}
                    placeholder="Dê um nome para a sua investigação"
                />
            </div>
            <div>
                <MediumText
                    text="Qual o objetivo dessa investigação?"
                    lightText="(opicional)"
                />
                <DefaultTextArea
                    value={investigationObjective}
                    onChange={setInvestigationObjective}
                    placeholder="Descreva rapidamente o objetivo dessa investigação"
                />
            </div>
            <div className="grid grid-cols-2 gap-4 items-start">
                <div className="flex items-center gap-5 justify-center">
                    <div className="w-full">
                        <MediumText text="Escolha um domínio" lightText="(3)" />
                        <InputSelectDomain
                            selectedValue={selectDomain}
                            setSelectedValue={setSelectDomain}
                        />
                    </div>

                    <h1 className="mt-4">/</h1>
                </div>

                <div className="w-full">
                    <MediumText text="Personalize a URL" />
                    <DefaultTextInput
                        value={urlPath}
                        onChange={setUrlPath}
                        placeholder="sugestao-url"
                        spanText="Dica: Simule a URL de um site real."
                    />
                </div>
            </div>
            <div>
                <MediumText text="Para onde deseja redirecionar o alvo?" />
                <DefaultTextInput
                    value={redirectUrl}
                    onChange={setRedirectUrl}
                    placeholder="www.google.com"
                    spanText="Depois de clicar no Link de Captura, o alvo será direcionado para a URL acima."
                />
            </div>
            <div className="w-full flex justify-end">
                <PrimaryButton
                    onClickAction={verifyData}
                    actionText="Criar investigação"
                />
            </div>
        </div>
    )
}
