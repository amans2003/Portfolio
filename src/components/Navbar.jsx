import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 40,
        padding: isScrolled ? "16px 0" : "24px 0",
        background: isScrolled ? "rgba(10, 10, 15, 0.9)" : "transparent",
        backdropFilter: isScrolled ? "blur(20px)" : "none",
        borderBottom: isScrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
        transition: "all 0.3s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a
          href="#home"
          style={{
            textDecoration: "none",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "12px",
              background: "linear-gradient(135deg, #00fff5, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: "bold",
              fontSize: "18px",
              color: "#0a0a0f",
            }}
          >
            SR
          </div>
          <span
            style={{
              fontWeight: "600",
              fontSize: "18px",
              color: "#fff",
              display: "none",
            }}
          >
            Shovon Rahman
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
          }}
        >
          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              style={{
                padding: "10px 18px",
                color: "rgba(255, 255, 255, 0.7)",
                textDecoration: "none",
                fontSize: "14px",
                fontWeight: "500",
                borderRadius: "8px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#fff";
                e.target.style.background = "rgba(255, 255, 255, 0.05)";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "rgba(255, 255, 255, 0.7)";
                e.target.style.background = "transparent";
              }}
            >
              {link.name}
            </motion.a>
          ))}

          {/* Resume Button */}
          <motion.a
            href="/resume.pdf"
            target="_blank"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            style={{
              marginLeft: "12px",
              padding: "10px 24px",
              background: "linear-gradient(135deg, #00fff5, #8b5cf6)",
              color: "#0a0a0f",
              textDecoration: "none",
              fontSize: "14px",
              fontWeight: "600",
              borderRadius: "8px",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "translateY(-2px)";
              e.target.style.boxShadow = "0 10px 30px rgba(0, 255, 245, 0.3)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "translateY(0)";
              e.target.style.boxShadow = "none";
            }}
          >
            Resume
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          style={{
            display: "none",
            flexDirection: "column",
            gap: "5px",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: "10px",
          }}
        >
          <span
            style={{
              width: "24px",
              height: "2px",
              background: "#fff",
              borderRadius: "1px",
              transition: "all 0.3s",
              transform: isMobileMenuOpen ? "rotate(45deg) translateY(7px)" : "none",
            }}
          />
          <span
            style={{
              width: "24px",
              height: "2px",
              background: "#fff",
              borderRadius: "1px",
              opacity: isMobileMenuOpen ? 0 : 1,
              transition: "all 0.3s",
            }}
          />
          <span
            style={{
              width: "24px",
              height: "2px",
              background: "#fff",
              borderRadius: "1px",
              transition: "all 0.3s",
              transform: isMobileMenuOpen ? "rotate(-45deg) translateY(-7px)" : "none",
            }}
          />
        </button>
      </div>
    </motion.header>
  );
}

export default Navbar;
