import Link from "next/link";

export default function ProductCard({ product }: { product: any }) {
  return (
    <div className="border-2 hover:border-[#B26F31] rounded-lg p-4 shadow-lg">
      <img src={product.image} alt={product.name} className="w-full h-64 object-cover rounded-md" />
      <h2 className="text-xl font-bold mt-2">{product.name}</h2>
      <p className="text-gray-500">Category: {product.category}</p>
      <p className="text-[#B26F31] font-semibold mt-1">${product.price}</p>
      <Link
        href={`/products/${product.id}`}
        className="block text-center mt-3 bg-black hover:bg-[#B26F31] text-white py-2 rounded-md"
      >
        View Details
      </Link>
    </div>
  );
}
