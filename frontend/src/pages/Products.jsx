import ProductCard from "../components/ProductCard";

// 👇 Import images like normal JS modules
import HairOilImg from "../assets/HairOil.jpg";
import FacePackImg from "../assets/FacePack.jpg";
import CoffeeSoapImg from "../assets/CoffeeSoap.jpg";

const dummyProducts = [
    {
        id: 1,
        name: "Herbal Hair Oil",
        category: "Hair Care",
        price: 100,
        image: HairOilImg, // use the imported variable
    },
    {
        id: 2,
        name: "Herbal Face Pack",
        category: "Face Care",
        price: 50,
        image: FacePackImg,
    },
    {
        id: 3,
        name: "Coffee & Milk Soap",
        category: "Soap",
        price: 40,
        image: CoffeeSoapImg,
    },
];

export default function Products() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-center mb-6">Our Herbal Products</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {dummyProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
