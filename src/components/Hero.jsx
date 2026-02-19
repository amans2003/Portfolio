import { motion } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaCodepen,FaInstagram } from "react-icons/fa";
import TypingText from "./TypingText";
import profileImage from "../assets/ME.jpg";
import { IoRocket } from "react-icons/io5";
import { FaReact } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";


function Hero() {
  const roles = [
    "A Full Stack Developer",
    "A MERN Stack Expert",
    "A React Enthusiast",
    "A Creative Problem Solver",
  ];

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/amans2003", icon: FaGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aman-singh-9a8233254/", icon: FaLinkedinIn },
    { name: "Instagram", url: "https://www.instagram.com/https.aman.sgh/", icon: FaInstagram }
    
  ];

  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "120px 24px",
        position: "relative",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto", width: "100%" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
          }}
        >
          {/* Left Content */}
          <div>
            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                color: "#00fff5",
                fontSize: "18px",
                fontWeight: "500",
                marginBottom: "16px",
              }}
            >
              Hello , I'm
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontSize: "clamp(40px, 8vw, 72px)",
                fontWeight: "700",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              <span style={{ color: "#fff" }}>Aman Singh</span>
              <span style={{ color: "#00fff5" }}>,</span>
            </motion.h1>

            {/* Typing Role */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: "600",
                color: "rgba(255, 255, 255, 0.6)",
                marginBottom: "24px",
                minHeight: "50px",
              }}
            >
              <TypingText texts={roles} speed={80} deleteSpeed={40} pauseDuration={2500} />
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{
                fontSize: "16px",
                color: "rgba(255, 255, 255, 0.6)",
                lineHeight: 1.8,
                maxWidth: "500px",
                marginBottom: "32px",
              }}
            >
              I'm a skilled full-stack developer with expertise in the MERN stack. Currently working as a
              Software Developer at Holstein, I specialize in building modern web applications with React,
              Node.js, and interactive 3D experiences. I combine clean code with creative problem-solving to
              deliver high-quality results.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              style={{ marginBottom: "40px" }}
            >
              <a href="#contact" className="btn-primary" style={{ display: "inline-flex" }}>
                <span>Contact me!</span>
                <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              style={{ display: "flex", gap: "16px" }}
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "10px",
                      background: "rgba(255, 255, 255, 0.05)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "rgba(255, 255, 255, 0.6)",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "linear-gradient(135deg, #00fff5, #8b5cf6)";
                      e.currentTarget.style.color = "#0a0a0f";
                      e.currentTarget.style.borderColor = "transparent";
                      e.currentTarget.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.05)";
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    <IconComponent size={20} />
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right - Profile Image Area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "400px",
                height: "400px",
              }}
            >
              {/* Gradient Background Circle */}
              <div
                style={{
                  position: "absolute",
                  inset: "0",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(0, 255, 245, 0.2), rgba(139, 92, 246, 0.2))",
                  filter: "blur(60px)",
                }}
              />

              {/* Profile Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "linear-gradient(145deg, rgba(22, 22, 29, 0.9), rgba(10, 10, 15, 0.9))",
                  border: "2px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  overflow: "hidden",
                }}
              >
                {/* Profile Image */}
                <img
                  src={profileImage}
                  alt="Shovon Rahman"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />

                {/* Decorative Ring */}
                <div
                  style={{
                    position: "absolute",
                    inset: "10px",
                    borderRadius: "50%",
                    border: "1px solid rgba(0, 255, 245, 0.3)",
                  }}
                />
              </div>

              {/* Floating Tech Icons */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "20px",
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background: "rgba(22, 22, 29, 0.9)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                <FaReact />
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                style={{
                  position: "absolute",
                  bottom: "40px",
                  left: "0px",
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background: "rgba(22, 22, 29, 0.9)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                <IoRocket />
              </motion.div>

              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                style={{
                  position: "absolute",
                  bottom: "80px",
                  right: "-10px",
                  width: "50px",
                  height: "50px",
                  borderRadius: "12px",
                  background: "rgba(22, 22, 29, 0.9)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "24px",
                }}
              >
                <FaCode />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          style={{
            width: "24px",
            height: "40px",
            borderRadius: "12px",
            border: "2px solid rgba(255, 255, 255, 0.2)",
            display: "flex",
            justifyContent: "center",
            paddingTop: "8px",
          }}
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            style={{
              width: "4px",
              height: "8px",
              borderRadius: "2px",
              background: "#00fff5",
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
