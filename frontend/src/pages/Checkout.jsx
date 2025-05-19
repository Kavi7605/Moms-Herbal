import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
    const { cartItems, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        fullName: "",
        address: "",
        phone: "",
        email: "",
        city: "",
        pincode: "",
    });

    const totalAmount = cartItems.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0
    );

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const order = {
            customerName: form.fullName,
            address: `${form.address}, ${form.city} - ${form.pincode}`,
            phone: form.phone,
            totalAmount: totalAmount,
            items: cartItems.map((item) => item.name),
        };

        fetch("http://localhost:8081/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order),
        })
            .then((res) => {
                if (res.ok) {
                    alert("Order placed successfully!");
                    clearCart();
                    navigate("/");
                } else {
                    alert("Failed to place order.");
                }
            })
            .catch((err) => console.error("Order error:", err));
    };

    return (
        <div className="max-w-xl mx-auto mt-8">
            <h1 className="text-2xl font-bold mb-6 text-center">Checkout</h1>
            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    name="fullName"
                    placeholder="Full Name"
                    value={form.fullName}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />

                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />

                <input
                    name="phone"
                    placeholder="Phone Number"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />

                <textarea
                    name="address"
                    placeholder="Address"
                    value={form.address}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />

                <input
                    name="city"
                    placeholder="City"
                    value={form.city}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />

                <input
                    name="pincode"
                    placeholder="Pincode"
                    value={form.pincode}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                    required
                />

                <div className="text-right font-semibold text-green-600">
                    Total: ₹{totalAmount}
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
                >
                    Place Order
                </button>
            </form>
        </div>
    );
}
