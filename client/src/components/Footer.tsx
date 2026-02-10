/**
 * Design Philosophy: Modern Empowerment Minimalism
 * - Navy blue background matching header
 * - Orange accent for links
 * - Clean, organized layout with contact information
 */

import { Mail, Phone, Facebook } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-[#1A3A52] text-white mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <img 
              src="/images/athena-logo-footer.png" 
              alt="ATHENA International" 
              className="h-12 w-auto mb-4"
            />
            <p className="text-sm text-gray-300 leading-relaxed">
              Supporting and developing girls and emerging women leaders across Washtenaw, Livingston, Monroe, Western Oakland, and Western Wayne Counties.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about">
                  <a className="text-sm text-gray-300 hover:text-[#FF8C00] transition-colors">
                    About Us
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/programs">
                  <a className="text-sm text-gray-300 hover:text-[#FF8C00] transition-colors">
                    Our Programs
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/events">
                  <a className="text-sm text-gray-300 hover:text-[#FF8C00] transition-colors">
                    Events
                  </a>
                </Link>
              </li>
              <li>
                <Link href="/support">
                  <a className="text-sm text-gray-300 hover:text-[#FF8C00] transition-colors">
                    Support Us
                  </a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Mail size={16} className="text-[#FF8C00]" />
                <a href="mailto:chair@ATHENALeadersoftheHuronValley.org" className="hover:text-[#FF8C00] transition-colors break-all">
                  chair@ATHENALeadersoftheHuronValley.org
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <Phone size={16} className="text-[#FF8C00]" />
                <a href="tel:734-417-5745" className="hover:text-[#FF8C00] transition-colors">
                  734-417-5745
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm">
                <Facebook size={16} className="text-[#FF8C00]" />
                <a 
                  href="https://www.facebook.com/ATHENALeadersActionNetworkHuronValley" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-[#FF8C00] transition-colors"
                >
                  Follow us on Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} AthenaLeaders Of The Huron Valley. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
