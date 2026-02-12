import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiHome, HiUser, HiCode, HiLightningBolt, HiMail, HiMenuAlt3, HiX } from "react-icons/hi";

function SideNav({ activeSection }) {
  const [hoveredSection, setHoveredSection] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const sections = [
    { id: "home", label: "Home", icon: HiHome },
    { id: "about", label: "About", icon: HiUser },
    { id: "projects", label: "Projects", icon: HiCode },
    { id: "skills", label: "Skills", icon: HiLightningBolt },
    { id: "contact", label: "Contact", icon: HiMail },
  ];

  const toggleNav = () => setIsOpen(!isOpen);
  const closeNav = () => setIsOpen(false);

  // Mobile Navigation Toggle Button
  const ToggleButton = () => (
    <motion.button
      onClick={toggleNav}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      style={{
        position: "fixed",
        top: "20px",
        left: "20px",
        zIndex: 1001,
        width: "50px",
        height: "50px",
        borderRadius: "15px",
        background: "rgba(10, 10, 15, 0.8)",
        backdropFilter: "blur(20px)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        color: "#00fff5",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        boxShadow: "0 10px 30px rgba(0, 255, 245, 0.15)",
      }}
    >
      {isOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
    </motion.button>
  );

  // Mobile Bottom Navigation (Always accessible but compact)
  if (isMobile) {
    return (
      <>
        <ToggleButton />
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Overlay Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeNav}
                style={{
                  position: "fixed",
                  inset: 0,
                  background: "rgba(0, 0, 0, 0.5)",
                  backdropFilter: "blur(5px)",
                  zIndex: 999,
                }}
              />
              <motion.nav
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  bottom: 0,
                  width: "280px",
                  zIndex: 1000,
                  background: "rgba(10, 10, 15, 0.95)",
                  backdropFilter: "blur(30px)",
                  borderRight: "1px solid rgba(255, 255, 255, 0.08)",
                  padding: "100px 24px 40px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {sections.map((section) => {
                  const IconComponent = section.icon;
                  const isActive = activeSection === section.id;

                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      onClick={closeNav}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        padding: "16px 20px",
                        borderRadius: "16px",
                        textDecoration: "none",
                        transition: "all 0.3s ease",
                        background: isActive
                          ? "linear-gradient(135deg, rgba(0, 255, 245, 0.1), rgba(139, 92, 246, 0.1))"
                          : "transparent",
                        border: isActive
                          ? "1px solid rgba(0, 255, 245, 0.2)"
                          : "1px solid transparent",
                      }}
                    >
                      <div
                        style={{
                          width: "40px",
                          height: "40px",
                          borderRadius: "12px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: isActive
                            ? "linear-gradient(135deg, #00fff5, #8b5cf6)"
                            : "rgba(255, 255, 255, 0.05)",
                          color: isActive ? "#0a0a0f" : "rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        <IconComponent size={20} />
                      </div>
                      <span
                        style={{
                          fontSize: "16px",
                          fontWeight: isActive ? "600" : "400",
                          color: isActive ? "#00fff5" : "rgba(255, 255, 255, 0.7)",
                        }}
                      >
                        {section.label}
                      </span>
                    </a>
                  );
                })}
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </>
    );
  }

  // Desktop Side Navigation
  return (
    <>
      <ToggleButton />
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            style={{
              position: "fixed",
              left: "24px",
              top: "50%",
              transform: "translateY(-50%)",
              zIndex: 1000,
              display: "flex",
              flexDirection: "column",
              gap: "8px",
            }}
          >
            {/* Background Glass Container */}
            <div
              style={{
                position: "absolute",
                inset: "-16px",
                background: "rgba(10, 10, 15, 0.8)",
                backdropFilter: "blur(20px)",
                borderRadius: "24px",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                zIndex: -1,
                boxShadow: "0 20px 40px rgba(0, 0, 0, 0.4)",
              }}
            />

            {sections.map((section, index) => {
              const IconComponent = section.icon;
              const isActive = activeSection === section.id;
              const isHovered = hoveredSection === section.id;

              return (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  onClick={closeNav}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredSection(section.id)}
                  onMouseLeave={() => setHoveredSection(null)}
                  style={{
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "12px",
                    borderRadius: "12px",
                    textDecoration: "none",
                    transition: "all 0.3s ease",
                    background: isActive
                      ? "linear-gradient(135deg, rgba(0, 255, 245, 0.15), rgba(139, 92, 246, 0.15))"
                      : isHovered
                        ? "rgba(255, 255, 255, 0.05)"
                        : "transparent",
                  }}
                >
                  {/* Active Indicator Line */}
                  <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{
                      scaleY: isActive ? 1 : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{
                      position: "absolute",
                      left: "-8px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: "3px",
                      height: "24px",
                      background: "linear-gradient(180deg, #00fff5, #8b5cf6)",
                      borderRadius: "2px",
                    }}
                  />

                  {/* Icon Container */}
                  <motion.div
                    animate={{
                      scale: isActive || isHovered ? 1.1 : 1,
                      rotate: isHovered ? [0, -10, 10, 0] : 0,
                    }}
                    transition={{
                      scale: { duration: 0.2 },
                      rotate: { duration: 0.4 },
                    }}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isActive
                        ? "linear-gradient(135deg, #00fff5, #8b5cf6)"
                        : "rgba(255, 255, 255, 0.05)",
                      border: isActive ? "none" : "1px solid rgba(255, 255, 255, 0.08)",
                      color: isActive ? "#0a0a0f" : "rgba(255, 255, 255, 0.6)",
                      transition: "all 0.3s ease",
                      boxShadow: isActive ? "0 4px 20px rgba(0, 255, 245, 0.3)" : "none",
                    }}
                  >
                    <IconComponent size={20} />
                  </motion.div>

                  {/* Label - Shows on hover */}
                  <motion.span
                    initial={{ opacity: 0, width: 0 }}
                    animate={{
                      opacity: isHovered || isActive ? 1 : 0,
                      width: isHovered || isActive ? "auto" : 0,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                      fontSize: "14px",
                      fontWeight: "500",
                      color: isActive ? "#00fff5" : "#fff",
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                    }}
                  >
                    {section.label}
                  </motion.span>

                  {/* Glow Effect on Active */}
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      style={{
                        position: "absolute",
                        inset: "-2px",
                        background: "linear-gradient(135deg, rgba(0, 255, 245, 0.2), rgba(139, 92, 246, 0.2))",
                        borderRadius: "14px",
                        filter: "blur(8px)",
                        zIndex: -1,
                      }}
                    />
                  )}

                  {/* Tooltip for non-hovered state */}
                  <motion.div
                    initial={{ opacity: 0, x: 10, scale: 0.8 }}
                    animate={{
                      opacity: isHovered && !isActive ? 1 : 0,
                      x: isHovered && !isActive ? 0 : 10,
                      scale: isHovered && !isActive ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.2 }}
                    style={{
                      position: "absolute",
                      left: "100%",
                      marginLeft: "16px",
                      padding: "8px 16px",
                      background: "rgba(22, 22, 29, 0.95)",
                      border: "1px solid rgba(255, 255, 255, 0.1)",
                      borderRadius: "8px",
                      fontSize: "13px",
                      color: "#fff",
                      whiteSpace: "nowrap",
                      pointerEvents: "none",
                      boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
                      display: isActive ? "none" : "block",
                    }}
                  >
                    {section.label}
                    {/* Arrow */}
                    <div
                      style={{
                        position: "absolute",
                        left: "-6px",
                        top: "50%",
                        transform: "translateY(-50%) rotate(45deg)",
                        width: "10px",
                        height: "10px",
                        background: "rgba(22, 22, 29, 0.95)",
                        borderLeft: "1px solid rgba(255, 255, 255, 0.1)",
                        borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                      }}
                    />
                  </motion.div>
                </motion.a>
              );
            })}
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}

export default SideNav;
