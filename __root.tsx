import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import { Link } from '@tanstack/react-router'
import { CartProvider, useCart } from '@/context/CartContext'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'TechHouse — Premium Technology' },
      { name: 'description', content: 'Premium tech products for professionals who demand the best.' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        <CartProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CartProvider>
        <Scripts />
      </body>
    </html>
  )
}

function Header() {
  const { itemCount } = useCart()

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link to="/" className="flex items-center gap-2 group">
          <img src="/logo.jpeg" alt="TechHouse logo" className="w-8 h-8 rounded-lg object-cover" />
          <span className="text-xl font-bold tracking-tight">TechHouse</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {[
            { label: 'Products', to: '/' },
          ].map(({ label, to }) => (
            <Link
              key={label}
              to={to}
              className="px-4 py-2 rounded-md text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
              activeProps={{ className: 'px-4 py-2 rounded-md text-sm font-medium text-white bg-gray-800' }}
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            to="/cart"
            className="relative p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800 transition-colors"
            aria-label="View cart"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-blue-500 text-white text-xs font-bold flex items-center justify-center leading-none">
                {itemCount > 99 ? '99+' : itemCount}
              </span>
            )}
          </Link>
          <button className="hidden md:block px-4 py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors">
            Sign In
          </button>
          <Link
            to="/"
            className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-400 text-sm font-semibold transition-colors"
          >
            Shop Now
          </Link>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 mt-24">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/logo.jpeg" alt="TechHouse logo" className="w-7 h-7 rounded-md object-cover" />
            <span className="text-white font-bold">TechHouse</span>
          </div>
          <p className="text-sm leading-relaxed">Premium technology for professionals who demand the best.</p>
        </div>
        {[
          { heading: 'Products', links: ['Laptops', 'Monitors', 'Audio', 'Peripherals', 'Accessories', 'Storage'] },
          { heading: 'Support', links: ['Contact Us', 'Shipping Policy', 'Returns', 'Warranty', 'FAQ'] },
          { heading: 'Company', links: ['About', 'Careers', 'Press', 'Privacy Policy', 'Terms'] },
        ].map(({ heading, links }) => (
          <div key={heading}>
            <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">{heading}</h3>
            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a href="#" className="text-sm hover:text-white transition-colors">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
          <p>© {new Date().getFullYear()} TechHouse. All rights reserved.</p>
          <p>Built with care for people who love technology.</p>
        </div>
      </div>
    </footer>
  )
}
