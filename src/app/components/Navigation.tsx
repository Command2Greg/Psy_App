import Image from 'next/image'

export function Navigation({ navLinks }: {
  navLinks: {
    label: string
    href: string
  }[]
}) {

  return (
    <header className="flex grid grid-row-2 mb-10 ">
      <div className='flex justify-normal grid grid-cols-3'>

          {navLinks.map(link => (
            
            <a className="pr-10"
              key={link.label}
              href={link.href}
            >
              <button class="text-slate-100 bg-gray-500 hover:bg-gray-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ...">
              <div>
              {link.label}
              </div>
              </button>
            </a>
            
          ))}
   

      </div>
      <div className="flex justify-center">
        <Image src="/siteName.webp" width={350} height={90} alt="Picture of the author"/> 
      </div>

      
    </header>
  )
}
