import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
    SelectGroup,
} from '@/components/ui/select'
import Image from 'next/image'

interface Props {
    spanText?: string
    white?: boolean
    selectedValue: string
    setSelectedValue: (value: string) => void
}

export default function InputSelectDomain({
    spanText,
    selectedValue,
    setSelectedValue,
}: Props) {

    const handleSelectChange = (value: string) => {
        setSelectedValue(value) 
    }
    return (
        <>
            <Select
                value={selectedValue}
                onValueChange={handleSelectChange}
                defaultValue="airbnb.oficial.cam"
            >
                <SelectTrigger className="bg-zinc-950 p-2 border border-grayBlueDark rounded-md h-10 px-2 py-4 w-full">
                    <SelectValue placeholder="Selecione um domínio" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectItem value="airbnb.oficial.cam">
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
                        <SelectItem value="whatsappp.c0m">
                            <div className="flex gap-2">
                                <Image
                                    src={'/whatsapp-icon.svg'}
                                    width={20}
                                    height={15}
                                    alt="Logo"
                                />
                                <span>whatsappp.c0m</span>
                            </div>
                        </SelectItem>
                        <SelectItem value="facebook.lat">
                            <div className="flex gap-2">
                                <Image
                                    src={'/facebook-logo.svg'}
                                    width={20}
                                    height={20}
                                    alt="Logo"
                                />
                                <span>facebook.lat</span>
                            </div>
                        </SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>

            <span className="text-xs text-zinc-400">{spanText}</span>
        </>
    )
}
