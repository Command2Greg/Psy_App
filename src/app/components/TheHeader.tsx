import { Navigation } from "./Navigation"
import {Registration} from "./LoginButton"
import Image from 'next/image'

export const navItems = [
  { label: 'Вопросы', href: '/questions/1' },
]

export function TheHeader() {
  return (
    <header className="flex mt-6 ml-6 place-content-between">
        <Navigation navLinks={navItems} />
        <Image src="/siteName.webp" width={350} height={90} alt="Picture of the author"/> 
        <Registration />  
    </header> 
  )
}
