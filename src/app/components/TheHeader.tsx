import { Navigation } from "./Navigation"
import Image from 'next/image'

export const navItems = [
  { label: 'questions', href: '/questions/1' },
  { label: 'login', href: '/' },
]

export function TheHeader() {
  return (
    <header className="flex grid-cols-2 mt-6 ml-6 size-full">
   
      <div>
        <Navigation navLinks={navItems} />
      </div>

      <div className="flex justify-center size-full">
        <Image src="/siteName.webp" width={350} height={90} alt="Picture of the author"/> 
      </div>
      
    </header> 
  )
}
