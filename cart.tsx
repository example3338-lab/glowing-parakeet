import { Link, createFileRoute } from '@tanstack/react-router'
import { useCart } from '@/context/CartContext'

export const Route = createFileRoute('/cart')({
  component: CartPage,
})

function CartPage() {
  const { items, removeFromCart, updateQuantity, total, itemCount } = useCart()

  if (items.length === 0) {
    return (
      <div className="max-w-3xl mx-auto px-6 py-24 text-center">
        <div className="text-6xl mb-6">🛒</div>
        <h1 className="text-3xl font-extrabold text-gray-900 mb-3">Your cart is empty</h1>
        <p className="text-gray-500 mb-8">Add some products to get started.</p>
        <Link
          to="/"
          className="inline-block px-8 py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold transition-colors"
        >
          Browse Products
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl font-extrabold text-gray-900 mb-2">Your Cart</h1>
      <p className="text-gray-500 mb-8">{itemCount} {itemCount === 1 ? 'item' : 'items'}</p>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Items */}
        <div className="flex-1 space-y-4">
          {items.map(({ product, quantity }) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 flex gap-4 items-center"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <Link
                  to="/products/$productId"
                  params={{ productId: product.id.toString() }}
                  className="font-bold text-gray-900 hover:text-blue-600 transition-colors line-clamp-1"
                >
                  {product.name}
                </Link>
                <div className="text-xs text-gray-400 mb-2">{product.category}</div>
                <div className="text-lg font-extrabold text-gray-900">
                  ${(product.price * quantity).toLocaleString()}
                </div>
              </div>

              <div className="flex flex-col items-end gap-3">
                {/* Quantity controls */}
                <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                  <button
                    onClick={() => updateQuantity(product.id, quantity - 1)}
                    className="w-8 h-8 rounded-md bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-gray-900 font-bold transition-colors"
                    aria-label="Decrease quantity"
                  >
                    −
                  </button>
                  <span className="w-6 text-center font-semibold text-sm">{quantity}</span>
                  <button
                    onClick={() => updateQuantity(product.id, quantity + 1)}
                    className="w-8 h-8 rounded-md bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-gray-900 font-bold transition-colors"
                    aria-label="Increase quantity"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="text-xs text-red-400 hover:text-red-600 transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="w-full lg:w-80 flex-shrink-0">
          <div className="bg-gray-900 text-white rounded-2xl p-6 sticky top-24">
            <h2 className="text-lg font-bold mb-4">Order Summary</h2>

            <div className="space-y-2 mb-4">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex justify-between text-sm text-gray-300">
                  <span className="truncate mr-2">{product.name} × {quantity}</span>
                  <span className="flex-shrink-0">${(product.price * quantity).toLocaleString()}</span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-700 pt-4 mb-6">
              <div className="flex justify-between text-sm text-gray-300 mb-1">
                <span>Shipping</span>
                <span>{total >= 200 ? 'Free' : '$15'}</span>
              </div>
              <div className="flex justify-between text-xl font-extrabold mt-3">
                <span>Total</span>
                <span>${(total >= 200 ? total : total + 15).toLocaleString()}</span>
              </div>
              {total < 200 && (
                <p className="text-xs text-gray-400 mt-1">
                  Add ${(200 - total).toLocaleString()} more for free shipping
                </p>
              )}
            </div>

            <div className="flex items-center gap-2 bg-gray-800 rounded-xl p-3 mb-4">
              <span className="text-lg">💵</span>
              <div>
                <div className="text-sm font-semibold">Cash on Delivery</div>
                <div className="text-xs text-gray-400">Pay when your order arrives</div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="block w-full text-center py-3 rounded-xl bg-blue-500 hover:bg-blue-400 font-bold transition-colors"
            >
              Proceed to Checkout
            </Link>
            <Link
              to="/"
              className="block w-full text-center py-2 mt-2 text-sm text-gray-400 hover:text-white transition-colors"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
