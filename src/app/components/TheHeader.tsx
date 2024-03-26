import { Navigation } from "./Navigation"
import {Registration} from "./LoginButton"
import Image from 'next/image'

export const navItems = [
  { label: 'Вопросы', href: '/questions/1' },
]


export function TheHeader() {
  return (
    <header className="flex grid-cols-3 mt-6 ml-6 place-content-between">

      <div>
        <Navigation navLinks={navItems} />
      </div>
      <div>
        <Image src="/siteName.webp" width={350} height={90} alt="Picture of the author"/> 
      </div>
      <div>
        <Registration />
      </div>
      
      
  
      
      
      
    </header> 
  )
}
