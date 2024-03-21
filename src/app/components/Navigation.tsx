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
              <button class="rounded-full text-center text-slate-100 bg-gray-500 hover:bg-slate-300 active:bg-slate-100 focus:outline-none focus:ring focus:ring-slate-500 hover:text-gray-500 ...">
              <div className="flex  mx-3">
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
