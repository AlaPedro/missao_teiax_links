import { LucideIcon } from 'lucide-react'

interface Props {
    placeholder: string
    spanText?: string
    white?: boolean
    value: string
    onChange: (value: string) => void
    icon?: LucideIcon
}

export default function DefaultTextInput({
    placeholder,
    spanText,
    white,
    value,
    onChange,
    icon: Icon,
}: Props) {
    return (
        <>
            <div className="relative">
                {Icon && (
                    <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-grayBlueLight">
                        <Icon size={18} />
                    </div>
                )}
                <input
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    type="text"
                    className={`bg-zinc-950 p-2 border border-grayBlueDark rounded-md h-10 w-full ${
                        Icon ? 'pl-10' : 'px-2'
                    } ${
                        white
                            ? 'placeholder:text-white'
                            : 'placeholder:text-grayBlueLight'
                    }`}
                />
                {spanText && (
                    <span className="text-xs text-zinc-400">{spanText}</span>
                )}
            </div>
        </>
    )
}
