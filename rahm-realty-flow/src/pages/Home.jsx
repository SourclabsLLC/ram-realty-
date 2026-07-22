import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Star, BadgeCheck, Compass, Phone, ChevronDown, MapPin, HomeIcon, Waves, Trees } from "lucide-react";

// Fix leaflet default icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

const goldIcon = new L.DivIcon({
  html: `<div style="width:16px;height:16px;background:#C9A84C;border-radius:50%;border:3px solid #F9F6F0;box-shadow:0 2px 8px rgba(27,42,74,0.4)"></div>`,
  className: "",
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

const areas = [
  { name: "New Buffalo", lat: 41.7934, lng: -86.7453 },
  { name: "Union Pier", lat: 41.8378, lng: -86.6914 },
  { name: "Grand Beach", lat: 41.7706, lng: -86.7178 },
  { name: "Three Oaks", lat: 41.7973, lng: -86.6078 },
  { name: "Harbert", lat: 41.8806, lng: -86.6414 },
  { name: "Sawyer", lat: 41.8934, lng: -86.6581 },
  { name: "Bridgman", lat: 41.9334, lng: -86.5581 },
  { name: "Michigan City", lat: 41.7075, lng: -86.8950 },
  { name: "La Porte", lat: 41.6103, lng: -86.7222 },
];

const stats = [
  { icon: BadgeCheck, value: "~30", label: "Years of Experience" },
  { icon: Star, value: "5★", label: "Realtor.com Rating" },
  { icon: Compass, value: "MI & IN", label: "Licensed Broker/Owners" },
  { icon: MapPin, value: "10+", label: "Harbor Country Markets" },
];

const specialties = [
  { icon: Waves, label: "Lake Michigan Frontage", desc: "Beachfront and near-shore properties steps from the dunes." },
  { icon: HomeIcon, label: "Second Homes & Cottages", desc: "Seasonal getaways and investment properties throughout Harbor Country." },
  { icon: Trees, label: "Woodland Retreats", desc: "Serene forested homes with privacy and natural surroundings." },
  { icon: MapPin, label: "Country & Farm Estates", desc: "Pastoral properties and sprawling rural estates in Southwest Michigan." },
];

const testimonials = [
  { quote: "They truly cared about us and our home and went the extra mile… they made what can be a highly stressful situation a great experience!", name: "A. & M.", role: "Buyers · Harbor Country" },
  { quote: "Pete was knowledgeable and responsive to my needs… made experience-based suggestions throughout the entire purchase process.", name: "J. K.", role: "Buyer · Union Pier" },
  { quote: "From pricing to staging to paperwork, they covered it all. Smooth sale and great communication throughout.", name: "S. R.", role: "Seller · New Buffalo" },
];

// Rough state outline polygons for Michigan (lower peninsula SW corner) and Indiana (NW corner)
const stateShading = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Michigan" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-87.2, 41.696], [-86.5, 41.696], [-85.8, 41.75], [-85.5, 41.85],
          [-85.3, 42.0], [-85.4, 42.25], [-85.5, 42.45], [-85.6, 42.6],
          [-85.8, 42.8], [-86.0, 43.0], [-86.3, 43.2], [-86.5, 43.55],
          [-86.5, 42.8], [-86.55, 42.4], [-86.7, 42.0], [-86.9, 41.75],
          [-87.2, 41.696]
        ]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Indiana" },
      geometry: {
        type: "Polygon",
        coordinates: [[
          [-87.52, 41.76], [-87.0, 41.76], [-86.5, 41.76], [-86.0, 41.76],
          [-85.5, 41.76], [-85.2, 41.76], [-84.8, 41.76],
          [-84.8, 40.5], [-84.8, 39.0], [-85.0, 38.5],
          [-86.0, 38.0], [-87.0, 37.8], [-87.5, 37.9],
          [-88.0, 38.1], [-88.1, 38.5], [-87.9, 39.0],
          [-87.8, 39.6], [-87.7, 40.5], [-87.52, 41.76]
        ]]
      }
    }
  ]
};

const stateStyle = {
  fillColor: "#1B2A4A",
  fillOpacity: 0.12,
  color: "#C9A84C",
  weight: 1.5,
  opacity: 0.5,
};

function ScrollIndicator() {
  const { scrollYProgress } = useScroll();
  const height = useTransform(scrollYProgress, [0, 0.15], ["0%", "100%"]);
  return (
    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
      <span className="text-xs font-semibold uppercase tracking-widest" style={{ color: "rgba(249,246,240,0.6)", letterSpacing: "0.2em" }}>Discover</span>
      <div className="relative w-px h-12 overflow-hidden" style={{ background: "rgba(249,246,240,0.2)" }}>
        <motion.div className="absolute top-0 left-0 w-full" style={{ height, background: "#C9A84C" }} />
      </div>
      <ChevronDown size={16} color="rgba(249,246,240,0.5)" />
    </div>
  );
}

export default function Home() {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMapLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div style={{ background: "#F9F6F0" }}>
      {/* ── HERO ── */}
      <section
        className="relative flex items-center justify-center overflow-hidden"
        style={{ height: "100vh", minHeight: 600 }}
      >
        <img
          src="https://media.base44.com/images/public/user_6a06468739ca4b7352788361/bc709ca98_UntitledDesign4.jpg"
          alt="Lake Michigan beach dunes"
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(160deg, rgba(27,42,74,0.75) 0%, rgba(27,42,74,0.55) 60%, rgba(27,42,74,0.8) 100%)" }} />

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C9A84C", letterSpacing: "0.25em" }}>
              Keller Williams Harbor Country
            </p>
            <h1
              className="font-display text-6xl md:text-8xl font-bold leading-none mb-6"
              style={{ color: "#F9F6F0", fontFamily: "'Playfair Display', serif", letterSpacing: "-0.02em" }}
            >
              The Rahm<br />Team
            </h1>
            <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)", margin: "0 auto 24px", maxWidth: 280 }} />
            <p className="text-lg md:text-xl font-light mb-10 max-w-xl mx-auto" style={{ color: "rgba(249,246,240,0.85)", lineHeight: 1.7 }}>
              Nearly 30 years of family-driven expertise in Harbor Country — serving buyers and sellers across Lake Michigan's most coveted shores.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                to="/contact"
                className="px-8 py-3.5 font-semibold text-sm uppercase tracking-widest rounded transition-all duration-200 hover:opacity-90"
                style={{ background: "#C9A84C", color: "#1B2A4A", letterSpacing: "0.12em" }}
              >
                Contact Us
              </Link>
              <Link
                to="/about"
                className="px-8 py-3.5 font-semibold text-sm uppercase tracking-widest rounded border transition-all duration-200 hover:bg-white/10"
                style={{ borderColor: "rgba(249,246,240,0.5)", color: "#F9F6F0", letterSpacing: "0.12em" }}
              >
                Meet The Team
              </Link>
            </div>
          </motion.div>
        </div>
        <ScrollIndicator />
      </section>

      {/* ── STATS BAR ── */}
      <section style={{ background: "#1B2A4A", borderBottom: "1px solid rgba(201,168,76,0.3)" }}>
        <div className="max-w-6xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex flex-col items-center text-center"
              >
                <Icon size={20} style={{ color: "#C9A84C", marginBottom: 8 }} />
                <div className="text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#F9F6F0" }}>{value}</div>
                <div className="text-xs uppercase tracking-widest mt-1" style={{ color: "rgba(249,246,240,0.55)", letterSpacing: "0.15em" }}>{label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)", margin: "0 auto", maxWidth: 600 }} className="my-0" />

      {/* ── WHO WE ARE ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-full h-full rounded-2xl border" style={{ borderColor: "#C9A84C", opacity: 0.25 }} />
            <img
              src="https://media.base44.com/images/public/user_6a06468739ca4b7352788361/cb5dff774_IMG_2431.jpg"
              alt="Pete, Erica & Sue Rahm"
              className="rounded-2xl w-full object-cover shadow-2xl relative z-10 transition-transform duration-500 hover:scale-[1.02]"
              style={{ maxHeight: 480 }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>A Family Legacy</p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: "#1B2A4A", letterSpacing: "-0.02em" }}>
              Pete, Sue &<br />Erica Rahm
            </h2>
            <div style={{ height: "1px", background: "linear-gradient(90deg, #C9A84C, transparent)", marginBottom: 24, maxWidth: 200 }} />
            <p className="text-base leading-relaxed mb-5" style={{ color: "#1B2A4A", lineHeight: 1.8, fontSize: 17 }}>
              As seasoned broker-owners with nearly 30 years of experience, Pete and Sue Rahm lead The Rahm Team with integrity, local insight, and genuine care — now joined by their daughter Erica as a Keller Williams agent.
            </p>
            <p className="text-base leading-relaxed mb-8" style={{ color: "#1B2A4A", lineHeight: 1.8, fontSize: 17 }}>
              Pete, a former Michigan State Trooper, and Sue, born and raised in Harbor Country, have called this region home for four decades-plus. In 2003, they partnered with Keller Williams to open their New Buffalo office, bringing elite resources to local families.
            </p>
            <div className="flex flex-wrap gap-3">
              {["Broker/Owners", "Licensed MI & IN", "30 Years Local", "Family Team"].map((tag) => (
                <span key={tag} className="text-xs font-semibold px-3 py-1.5 rounded-full uppercase tracking-wider" style={{ background: "rgba(27,42,74,0.07)", color: "#1B2A4A", letterSpacing: "0.12em" }}>{tag}</span>
              ))}
            </div>
            <Link
              to="/about"
              className="mt-8 inline-block px-7 py-3 text-sm font-semibold uppercase tracking-widest rounded border-b-2 transition-all duration-200 hover:opacity-80"
              style={{ borderColor: "#C9A84C", color: "#1B2A4A", letterSpacing: "0.12em" }}
            >
              Our Full Story →
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── GOLD RULE ── */}
      <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)" }} className="max-w-5xl mx-auto" />

      {/* ── SPECIALTIES ── */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>What We Know Best</p>
          <h2 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#1B2A4A", letterSpacing: "-0.02em" }}>Our Specialties</h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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

      {/* ── LIFESTYLE / HOUSE ── */}
      <section className="relative overflow-hidden py-0">
        <div className="grid md:grid-cols-2">
          <div className="relative overflow-hidden" style={{ minHeight: 420 }}>
            <img
              src="https://media.base44.com/images/public/user_6a06468739ca4b7352788361/b3149fead_UntitledDesign5.jpg"
              alt="Harbor Country craftsman home"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              style={{ minHeight: 420 }}
            />
          </div>
          <div className="flex flex-col justify-center px-12 py-16" style={{ background: "#1B2A4A" }}>
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>Our Market</p>
            <h2 className="text-4xl font-bold mb-5 leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: "#F9F6F0", letterSpacing: "-0.02em" }}>
              Exceptional Homes<br />in Exceptional Places
            </h2>
            <div style={{ height: "1px", background: "linear-gradient(90deg, #C9A84C, transparent)", marginBottom: 20, maxWidth: 180 }} />
            <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(249,246,240,0.78)", lineHeight: 1.8, fontSize: 17 }}>
              From Lake Michigan-front cottages and luxury craftsman estates to serene woodland retreats and pastoral country farms — we know every corner of Harbor Country intimately.
            </p>
            <div className="flex flex-wrap gap-2 mb-8">
              {["New Buffalo", "Union Pier", "Grand Beach", "Three Oaks", "Harbert", "Sawyer", "Bridgman", "Long Beach", "La Porte", "Michigan City"].map((area) => (
                <span key={area} className="text-xs px-3 py-1 rounded-full" style={{ background: "rgba(249,246,240,0.1)", color: "rgba(249,246,240,0.7)", border: "1px solid rgba(201,168,76,0.25)" }}>{area}</span>
              ))}
            </div>
            <a
              href="https://www.realtor.com/realestateagency/56d0dd83761f0a01007d8466"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-7 py-3 text-sm font-semibold uppercase tracking-widest rounded transition-all duration-200 hover:opacity-90 self-start"
              style={{ background: "#C9A84C", color: "#1B2A4A", letterSpacing: "0.12em" }}
            >
              View KW Listings →
            </a>
          </div>
        </div>
      </section>

      {/* ── MAP ── */}
      <section className="py-24" style={{ background: "#F9F6F0" }}>
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>Area Mastery</p>
            <h2 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#1B2A4A", letterSpacing: "-0.02em" }}>Harbor Country Territory</h2>
            <p className="mt-3 text-base" style={{ color: "#7D8C7A" }}>From New Buffalo to Michigan City — we know every road, every shoreline, every neighborhood.</p>
          </motion.div>
          {mapLoaded && (
            <div className="rounded-2xl overflow-hidden shadow-2xl border" style={{ height: 420, borderColor: "rgba(201,168,76,0.3)" }}>
              <MapContainer
                center={[41.82, -86.72]}
                zoom={10}
                style={{ height: "100%", width: "100%" }}
                scrollWheelZoom={false}
              >
                <TileLayer
                  url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                />
                <GeoJSON data={stateShading} style={stateStyle} />
                {areas.map((area) => (
                  <Marker key={area.name} position={[area.lat, area.lng]} icon={goldIcon}>
                    <Popup>
                      <div style={{ fontFamily: "'Public Sans', sans-serif", color: "#1B2A4A", fontWeight: 600 }}>{area.name}</div>
                    </Popup>
                  </Marker>
                ))}
              </MapContainer>
            </div>
          )}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background: "#1B2A4A" }} className="py-24">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>Client Stories</p>
            <h2 className="text-4xl font-bold" style={{ fontFamily: "'Playfair Display', serif", color: "#F9F6F0", letterSpacing: "-0.02em" }}>Kind Words From Clients</h2>
            <div className="flex justify-center gap-1 mt-4">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="#C9A84C" color="#C9A84C" />)}
            </div>
            <p className="text-sm mt-2" style={{ color: "rgba(249,246,240,0.5)" }}>Perfect 5-star rating on Realtor.com</p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map(({ quote, name, role }, i) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="rounded-2xl p-8"
                style={{ background: "rgba(249,246,240,0.05)", border: "1px solid rgba(201,168,76,0.2)" }}
              >
                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => <Star key={j} size={13} fill="#C9A84C" color="#C9A84C" />)}
                </div>
                <p className="text-base italic leading-relaxed mb-6" style={{ color: "rgba(249,246,240,0.82)", lineHeight: 1.8 }}>"{quote}"</p>
                <div>
                  <div className="font-semibold text-sm" style={{ color: "#F9F6F0" }}>{name}</div>
                  <div className="text-xs mt-0.5" style={{ color: "#C9A84C" }}>{role}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a
              href="https://www.realtor.com/realestateagents/5673b0740fa417010071b853"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest transition-opacity hover:opacity-80"
              style={{ color: "#C9A84C", letterSpacing: "0.15em" }}
            >
              <span>Read All Reviews on Realtor.com</span>
              <span style={{ fontSize: 16 }}>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 px-6" style={{ background: "#F9F6F0" }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "#C9A84C", letterSpacing: "0.2em" }}>Ready to Begin?</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 leading-tight" style={{ fontFamily: "'Playfair Display', serif", color: "#1B2A4A", letterSpacing: "-0.02em" }}>
            Start Your Harbor Country Story
          </h2>
          <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, #C9A84C, transparent)", maxWidth: 250, margin: "0 auto 24px" }} />
          <p className="text-base mb-10" style={{ color: "#7D8C7A", lineHeight: 1.8, fontSize: 17 }}>
            Let's talk about your goals. Whether you're buying, selling, or exploring — Pete, Sue, and Erica are ready to guide you every step of the way.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-9 py-4 font-semibold text-sm uppercase tracking-widest rounded transition-all duration-200 hover:opacity-90"
              style={{ background: "#1B2A4A", color: "#F9F6F0", letterSpacing: "0.12em" }}
            >
              Contact The Team
            </Link>
            <a
              href="tel:2196170654"
              className="px-9 py-4 font-semibold text-sm uppercase tracking-widest rounded border transition-all duration-200 hover:bg-navy/5 flex items-center gap-2"
              style={{ borderColor: "#1B2A4A", color: "#1B2A4A", letterSpacing: "0.12em" }}
            >
              <Phone size={15} /> Call Pete
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  );
}