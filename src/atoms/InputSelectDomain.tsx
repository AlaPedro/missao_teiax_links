import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
    SelectLabel,
} from '@/components/ui/select'
import Image from 'next/image'

interface Props {
    placeholder: string
    spanText?: string
    white?: boolean
}

export default function InputSelectDomain({ placeholder, spanText }: Props) {
    return (
        <>
            <Select defaultValue="airbnb">
                <SelectTrigger className="bg-zinc-950 p-2 border border-grayBlueDark rounded-md h-10 px-2 py-4 w-full">
                    <SelectValue placeholder="Selecione um domínio" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="airbnb">
                            <div className="flex gap-2">
                                <Image
                                    src={'/airbnb-logo.svg'}
                                    width={15}
                                    height={15}
                                    alt="Logo"
                                />
                                <span>airbnb.oficial.cam</span>
                            </div>
                        </SelectItem>
                        <SelectItem value="whatsapp">
                            <div className="flex gap-2">
                                <Image
                                    src={'/whatsapp-icon.svg'}
                                    width={15}
                                    height={15}
                                    alt="Logo"
                                />
                                <span>web.whatsappp.com</span>
                            </div>
                        </SelectItem>
                        <SelectItem value="insta">
                            <div className="flex gap-2">
                                <Image
                                    src={'/instagram-icon.svg'}
                                    width={15}
                                    height={15}
                                    alt="Logo"
                                />
                                <span>instagram.cam</span>
                            </div>
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <span className="text-xs text-zinc-400">{spanText}</span>
        </>
    )
}
