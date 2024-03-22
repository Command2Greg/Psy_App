export function Navigation({ navLinks }: {
  navLinks: {
    label: string
    href: string
  }[]
}) {

  return (
    <div className="flex mb-10 ">
      <div className="flex grid-cols-2">

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


      
    </div>
  )
}
