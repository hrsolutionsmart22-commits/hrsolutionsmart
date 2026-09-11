'use client'

interface NavigationProps {
  mobile?: boolean
  onItemClick?: () => void
}

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#recruitment' },
  { label: 'HR Solutions', href: '#hr-solutions' },
  { label: 'Process', href: '#process' },
  { label: 'Why Us', href: '#why-choose-us' },
  { label: 'Contact', href: '#contact' },
]

export default function Navigation({ mobile, onItemClick }: NavigationProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    e.preventDefault()

    if (label === 'Contact') {
      const contactSection = document.getElementById('contact')
      const footerHeading = contactSection?.querySelector('h3') as HTMLElement | null

      if (contactSection) {
        const offset = 80
        const elementPosition = contactSection.getBoundingClientRect().top
        const offsetPosition = elementPosition + window.pageYOffset - offset

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        })
      }

      if (footerHeading) {
        footerHeading.classList.remove('flash-contact')
        void footerHeading.offsetWidth
        footerHeading.classList.add('flash-contact')

        window.setTimeout(() => {
          footerHeading.classList.remove('flash-contact')
        }, 3000)
      }

      onItemClick?.()
      return
    }

    const element = document.querySelector(href)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
    onItemClick?.()
  }

  if (mobile) {
    return (
      <nav className="flex flex-col space-y-2">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href, item.label)}
            className="px-4 py-2 text-gray-700 hover:text-primary-900 hover:bg-gray-50 rounded-lg transition-colors"
          >
            {item.label}
          </a>
        ))}
      </nav>
    )
  }

  return (
    <nav className="flex items-center space-x-1">
      {navItems.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => handleClick(e, item.href, item.label)}
          className="px-4 py-2 text-gray-700 hover:text-primary-900 font-medium transition-colors rounded-lg hover:bg-gray-50"
        >
          {item.label}
        </a>
      ))}
    </nav>
  )
}