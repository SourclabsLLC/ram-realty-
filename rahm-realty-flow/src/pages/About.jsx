import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BadgeCheck, Star, Compass, Phone, Mail, Shield, Waves, Home, Trees, MapPin } from "lucide-react";

const team = [
  {
    name: "Pete Rahm",
    title: "Broker/Owner",
    phone: "(219) 617-0654",
    email: "Prahm@gmail.com",
    bio: "A former Michigan State Trooper, Pete brings discipline, integrity, and sharp analytical thinking to every real estate transaction. With over 30 years living and working in Harbor Country, his local knowledge is unmatched. Pete leads negotiations with a steady hand and always advocates fiercely for his clients' best interests.",
    credentials: ["Broker/Owner", "Licensed MI & IN", "30+ Years Experience", "Former State Trooper"],
    icon: Shield,
  },
  {
    name: "Sue Rahm",
    title: "Broker/Owner",
    phone: "(219) 617-0654",
    email: "Prahm@gmail.com",
    bio: "Born and raised in Harbor Country, Sue has watched this region grow and flourish over four decades. Her deep roots translate into nuanced neighborhood knowledge and a warm, personalized service style that clients rave about. Sue specializes in helping families find not just a house, but a true home in the community she loves.",
    credentials: ["Broker/Owner", "Harbor Country Native", "40+ Years Local", "Client Relations Expert"],
    icon: Compass,
  },
  {
    name: "Erica Johnson",
    title: "KW Agent · The Rahm Team",
    phone: "(813) 817-4934",
    email: "Erjohnson@kw.com",
    bio: "The next generation of Rahm real estate excellence, Erica brings fresh energy and modern marketing expertise to the team. As Pete and Sue's daughter, she grew up immersed in the industry and carries the same commitment to personalized service and client care that defines The Rahm Team's legacy.",
    credentials: ["KW Licensed Agent", "Second Generation", "Digital Marketing", "Buyer Specialist"],
    icon: Star,
  },
];

const specialties = [
  { icon: Waves, label: "Lake Michigan Access", desc: "Beachfront cottages, lakefront estates, and near-shore properties." },
  { icon: Home, label: "Second Homes", desc: "Seasonal retreats and investment properties throughout Harbor Country." },
  { icon: Trees, label: "Wooded Retreats", desc: "Private forested homes with natural beauty and seclusion." },
  { icon: MapPin, label: "Country Estates", desc: "Pastoral farms and sprawling rural properties in Southwest Michigan." },
];

const testimonials = [
  { quote: "They truly cared about us and our home and went the extra mile… they made what can be a highly stressful situation a great experience!", name: "A. & M.", role: "Buyers · Harbor Country" },
  { quote: "Pete was knowledgeable and responsive to my needs… made experience-based suggestions throughout the entire purchase process.", name: "J. K.", role: "Buyer · Union Pier" },
  { quote: "From pricing to staging to paperwork, they covered it all. Smooth sale and great communication throughout.", name: "S. R.", role: "Seller · New Buffalo" },
];

const process = [
  { step: "01", title: "Discovery", desc: "We start by deeply understanding your goals, lifestyle, timeline, and budget — no rush, no pressure." },
  { step: "02", title: "Strategy", desc: "Curated property options or precise pricing strategy, built on real local data and decades of experience." },
  { step: "03", title: "Tours & Offers", desc: "We guide you through every showing and craft offers with the negotiation insight only years of local deals can provide." },
  { step: "04", title: "Seamless Close", desc: "Clear communication, proactive problem-solving, and complete support from accepted offer to keys in hand." },
];

export default function About() {
  return (
    <div style={{ background: "#F9F6F0" }}>
      {/* ── HERO ── */}
      <section
        className="relative flex items-end overflow-hidden pt-32 pb-20"
        style={{ background: "#1B2A4A", minHeight: 360 }}
      >
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "radial-gradient(circle at 30% 50%, #C9A84C 0%, transparent 50%), radial-gradient(circle at 80% 20%, #7D8C7A 0%, transparent 40%)" }}
        />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>The People Behind The Name</p>
            <h1 className="text-5xl md:text-7xl font-bold leading-none mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#F9F6F0", letterSpacing: "-0.02em" }}>
              Meet The Team
            </h1>
            <div style={{ height: "1px", background: "linear-gradient(90deg, #C9A84C, transparent)", maxWidth: 300 }} />
            <p className="mt-5 text-base max-w-xl" style={{ color: "rgba(249,246,240,0.72)", lineHeight: 1.8, fontSize: 17 }}>
              A family of three united by a passion for Harbor Country real estate — and an unwavering commitment to every client they serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TEAM PHOTO + INTRO ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-5 -left-5 w-full h-full rounded-2xl" style={{ border: "1px solid rgba(201,168,76,0.3)" }} />
            <img
              src="https://media.base44.com/images/public/user_6a06468739ca4b7352788361/cb5dff774_IMG_2431.jpg"
              alt="Pete, Erica & Sue Rahm"
              className="rounded-2xl w-full object-cover shadow-2xl relative z-10"
              style={{ maxHeight: 520 }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>Our Story</p>
            <h2 className="text-4xl font-bold mb-5 leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: "#1B2A4A", letterSpacing: "-0.02em" }}>
              Rahm Realty —<br />A Homegrown Legacy
            </h2>
            <div style={{ height: "1px", background: "linear-gradient(90deg, #C9A84C, transparent)", maxWidth: 200, marginBottom: 24 }} />
            <p className="text-base leading-relaxed mb-5" style={{ color: "#1B2A4A", lineHeight: 1.8, fontSize: 17 }}>
              As seasoned broker-owners with nearly 30 years of experience, Pete and Sue Rahm lead Rahm Realty with integrity, local insight, and genuine care for their clients — now joined by their daughter Erica.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#7D8C7A", lineHeight: 1.8, fontSize: 17 }}>
              In 2003, they partnered with Keller Williams to open their New Buffalo office, bringing elite national resources and reach to the families and communities they've always called home.
            </p>
            <div className="grid grid-cols-3 gap-4">
              {[{ icon: BadgeCheck, val: "~30", sub: "Years" }, { icon: Star, val: "5★", sub: "Rating" }, { icon: Compass, val: "MI+IN", sub: "Licensed" }].map(({ icon: Icon, val, sub }) => (
                <div key={sub} className="text-center rounded-xl p-4" style={{ background: "rgba(27,42,74,0.05)" }}>
                  <Icon size={18} style={{ color: "#C9A84C", margin: "0 auto 6px" }} />
                  <div className="font-bold text-xl" style={{ fontFamily: "'Playfair Display', serif", color: "#1B2A4A" }}>{val}</div>
                  <div className="text-xs uppercase tracking-widest mt-0.5" style={{ color: "#7D8C7A" }}>{sub}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── INDIVIDUAL BIOS ── */}
      <section style={{ background: "#1B2A4A" }} className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>The People</p>
            <h2 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#F9F6F0", letterSpacing: "-0.02em" }}>Your Advisors</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map(({ name, title, phone, email, bio, credentials, icon: Icon }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.6 }}
                className="rounded-2xl p-8 flex flex-col"
                style={{ background: "rgba(249,246,240,0.04)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5" style={{ background: "rgba(201,168,76,0.15)" }}>
                  <Icon size={22} style={{ color: "#C9A84C" }} />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-0.5" style={{ fontFamily: "'Playfair Display', serif", color: "#F9F6F0" }}>{name}</h3>
                  <p className="text-xs uppercase tracking-widest mb-4" style={{ color: "#C9A84C", letterSpacing: "0.15em" }}>{title}</p>
                </div>
                <p className="text-sm leading-relaxed flex-1 mb-6" style={{ color: "rgba(249,246,240,0.72)", lineHeight: 1.8 }}>{bio}</p>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {credentials.map((c) => (
                    <span key={c} className="text-xs px-2 py-1 rounded" style={{ background: "rgba(201,168,76,0.12)", color: "#C9A84C" }}>{c}</span>
                  ))}
                </div>
                <div className="flex flex-col gap-2 pt-4" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
                  <a href={`tel:${phone.replace(/\D/g, "")}`} className="flex items-center gap-2 text-xs hover:opacity-80 transition-opacity" style={{ color: "rgba(249,246,240,0.65)" }}>
                    <Phone size={12} style={{ color: "#C9A84C" }} />{phone}
                  </a>
                  <a href={`mailto:${email}`} className="flex items-center gap-2 text-xs hover:opacity-80 transition-opacity" style={{ color: "rgba(249,246,240,0.65)" }}>
                    <Mail size={12} style={{ color: "#C9A84C" }} />{email}
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALTIES ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>Property Types</p>
          <h2 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#1B2A4A", letterSpacing: "-0.02em" }}>Our Specialties</h2>
        </motion.div>
        <div className="grid md:grid-cols-4 gap-6">
          {specialties.map(({ icon: Icon, label, desc }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-2xl p-7 border group transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ background: "#fff", borderColor: "rgba(27,42,74,0.1)" }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300" style={{ background: "rgba(201,168,76,0.12)" }}>
                <Icon size={20} style={{ color: "#C9A84C" }} />
              </div>
              <div className="font-semibold mb-2" style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, color: "#1B2A4A" }}>{label}</div>
              <p className="text-sm leading-relaxed" style={{ color: "#7D8C7A", lineHeight: 1.7 }}>{desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section style={{ background: "rgba(27,42,74,0.04)" }} className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>Our Process</p>
            <h2 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#1B2A4A", letterSpacing: "-0.02em" }}>How We Work</h2>
          </motion.div>
          <div className="grid md:grid-cols-4 gap-8">
            {process.map(({ step, title, desc }, i) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <div className="text-4xl font-bold mb-3" style={{ fontFamily: "'Playfair Display', serif", color: "rgba(201,168,76,0.35)" }}>{step}</div>
                <div style={{ height: "1px", background: "#C9A84C", marginBottom: 12, maxWidth: 40 }} />
                <h3 className="font-semibold text-lg mb-2" style={{ color: "#1B2A4A" }}>{title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#7D8C7A", lineHeight: 1.7 }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="max-w-6xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>Client Stories</p>
          <h2 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#1B2A4A", letterSpacing: "-0.02em" }}>Kind Words From Clients</h2>
          <div className="flex justify-center gap-1 mt-4">
            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#C9A84C" color="#C9A84C" />)}
          </div>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map(({ quote, name, role }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="rounded-2xl p-8 border"
              style={{ background: "#fff", borderColor: "rgba(27,42,74,0.1)" }}
            >
              <div className="flex gap-0.5 mb-4">
                {[...Array(5)].map((_, j) => <Star key={j} size={13} fill="#C9A84C" color="#C9A84C" />)}
              </div>
              <p className="text-base italic leading-relaxed mb-6" style={{ color: "#1B2A4A", lineHeight: 1.8 }}>"{quote}"</p>
              <div>
                <div className="font-semibold text-sm" style={{ color: "#1B2A4A" }}>{name}</div>
                <div className="text-xs mt-0.5" style={{ color: "#C9A84C" }}>{role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#1B2A4A" }} className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif", color: "#F9F6F0", letterSpacing: "-0.02em" }}>
            Ready to Work Together?
          </h2>
          <p className="text-base mb-8" style={{ color: "rgba(249,246,240,0.7)", lineHeight: 1.8 }}>Contact Pete, Sue, or Erica today and take the first step toward your Harbor Country dream.</p>
          <Link
            to="/contact"
            className="inline-block px-9 py-4 font-semibold text-sm uppercase tracking-widest rounded transition-all duration-200 hover:opacity-90"
            style={{ background: "#C9A84C", color: "#1B2A4A", letterSpacing: "0.12em" }}
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}