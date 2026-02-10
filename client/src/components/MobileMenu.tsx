import { useState } from "react";
import { X, Menu } from "lucide-react";
import { Link } from "wouter";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={toggleMenu}
        className="md:hidden p-2 text-white hover:text-[#FF8C00] transition-colors"
        aria-label="Toggle menu"
      >
        <Menu size={28} />
      </button>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={closeMenu}
        />
      )}

      {/* Slide-out Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-[#1A3A52] z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10">
          <div>
            <h2 className="text-white font-serif font-bold text-xl">
              AthenaLeaders
            </h2>
            <p className="text-gray-300 text-sm">Of The Huron Valley</p>
          </div>
          <button
            onClick={closeMenu}
            className="p-2 text-white hover:text-[#FF8C00] transition-colors"
            aria-label="Close menu"
          >
            <X size={28} />
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="p-6">
          <ul className="space-y-4">
            <li>
              <Link href="/" onClick={closeMenu}>
                <a className="block py-3 px-4 text-white hover:bg-[#FF8C00] hover:text-white rounded-lg transition-all text-lg font-medium">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={closeMenu}>
                <a className="block py-3 px-4 text-white hover:bg-[#FF8C00] hover:text-white rounded-lg transition-all text-lg font-medium">
                  About Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/programs" onClick={closeMenu}>
                <a className="block py-3 px-4 text-white hover:bg-[#FF8C00] hover:text-white rounded-lg transition-all text-lg font-medium">
                  Our Programs
                </a>
              </Link>
            </li>
            <li>
              <Link href="/events" onClick={closeMenu}>
                <a className="block py-3 px-4 text-white hover:bg-[#FF8C00] hover:text-white rounded-lg transition-all text-lg font-medium">
                  Events
                </a>
              </Link>
            </li>
            <li>
              <Link href="/support" onClick={closeMenu}>
                <a className="block py-3 px-4 text-white hover:bg-[#FF8C00] hover:text-white rounded-lg transition-all text-lg font-medium">
                  Support Us
                </a>
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu}>
                <a className="block py-3 px-4 text-white hover:bg-[#FF8C00] hover:text-white rounded-lg transition-all text-lg font-medium">
                  Contact
                </a>
              </Link>
            </li>
          </ul>

          {/* CTA Button */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <Link href="/support" onClick={closeMenu}>
              <a className="block w-full py-4 px-6 bg-[#FF8C00] hover:bg-[#E67E00] text-white text-center rounded-lg font-semibold text-lg transition-colors">
                Get Involved
              </a>
            </Link>
          </div>
        </nav>
      </div>
    </>
  );
}
