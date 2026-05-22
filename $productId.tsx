import { Link, createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import products from '../../data/products'
import { useCart } from '@/context/CartContext'

export const Route = createFileRoute('/products/$productId')({
  component: ProductDetail,
  loader: async ({ params }) => {
    const product = products.find((p) => p.id === +params.productId)
    if (!product) throw new Error('Product not found')
    return product
  },
})

function ProductDetail() {
  const product = Route.useLoaderData()
  const { addToCart } = useCart()
  const [added, setAdded] = useState(false)

  function handleAddToCart() {
    addToCart(product)
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }
  const related = products.filter((p) => p.id !== product.id).slice(0, 3)

  return (
    <div className="max-w-7xl mx-auto px-6 py-10">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link to="/" className="hover:text-gray-900 transition-colors">Home</Link>
        <span>/</span>
        <span className="text-gray-400">{product.category}</span>
        <span>/</span>
        <span className="text-gray-900 font-medium">{product.name}</span>
      </nav>

      {/* Main content */}
      <div className="flex flex-col lg:flex-row gap-12 mb-20">
        {/* Image */}
        <div className="w-full lg:w-[55%]">
          <div className="relative rounded-3xl overflow-hidden aspect-[4/3] bg-gray-100">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.badge && (
              <span className="absolute top-5 left-5 bg-blue-500 text-white text-sm font-semibold px-4 py-1.5 rounded-full">
                {product.badge}
              </span>
            )}
          </div>
        </div>

        {/* Details */}
        <div className="w-full lg:w-[45%] flex flex-col justify-center">
          <span className="inline-block bg-gray-100 text-gray-600 text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-4 w-fit">
            {product.category}
          </span>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
            {product.name}
          </h1>
          <p className="text-gray-500 text-base leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-3 mb-8">
            {[
              { icon: '🚀', label: 'Fast Shipping', sub: 'Free over $200' },
              { icon: '🛡️', label: '5-Year Warranty', sub: 'All products' },
              { icon: '↩️', label: '30-Day Returns', sub: 'No questions asked' },
              { icon: '💬', label: '24/7 Support', sub: 'Expert team' },
            ].map(({ icon, label, sub }) => (
              <div key={label} className="flex items-start gap-3 p-3 rounded-xl bg-gray-50">
                <span className="text-xl">{icon}</span>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{label}</div>
                  <div className="text-xs text-gray-500">{sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Price + CTA */}
          <div className="flex items-center gap-4 p-6 rounded-2xl bg-gray-900 text-white">
            <div className="flex-1">
              <div className="text-gray-400 text-sm mb-1">Price</div>
              <div className="text-4xl font-extrabold">${product.price.toLocaleString()}</div>
            </div>
            <button
              onClick={handleAddToCart}
              className={`px-8 py-4 rounded-xl font-bold text-lg transition-colors whitespace-nowrap ${added ? 'bg-green-500 hover:bg-green-400' : 'bg-blue-500 hover:bg-blue-400'}`}
            >
              {added ? 'Added ✓' : 'Add to Cart'}
            </button>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">You may also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((rel) => (
              <Link
                key={rel.id}
                to="/products/$productId"
                params={{ productId: rel.id.toString() }}
                className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-shadow flex flex-col"
              >
                <div className="overflow-hidden aspect-[4/3]">
                  <img
                    src={rel.image}
                    alt={rel.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                    {rel.name}
                  </h3>
                  <div className="text-lg font-extrabold text-gray-900">
                    ${rel.price.toLocaleString()}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
