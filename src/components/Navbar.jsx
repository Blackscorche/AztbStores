import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location]);

  return (
    <nav className="fixed left-[5px] right-[5px] top-[5px] bg-blue-500 px-3 py-4 rounded-2xl shadow-lg z-50">
      <div className="flex justify-between items-center px-4 md:px-6">
        {/* Logo */}
        <Link to="/" className="text-white text-xl font-bold tracking-wide">
          AZTB Store
        </Link>

        {/* Menu - Desktop */}
        <ul className="hidden md:flex gap-6 text-white text-lg font-medium">
          <li>
            <Link to="/" className="hover:text-gray-400 transition duration-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-400 transition duration-300">
              Products Gallery
            </Link>
          </li>
          <li>
            <Link to="/pricelist" className="hover:text-gray-400 transition duration-300">
              Pricelist
            </Link>
          </li>
        </ul>

        {/* Action Button */}
        <Link to="/contact">
          <button className="hidden md:block bg-white text-blue-500 px-4 py-2 rounded-xl cursor-pointer font-medium shadow-md hover:bg-blue-600 transition duration-300">
            Contact Us
          </button>
        </Link>

        {/* Hamburger Menu - Mobile */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu - Expanding smoothly */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 text-white text-lg font-medium px-4 py-3">
          <li>
            <Link to="/" className="hover:text-gray-400 transition duration-300" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/products" className="hover:text-gray-400 transition duration-300" onClick={() => setOpen(false)}>
              Products
            </Link>
          </li>
          <li>
            <Link to="/pricelist" className="hover:text-gray-400 transition duration-300" onClick={() => setOpen(false)}>
              Pricelist
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-400 transition duration-300" onClick={() => setOpen(false)}>
              Contact Us
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
}
