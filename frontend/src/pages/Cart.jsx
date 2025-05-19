import { useCart } from "../contexts/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
    const { cartItems, removeFromCart, clearCart } = useCart();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
            {cartItems.length === 0 ? (
                <p className="text-gray-500">Cart is empty.</p>
            ) : (
                <div className="space-y-4">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="border p-4 rounded flex justify-between items-center"
                        >
                            <div>
                                <h2 className="font-bold">{item.name}</h2>
                                <p className="text-sm">Qty: {item.quantity}</p>
                            </div>
                            <div className="text-right">
                                <p>₹{item.price * item.quantity}</p>
                                <button
                                    className="text-red-600 text-sm"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="font-bold text-right">Total: ₹{total}</div>

                    <div className="flex justify-between items-center mt-4">
                        <button
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                            onClick={clearCart}
                        >
                            Clear Cart
                        </button>

                        <Link
                            to="/checkout"
                            className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
                        >
                            Proceed to Checkout
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
}
