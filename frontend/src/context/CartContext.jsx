import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function useCart() {
    return useContext(CartContext);
}

export function CartProvider({ children }) {
    const [cartItems, setCartItems] = useState([]);

    function addToCart(product) {
        setCartItems((prev) => {
            const existing = prev.find((item) => item.id === product.id);
            if (existing) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prev, { ...product, quantity: 1 }];
            }
        });
    }

    function removeFromCart(productId) {
        setCartItems((prev) => prev.filter((item) => item.id !== productId));
    }

    function clearCart() {
        setCartItems([]);
    }

    return (
        <CartContext.Provider
            value={{ cartItems, addToCart, removeFromCart, clearCart }}
        >
            {children}
        </CartContext.Provider>
    );
}
