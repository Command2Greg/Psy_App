
export function Navigation({ navLinks }: {
  navLinks: {
    label: string
    href: string
  }[]
}) {

  return (
    <header className="flex mb-10">
      {navLinks.map(link => (
        <a className="pr-10"
          key={link.label}
          href={link.href}
        >
          <p>
            {link.label}
          </p>
        </a>
      ))}
    </header>
  )
}
