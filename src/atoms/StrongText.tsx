interface Props {
    text: string
}

export default function StrongText({ text }: Props) {
    return <h1 className="text-white font-semibold text-2xl">{text}</h1>
}
