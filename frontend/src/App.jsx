import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccess";
import Layout from "./components/Layout"; // ✅
import AdminOrders from "./pages/AdminOrders";

export default function App() {
    return (
        <Layout> {/* ✅ Wrap routes in Layout */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/order-success" element={<OrderSuccess />} />
                <Route path="/admin/orders" element={<AdminOrders />} />
            </Routes>
        </Layout>
    );
}
