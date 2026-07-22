import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import RahmLogo from "./RahmLogo";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Meet The Team", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 200);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled || mobileOpen;

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: solid ? "#1B2A4A" : "transparent",
        borderBottom: solid ? "1px solid #C9A84C" : "none",
        boxShadow: solid ? "0 2px 24px rgba(27,42,74,0.18)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <RahmLogo size="sm" light />
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm font-semibold tracking-widest uppercase transition-colors duration-200"
              style={{
                color: location.pathname === link.path ? "#C9A84C" : "#F9F6F0",
                letterSpacing: "0.15em",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-5 py-2 text-sm font-semibold rounded tracking-widest uppercase transition-all duration-200 hover:opacity-90"
            style={{ background: "#C9A84C", color: "#1B2A4A", letterSpacing: "0.12em" }}
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} color="#F9F6F0" /> : <Menu size={24} color="#F9F6F0" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-4" style={{ background: "#1B2A4A" }}>
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-semibold uppercase tracking-widest py-2 border-b"
              style={{ color: "#F9F6F0", borderColor: "rgba(201,168,76,0.2)", letterSpacing: "0.15em" }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="mt-2 px-5 py-3 text-sm font-semibold text-center rounded tracking-widest uppercase"
            style={{ background: "#C9A84C", color: "#1B2A4A" }}
          >
            Get In Touch
          </Link>
        </div>
      )}
    </nav>
  );
}