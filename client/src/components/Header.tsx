/**
 * Design Philosophy: Modern Empowerment Minimalism
 * - Clean navigation with navy blue background
 * - Orange accent on hover states
 * - Playfair Display for logo, Inter for nav items
 */

import { Link } from "wouter";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/programs", label: "Our Programs" },
    { href: "/events", label: "Events" },
    { href: "/support", label: "Support Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-[#1A3A52] text-white sticky top-0 z-50 shadow-md">
      <div className="container mx-auto">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-4 cursor-pointer">
              <img 
                src="/images/athena-logo.png" 
                alt="ATHENA Logo" 
                className="h-14 w-auto object-contain"
              />
              <div className="flex flex-col justify-center">
                <div className="font-serif font-bold text-xl leading-tight">
                  AthenaLeaders
                </div>
                <div className="text-sm text-gray-300">
                  Of The Huron Valley
                </div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="text-sm font-medium hover:text-[#FF8C00] transition-colors duration-200">
                  {item.label}
                </a>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
