export default function Footer() {
  return (
    <footer className="bg-white shadow-md mt-8">
      <div className="container mx-auto py-4 text-center text-gray-600">
        <p>&copy; {new Date().getFullYear()} My Storefront. All rights reserved.</p>
      </div>
    </footer>
  );
}