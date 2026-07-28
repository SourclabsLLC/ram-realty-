import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import RahmLogo from "./RahmLogo";

export default function Footer() {
  return (
    <footer style={{ background: "#1B2A4A" }} className="text-white">
      {/* Gold top border */}
      <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} />

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <RahmLogo size="md" light />
            <p className="mt-4 text-sm leading-relaxed" style={{ color: "rgba(249,246,240,0.65)" }}>
              A family legacy built on trust, local expertise, and genuine care for every client — serving Harbor Country and Southwest Michigan for nearly 30 years.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.facebook.com/KellerWilliamsHarborCountry/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-80"
                style={{ color: "#C9A84C" }}
              >
                <ExternalLink size={13} /> KW Facebook
              </a>
              <span style={{ color: "rgba(249,246,240,0.3)" }}>•</span>
              <a
                href="https://www.realtor.com/realestateagents/5673b0740fa417010071b853"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest transition-opacity hover:opacity-80"
                style={{ color: "#C9A84C" }}
              >
                <ExternalLink size={13} /> Realtor.com
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#C9A84C", letterSpacing: "0.15em" }}>Navigate</h4>
            <div className="flex flex-col gap-3">
              {[{ label: "Home", path: "/" }, { label: "Meet The Team", path: "/about" }, { label: "Contact Us", path: "/contact" }].map((l) => (
                <Link
                  key={l.path}
                  to={l.path}
                  className="text-sm transition-colors hover:opacity-80"
                  style={{ color: "rgba(249,246,240,0.75)" }}
                >
                  {l.label}
                </Link>
              ))}
              <a
                href="https://www.realtor.com/realestateagency/56d0dd83761f0a01007d8466"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm flex items-center gap-1 transition-opacity hover:opacity-80"
                style={{ color: "rgba(249,246,240,0.75)" }}
              >
                KW Listings <ExternalLink size={11} />
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#C9A84C", letterSpacing: "0.15em" }}>Contact</h4>
            <div className="flex flex-col gap-3 text-sm" style={{ color: "rgba(249,246,240,0.75)" }}>
              <div className="flex items-start gap-2">
                <MapPin size={14} className="mt-0.5 shrink-0" style={{ color: "#C9A84C" }} />
                <span>307 West Buffalo Street<br />New Buffalo, MI 49117</span>
              </div>
              <a href="tel:2196170654" className="flex items-center gap-2 hover:opacity-80">
                <Phone size={14} style={{ color: "#C9A84C" }} /> Pete: (219) 617-0654
              </a>
              <a href="tel:8138174934" className="flex items-center gap-2 hover:opacity-80">
                <Phone size={14} style={{ color: "#C9A84C" }} /> Erica: (813) 817-4934
              </a>
              <a href="mailto:Prahm@comcast.net" className="flex items-center gap-2 hover:opacity-80">
                <Mail size={14} style={{ color: "#C9A84C" }} /> Prahm@comcast.net
              </a>
              <a href="mailto:Erjohnson@kw.com" className="flex items-center gap-2 hover:opacity-80">
                <Mail size={14} style={{ color: "#C9A84C" }} /> Erjohnson@kw.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid rgba(201,168,76,0.2)" }}>
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "rgba(249,246,240,0.45)", letterSpacing: "0.08em" }}>
            © {new Date().getFullYear()} The Rahm Team. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(249,246,240,0.45)", letterSpacing: "0.1em" }}>
            Agent License #6506036734 • Licensed in Michigan & Indiana
          </p>
        </div>
      </div>
    </footer>
  );
}
