import ProductDetail from '@/components/ProductDetail';

const ProductDetailPage = ({ params }) => {
  const {id} = params;

  // In a real application, you would fetch product data based on the ID
  // For now, we'll use a mock product
  const mockProduct = {
    id: id,
    name: `Product ${id}`,
    description: `This is a detailed description for Product ${id}. It highlights its features, benefits, and specifications.`,
    price: 29.99,
    // Add more product details as needed
  };

  return (
    <div className="container mx-auto p-4">
      <ProductDetail product={mockProduct} />
    </div>
  );
};

export default ProductDetailPage;
