import Image from 'next/image'

export default function Footer() {
    return (
        <footer className="absolute h-[56px] bottom-0 border-t-[1px] border-grayBlueLight w-full flex items-center justify-between px-8">
            <nav className="flex gap-4 text-grayBlueLight">
                <a className="text-xs font-medium" href="#">
                    Sobre nós
                </a>
                <a className="text-xs font-medium" href="#">
                    Termos de uso
                </a>
                <a className="text-xs font-medium" href="#">
                    Política de privacidade
                </a>
                <a className="text-xs font-medium" href="#">
                    O que há de novo
                </a>
            </nav>
            <div className="flex gap-[6px]">
                <Image
                    src={'/mini-icon.svg'}
                    width={20}
                    height={20}
                    alt="mini icon"
                />

                <Image
                    src={'/anocc.svg'}
                    width={45}
                    height={20}
                    alt="mini icon"
                />
            </div>
        </footer>
    )
}
