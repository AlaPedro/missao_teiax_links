interface Props {
    placeholder: string
    value: string
    onChange: (value: string) => void
}

export default function DefaultTextArea({
    placeholder,
    value,
    onChange,
}: Props) {
    return (
        <textarea
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="bg-zinc-950 p-2 border border-grayBlueDark rounded-md h-[100px] px-2 py-4 w-full placeholder:text-grayBlueLight"
            placeholder={`${placeholder}`}
        />
    )
}
