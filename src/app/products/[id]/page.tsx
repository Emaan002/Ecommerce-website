import { products } from "@/data/products";


export default function ProductDetail({ params }: { params: { id: string } } ) {
  const product = products.find((p) => p.id === params.id);

  if (!product) {
    return <p>Product not found!</p>;
  }

  return (
    <div className="p-6 flex">
      {/* <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg" /> */}
      <div>
      <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg" />
      </div>
      {/* <img src={product.image} alt={product.name} className="w-full h-96 object-cover rounded-lg" /> */}
      <div className="ml-8">
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="text-gray-500 mt-2">Category: {product.category}</p>
      <p className="text-[#B26F31] text-2xl font-semibold mt-2">${product.price}</p>
      <p className="mt-4 text-gray-700">{product.description}</p>
      <button className="bg-black hover:bg-[#B26F31] text-white py-2 px-4 rounded-lg mt-6">Add to Cart</button>
      </div>
    </div>
  );
}
