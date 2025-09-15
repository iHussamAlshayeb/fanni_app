import Link from 'next/link';

const products = [
  { id: '1', name: 'Product 1', price: 29.99, imageUrl: 'https://via.placeholder.com/150?text=Product+1' },
  { id: '2', name: 'Product 2', price: 39.99, imageUrl: 'https://via.placeholder.com/150?text=Product+2' },
  { id: '3', name: 'Product 3', price: 19.99, imageUrl: 'https://via.placeholder.com/150?text=Product+3' },
  { id: '4', name: 'Product 4', price: 49.99, imageUrl: 'https://via.placeholder.com/150?text=Product+4' },
];

export default function ProductsPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map(product => (
          <div key={product.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <Link href={`/products/${product.id}`}>
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                <p className="text-gray-600 text-lg">${product.price.toFixed(2)}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
