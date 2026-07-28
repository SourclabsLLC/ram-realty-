import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";

const contacts = [
  { icon: Phone, label: "Pete Rahm", value: "(219) 617-0654", href: "tel:2196170654" },
  { icon: Phone, label: "Erica Johnson", value: "(813) 817-4934", href: "tel:8138174934" },
  { icon: Mail, label: "Pete's Email", value: "Prahm@comcast.net", href: "mailto:Prahm@comcast.net" },
  { icon: Mail, label: "Erica's KW Email", value: "Erjohnson@kw.com", href: "mailto:Erjohnson@kw.com" },
  { icon: MapPin, label: "Office", value: "307 West Buffalo St, New Buffalo, MI 49117", href: "https://maps.google.com/?q=307+West+Buffalo+Street+New+Buffalo+MI+49117" },
];

const links = [
  { label: "Realtor.com Profile", href: "https://www.realtor.com/realestateagents/5673b0740fa417010071b853" },
  { label: "KW Agency Page", href: "https://www.realtor.com/realestateagency/56d0dd83761f0a01007d8466" },
  { label: "KW Facebook", href: "https://www.facebook.com/KellerWilliamsHarborCountry/" },
];

export default function Contact() {
  return (
    <div style={{ background: "#F9F6F0", minHeight: "100vh" }}>
      {/* Hero */}
      <section style={{ background: "#1B2A4A" }} className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>We'd Love To Hear From You</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-none mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#F9F6F0", letterSpacing: "-0.02em" }}>
              Get In Touch
            </h1>
            <div style={{ height: "1px", background: "linear-gradient(90deg, #C9A84C, transparent)", maxWidth: 250 }} />
            <p className="mt-5 text-base max-w-lg" style={{ color: "rgba(249,246,240,0.72)", lineHeight: 1.8, fontSize: 17 }}>
              Whether you're buying, selling, or simply exploring Harbor Country — Pete, Sue, and Erica are ready to guide you with care and expertise.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-3xl mx-auto px-6 py-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-8" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>Direct Contact</p>
          <div className="flex flex-col gap-6 mb-12">
            {contacts.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="flex items-start gap-4 group transition-opacity hover:opacity-75"
              >
                <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(201,168,76,0.12)" }}>
                  <Icon size={16} style={{ color: "#C9A84C" }} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest mb-0.5" style={{ color: "#7D8C7A", letterSpacing: "0.12em" }}>{label}</div>
                  <div className="text-base font-medium" style={{ color: "#1B2A4A" }}>{value}</div>
                </div>
              </a>
            ))}
          </div>

          <div style={{ height: "1px", background: "linear-gradient(90deg, #C9A84C, transparent)", marginBottom: 28, maxWidth: 200 }} />

          <p className="text-xs font-semibold uppercase tracking-widest mb-5" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>External Links</p>
          <div className="flex flex-col gap-4">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium transition-opacity hover:opacity-70"
                style={{ color: "#1B2A4A" }}
              >
                <ExternalLink size={13} style={{ color: "#C9A84C" }} /> {label}
              </a>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Beach image strip */}
      <section className="relative overflow-hidden" style={{ height: 320 }}>
        <img
          src="https://media.base44.com/images/public/user_6a06468739ca4b7352788361/bc709ca98_UntitledDesign4.jpg"
          alt="Lake Michigan beach"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: "rgba(27,42,74,0.55)" }}>
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>Harbor Country, Michigan</p>
            <p className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#F9F6F0" }}>Your Shore Awaits</p>
          </div>
        </div>
      </section>
    </div>
  );
}
