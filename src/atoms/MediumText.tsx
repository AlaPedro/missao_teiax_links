interface Props {
    text: string
    lightText?: string
}

export default function MediumText({ text, lightText }: Props) {
    return (
        <h1 className="text-white font-medium text-base flex gap-1">
            {text}
            <span className="text-grayBlueLight font-medium text-base">
                {lightText}
            </span>
        </h1>
    )
}
