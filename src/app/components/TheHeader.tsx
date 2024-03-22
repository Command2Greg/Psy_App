import { Navigation } from "./Navigation"
import Image from 'next/image'

export const navItems = [
  //{ label: 'psyhologists', href: '/psyhologists' },
  { label: 'questions', href: '/questions' },
  { label: 'login', href: '/' },
]

export function TheHeader() {
  return (
    <div className="flex grid-cols-2 mt-6 ml-6 size-full">
   
      <div>
        <Navigation navLinks={navItems} />
      </div>

      <div className="flex justify-center size-full">
        <Image src="/siteName.webp" width={350} height={90} alt="Picture of the author"/> 
      </div>
      
    </div>
    
    
    
  )
}
