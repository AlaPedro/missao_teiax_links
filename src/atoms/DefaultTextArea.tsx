interface Props {
    placeholder: string
}

export default function DefaultTextArea({ placeholder }: Props) {
    return (
        <textarea
            className="bg-zinc-950 p-2 border border-grayBlueDark rounded-md h-[100px] px-2 py-4 w-full placeholder:text-grayBlueLight"
            placeholder={`${placeholder}`}
        />
    )
}
