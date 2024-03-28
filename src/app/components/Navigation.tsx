export function Navigation({ navLinks }: {
  navLinks: {
    label: string
    href: string
  }[]
}) {

  return (
    <div className="flex justify-center mb-10 rounded-xl">
        {navLinks.map(link => (
          <a className="pr-20"
            key={link.label}
            href={link.href}
          >
            <button className="rounded-full text-center text-slate-50 bg-gray-500 hover:bg-white active:bg-slate-50 focus:outline-none focus:ring focus:ring-slate-500 hover:text-gray-500">
              <div className="flex mx-3">
                {link.label}
              </div>
            </button>
          </a>
        ))}
      
    </div>
  )
}
