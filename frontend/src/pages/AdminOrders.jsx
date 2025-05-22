// src/pages/AdminOrders.jsx
import { useEffect, useState } from "react";

export default function AdminOrders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/api/orders")
            .then((res) => res.json())
            .then((data) => setOrders(data))
            .catch((err) => console.error("Failed to load orders:", err));
    }, []);

    return (
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">All Orders</h2>
            {orders.length === 0 ? (
                <p>No orders yet.</p>
            ) : (
                <div className="space-y-6">
                    {orders.map((order) => (
                        <div
                            key={order.id}
                            className="border p-4 rounded shadow-md bg-white"
                        >
                            <p><strong>Name:</strong> {order.customerName}</p>
                            <p><strong>Phone:</strong> {order.phone}</p>
                            <p><strong>Address:</strong> {order.address}</p>
                            <p><strong>Total Paid:</strong> ₹{order.totalAmount}</p>
                            <p><strong>Items:</strong> {order.items.join(", ")}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
