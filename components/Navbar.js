import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-gray-800">
          MyStore
        </Link>
        <div className="space-x-4">
          <Link href="/" className="text-gray-600 hover:text-blue-600 transition duration-300">
            Home
          </Link>
          <Link href="/products" className="text-gray-600 hover:text-blue-600 transition duration-300">
            Products
          </Link>
          <Link href="/cart" className="text-gray-600 hover:text-blue-600 transition duration-300">
            Cart
          </Link>
          <Link href="/checkout" className="text-gray-600 hover:text-blue-600 transition duration-300">
            Checkout
          </Link>
        </div>
      </div>
    </nav>
  );
}