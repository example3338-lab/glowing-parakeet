import { Link, createFileRoute } from '@tanstack/react-router'
import products from '@/data/products'

export const Route = createFileRoute('/')({
  component: HomePage,
})

function HomePage() {
  const categories = [...new Set(products.map((p) => p.category))]

  return (
    <div>
      {/* Hero */}
      <section className="bg-gray-900 text-white py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Welcome to TechHouse
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6">
            Technology Built for{' '}
            <span className="text-blue-400">Professionals</span>
          </h1>
          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Discover premium laptops, monitors, audio, and accessories engineered
            to elevate your workflow and inspire your best work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#products"
              className="px-8 py-3 rounded-lg bg-blue-500 hover:bg-blue-400 font-semibold transition-colors"
            >
              Browse Products
            </a>
            <a
              href="#categories"
              className="px-8 py-3 rounded-lg border border-gray-600 hover:border-gray-400 font-semibold transition-colors"
            >
              Shop by Category
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { value: '50,000+', label: 'Happy Customers' },
            { value: '200+', label: 'Premium Products' },
            { value: '5-Year', label: 'Warranty' },
            { value: '24/7', label: 'Expert Support' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-2xl font-extrabold">{value}</div>
              <div className="text-blue-100 text-sm mt-0.5">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section id="categories" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">Shop by Category</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <a
              key={cat}
              href={`#products`}
              className="px-5 py-2.5 rounded-full border border-gray-200 bg-white hover:bg-gray-900 hover:text-white hover:border-gray-900 text-sm font-medium transition-colors shadow-sm"
            >
              {cat}
            </a>
          ))}
        </div>
      </section>

      {/* Products grid */}
      <section id="products" className="max-w-7xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">All Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link
              key={product.id}
              to="/products/$productId"
              params={{ productId: product.id.toString() }}
              className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow flex flex-col"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.badge && (
                  <span className="absolute top-3 left-3 bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    {product.badge}
                  </span>
                )}
                <span className="absolute top-3 right-3 bg-white/90 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                  {product.category}
                </span>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed flex-1 mb-4">
                  {product.shortDescription}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-extrabold text-gray-900">
                    ${product.price.toLocaleString()}
                  </span>
                  <span className="text-sm font-semibold text-blue-600 group-hover:underline">
                    View Details →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-gray-900 text-white mx-6 mb-6 rounded-3xl overflow-hidden">
        <div className="max-w-4xl mx-auto px-8 py-16 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to upgrade your setup?
          </h2>
          <p className="text-gray-300 text-lg mb-8 max-w-xl mx-auto">
            Free shipping on orders over $200. 5-year warranty on all products.
            Expert support 24/7.
          </p>
          <a
            href="#products"
            className="inline-block px-10 py-4 rounded-xl bg-blue-500 hover:bg-blue-400 font-bold text-lg transition-colors"
          >
            Shop the Collection
          </a>
        </div>
      </section>
    </div>
  )
}
