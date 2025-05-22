import { useContext, useState } from "react";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

export default function Checkout() {
    const { cartItems, clearCart } = useContext(CartContext);
    const navigate = useNavigate();

    const [form, setForm] = useState({
        customerName: "",
        address: "",
        phone: "",
        email: "",
        city: "",
        pincode: "",
    });

    const totalAmount = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const orderData = {
            ...form,
            totalAmount,
            items: cartItems.map((item) => item.name),
        };

        try {
            const res = await fetch("http://localhost:8081/api/orders", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(orderData),
            });

            if (res.ok) {
                clearCart();
                navigate("/order-success", { state: { order: orderData } });
            } else {
                const err = await res.json();
                alert("Failed to place order: " + err.message);
            }
        } catch (error) {
            alert("Error placing order");
            console.error(error);
        }
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Checkout</h2>
            <form className="space-y-4" onSubmit={handleSubmit}>
                {["customerName", "address", "phone", "email", "city", "pincode"].map((field) => (
                    <input
                        key={field}
                        type="text"
                        name={field}
                        value={form[field]}
                        onChange={handleChange}
                        placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                        required
                        className="w-full p-2 border rounded"
                    />
                ))}
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
                    Place Order – ₹{totalAmount}
                </button>
            </form>
        </div>
    );
}
