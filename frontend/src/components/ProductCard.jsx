import { useCart } from "../contexts/CartContext";

export default function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
            <img
                src={product.imageUrl || "https://via.placeholder.com/300x200?text=Product"}
                alt={product.name}
                className="w-full h-48 object-cover"
            />

            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800">{product.name}</h2>
                <p className="text-sm text-gray-500 mt-1">{product.description}</p>
                <p className="text-green-700 font-bold mt-2">₹{product.price}</p>
                <button
                    className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                    onClick={() => addToCart(product)}
                >
                    Add to Cart
                </button>
            </div>
        </div>
    );
}
