import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

export default function Products() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8081/api/products")
            .then((res) => res.json())
            .then((data) => setProducts(data))
            .catch((err) => console.error("Failed to fetch products:", err));
    }, []);

    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-6">Our Herbal Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {products.length === 0 ? (
                    <p className="text-gray-500">No products found.</p>
                ) : (
                    products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))
                )}
            </div>
        </div>
    );
}
