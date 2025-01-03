export default function CartItem({ item, removeFromCart }: { item: any; removeFromCart: (id: string) => void }) {
    return (
      <div className="border p-4 flex justify-between items-center rounded-lg">
        <div>
          <h2 className="text-lg font-semibold">{item.name}</h2>
          <p className="text-gray-500">${item.price}</p>
        </div>
        <button
          onClick={() => removeFromCart(item.id)}
          className="bg-red-500 text-white py-1 px-3 rounded-lg"
        >
          Remove
        </button>
      </div>
    );
  }
  