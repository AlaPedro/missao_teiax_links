import DefaultTextArea from '@/atoms/DefaultTextArea'
import DefaultTextInput from '@/atoms/DefaultTextInput'
import InputSelectDomain from '@/atoms/InputSelectDomain'
import MediumText from '@/atoms/MediumText'
import PrimaryButton from '@/atoms/primaryButton'
import StrongText from '@/atoms/StrongText'

export default function FormAddIvestigation() {
    return (
        <div className="w-[550px] flex flex-col gap-8">
            <StrongText text="Nova Investigação" />

            <div className="flex flex-col gap-[6px]">
                <MediumText
                    text="Como quer chamar a sua investigação?"
                    lightText="(opicional)"
                />
                <DefaultTextInput placeholder="Dê um nome para a sua investigação" />
            </div>
            <div>
                <MediumText text="Qual o objetivo dessa investigação?" />
                <DefaultTextArea placeholder="Descreva rapidamente o objetivo dessa investigação" />
            </div>
            <div className="grid grid-cols-2 gap-4 items-start">
                <div className="flex items-center gap-5 justify-center">
                    <div className="w-full">
                        <MediumText
                            text="Escolha um domínio"
                            lightText="(107)"
                        />
                        <InputSelectDomain placeholder="airbnb.oficial.cam" />
                    </div>

                    <h1 className="mt-4">/</h1>
                </div>

                <div className="w-full">
                    <MediumText text="Personalize a URL" />
                    <DefaultTextInput
                        placeholder="sugestao-url"
                        spanText="Dica: Simule a URL de um site real."
                        white={true}
                    />
                </div>
            </div>
            <div>
                <MediumText
                    text="Como quer chamar a sua investigação?"
                    lightText="(opicional)"
                />
                <DefaultTextInput
                    placeholder="Dê um nome para a sua investigação"
                    spanText="Depois de clicar no Link de Captura, o alvo será direcionado para a URL acima."
                />
            </div>
            <div className="w-full flex justify-end">
                <PrimaryButton
                    actionText="Criar investigação"
                    redirectRoute="#"
                />
            </div>
        </div>
    )
}
