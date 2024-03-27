'use client'
import { useSelectedLayoutSegments } from 'next/navigation';

export function Navigation({ navLinks }: {
  navLinks: {
    label: string
    href: string
  }[]
}) {
  const path = useSelectedLayoutSegments();
  const currentPath = '/' + path.splice(1, 2).join('/');

  return (
    <div className="flex items-center justify-center ml-5">
      {navLinks.map(link => (
        <a className={`px-4 py-1.5 rounded-full text-black-100 ${link.href === currentPath ? 'bg-black text-white' : ''} hover:bg-slate-300 hover:text-gray-500 ...`}
          key={link.label}
          href={link.href}
        >
          {link.label}
        </a>
      ))}
    </div>
  )
}
