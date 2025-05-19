// src/components/Navbar.jsx
import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="bg-green-700 text-white p-4 flex justify-between items-center shadow-md">
            <Link to="/" className="text-xl font-bold">MOM'S HERBAL</Link>
            <div className="space-x-4">
                <Link to="/" className="hover:text-yellow-300">Home</Link>
                <Link to="/products" className="hover:text-yellow-300">Products</Link>
                <Link to="/cart" className="hover:text-yellow-300">Cart</Link>
            </div>
        </nav>
    );
}
