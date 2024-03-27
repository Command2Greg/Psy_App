import { Navigation } from "./Navigation"
import Image from 'next/image'

export const navItems = [
  { label: 'questions', href: '/questions/1' },
  // { label: 'login', href: '/registration' },
]

export function TheHeader() {
  return (
    <header className="flex">
      <Navigation navLinks={navItems} />
      <div className="flex justify-center size-full">
        <Image src="/siteName.webp" width={350} height={78} priority alt="Picture of the author" />
      </div>
      <button>Тут клиентский компонент кнопки логин</button>
    </header>
  )
}
