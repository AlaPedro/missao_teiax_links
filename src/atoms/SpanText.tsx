interface Props {
    text: string
}

export default function SpanText({ text }: Props) {
    return <h1 className="text-grayBlueLight font-normal text-base">{text}</h1>
}
