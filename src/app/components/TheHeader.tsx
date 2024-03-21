import { Navigation } from "./Navigation"

export const navItems = [
  { label: 'home', href: '/' },
  { label: 'psyhologists', href: '/psyhologists' },
  { label: 'questions', href: '/questions' },
]

export function TheHeader() {
  return (
    <div>
   
      <Navigation navLinks={navItems} />
      
    </div>
    
    
  )
}
