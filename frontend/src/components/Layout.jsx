// src/components/Layout.jsx
import Navbar from "./Navbar";

export default function Layout({ children }) {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow p-4">
                {children}
            </main>
            <footer className="text-center p-4 text-sm text-gray-500 border-t">
                &copy; {new Date().getFullYear()} MOM'S HERBAL 🌿
            </footer>
        </div>
    );
}
