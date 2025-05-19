import { useLocation, Link } from "react-router-dom";

export default function OrderSuccess() {
    const { state } = useLocation();

    return (
        <div className="text-center">
            <h1 className="text-3xl font-bold text-green-700 mb-4">Thank you for your order! 🌿</h1>
            <p className="mb-2">Name: {state?.name}</p>
            <p className="mb-2">Phone: {state?.phone}</p>
            <p className="mb-2">Address: {state?.address}</p>
            <p className="font-semibold mt-4">Total Paid: ₹{state?.total}</p>

            <Link
                to="/"
                className="inline-block mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
            >
                Back to Home
            </Link>
        </div>
    );
}
