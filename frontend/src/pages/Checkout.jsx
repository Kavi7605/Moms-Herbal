import { useState } from "react";
import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
    const { cartItems, clearCart } = useCart();
    const [form, setForm] = useState({ name: "", address: "", phone: "" });
    const navigate = useNavigate();

    const total = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value });
    }

    function handleSubmit(e) {
        e.preventDefault();
        // Save to backend here later (optional)
        clearCart();
        navigate("/order-success", { state: { ...form, total } });
    }

    if (cartItems.length === 0) {
        return <p className="text-gray-500">Cart is empty. Please add items first.</p>;
    }

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Checkout</h1>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
                <input
                    type="text"
                    name="name"
                    required
                    placeholder="Full Name"
                    className="w-full p-2 border rounded"
                    value={form.name}
                    onChange={handleChange}
                />
                <textarea
                    name="address"
                    required
                    placeholder="Shipping Address"
                    className="w-full p-2 border rounded"
                    value={form.address}
                    onChange={handleChange}
                />
                <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Phone Number"
                    className="w-full p-2 border rounded"
                    value={form.phone}
                    onChange={handleChange}
                />
                <button className="bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800">
                    Place Order
                </button>
            </form>
            <p className="mt-6 font-semibold">Total: ₹{total}</p>
        </div>
    );
}
