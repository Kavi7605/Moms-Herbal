import { useLocation, Link } from "react-router-dom";

export default function OrderSuccess() {
    const location = useLocation();
    const order = location.state?.order;

    return (
        <div className="p-4 text-center">
            <h1 className="text-3xl font-bold mb-4">
                Thank you for your order! 🌿
            </h1>

            {order ? (
                <div className="text-left inline-block mx-auto border p-4 rounded shadow">
                    <p><strong>Name:</strong> {order.customerName}</p>
                    <p><strong>Phone:</strong> {order.phone}</p>
                    <p><strong>Address:</strong> {order.address}, {order.city} – {order.pincode}</p>
                    <p><strong>Total Paid:</strong> ₹{order.totalAmount}</p>
                    <p><strong>Items:</strong> {order.items.join(", ")}</p>
                </div>
            ) : (
                <p className="text-red-600">No order information found.</p>
            )}

            <div className="mt-6">
                <Link to="/" className="text-blue-600 underline">
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
