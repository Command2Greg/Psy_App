import { Navigation } from "./Navigation"

export const navItems = [
  { label: 'home', href: '/' },
  { label: 'questions', href: '/questions/1' },
]

export function TheHeader() {
  return (
    <Navigation navLinks={navItems} />
  )
}
