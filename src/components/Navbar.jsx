import { useState } from "react";
import { Menu, User, Search, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom"; // ✅ import Link

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#fdfbf8] border-b-2 border-orange-500">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Desktop Layout */}
        <div className="hidden md:flex items-center justify-between w-full">
          {/* Left: Button + Links */}
          <div className="flex items-center gap-6">
            <button className="border border-black rounded-full px-5 py-2 text-xs tracking-widest uppercase">
              Which Manuka is for me?
            </button>
            <Link to="/shop">Shop</Link>
            <Link to="/explore">Explore</Link>
          </div>

          {/* Center Logo */}
          <div className="flex-shrink-0">
            <Link to="/"> {/* ✅ Added Link */}
              <img
                src="/images/company_logo.png"
                alt="Logo"
                className="h-12 w-32 object-contain"
              />
            </Link>
          </div>

          {/* Right: Links + Icons */}
          <div className="flex items-center gap-6">
            <Link to="/about">About</Link>
            <Link to="/rewards">Rewards</Link>
            <Link to="/contact">Contact</Link>
            <div className="flex items-center gap-4">
              <User size={22} />
              <Search size={22} />
              <div className="relative">
                <ShoppingBag size={22} />
                <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  0
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="flex md:hidden items-center justify-between w-full">
          {/* Left: Menu */}
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <Menu size={28} />
          </button>

          {/* Center: Logo */}
          <div className="flex-shrink-0">
            <Link to="/"> {/* ✅ Added Link */}
              <img
                src="/images/company_logo.png"
                alt="Logo"
                className="h-12 w-32 object-contain"
              />
            </Link>
          </div>

          {/* Right: Icons */}
          <div className="flex items-center gap-4">
            <User size={22} />
            <Search size={22} />
            <div className="relative">
              <ShoppingBag size={22} />
              <span className="absolute -top-2 -right-2 bg-yellow-400 text-black text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                0
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Links */}
      {menuOpen && (
        <div className="md:hidden bg-[#fdfbf8] px-6 py-4 flex flex-col gap-4 text-sm">
          <Link to="/shop" onClick={() => setMenuOpen(false)}>Shop</Link>
          <Link to="/explore" onClick={() => setMenuOpen(false)}>Explore</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/rewards" onClick={() => setMenuOpen(false)}>Rewards</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}
