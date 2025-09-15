import Image from 'next/image';

const ProductDetail = ({ product }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden md:flex">
      <div className="p-6 md:w-1/2">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
        <p className="text-gray-600 text-lg mb-6">{product.description}</p>
        <div className="flex items-baseline mb-6">
          <span className="text-5xl font-extrabold text-blue-600">${product.price.toFixed(2)}</span>
          <span className="text-xl text-gray-500 ml-2">USD</span>
        </div>
        <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg text-xl font-semibold hover:bg-blue-700 transition duration-300">
          Add to Cart
        </button>
        {/* Additional product information can go here */}
        <div className="mt-8 border-t border-gray-200 pt-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-3">Product Specifications</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Category: Electronics</li>
            <li>Brand: Fanni</li>
            <li>Weight: 1.5 kg</li>
            <li>Dimensions: 10x10x5 cm</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
