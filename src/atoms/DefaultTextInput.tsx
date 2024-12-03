interface Props {
    placeholder: string
    spanText?: string
    white?: boolean
}

export default function DefaultTextInput({
    placeholder,
    spanText,
    white,
}: Props) {
    return (
        <>
            <input
                placeholder={placeholder}
                type="text"
                className={`bg-zinc-950 p-2 border border-grayBlueDark rounded-md h-10 px-2 py-4 w-full ${
                    white
                        ? 'placeholder:text-white'
                        : 'placeholder:text-grayBlueLight'
                }`}
            />
            <span className="text-xs text-zinc-400">{spanText}</span>
        </>
    )
}
