import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaReact, FaNodeJs, FaGitAlt, FaDocker, FaFigma, FaLinux } from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiThreedotjs,
  SiTailwindcss,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiPostman,
  SiVite,
  SiRedux,
  SiStripe,
  SiNetlify,
  SiVercel,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscCode } from "react-icons/vsc";

function Skills({ setCursorVariant }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

  const skillCategories = [
    {
      title: "Frontend",
      subtitle: "Building beautiful interfaces",
      color: "#00fff5",
      icon: FaReact,
      skills: [
        { name: "React", level: 95, icon: FaReact },
        { name: "JavaScript", level: 90, icon: SiJavascript },
        { name: "TypeScript", level: 75, icon: SiTypescript },
        { name: "Three.js", level: 70, icon: SiThreedotjs },
        { name: "Tailwind CSS", level: 90, icon: SiTailwindcss },
        { name: "Next.js", level: 65, icon: SiNextdotjs },
      ],
    },
    {
      title: "Backend",
      subtitle: "Powering the logic",
      color: "#8b5cf6",
      icon: FaNodeJs,
      skills: [
        { name: "Node.js", level: 88, icon: FaNodeJs },
        { name: "Express.js", level: 85, icon: SiExpress },
        { name: "MongoDB", level: 85, icon: SiMongodb },
        { name: "REST APIs", level: 90, icon: TbApi },
        { name: "Firebase", level: 80, icon: SiFirebase },
        { name: "PostgreSQL", level: 65, icon: SiPostgresql },
      ],
    },
    {
      title: "Tools",
      subtitle: "Enhancing workflow",
      color: "#a7c957",
      icon: FaGitAlt,
      skills: [
        { name: "Git & GitHub", level: 90, icon: FaGitAlt },
        { name: "VS Code", level: 95, icon: VscCode },
        { name: "Figma", level: 70, icon: FaFigma },
        { name: "Docker", level: 60, icon: FaDocker },
        { name: "Postman", level: 85, icon: SiPostman },
        { name: "Linux", level: 75, icon: FaLinux },
      ],
    },
  ];

  const techStack = [
    { name: "React", icon: FaReact },
    { name: "Node.js", icon: FaNodeJs },
    { name: "MongoDB", icon: SiMongodb },
    { name: "Express", icon: SiExpress },
    { name: "JavaScript", icon: SiJavascript },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind", icon: SiTailwindcss },
    { name: "Firebase", icon: SiFirebase },
    { name: "Git", icon: FaGitAlt },
    { name: "Three.js", icon: SiThreedotjs },
    { name: "Vite", icon: SiVite },
    { name: "Redux", icon: SiRedux },
    { name: "Stripe", icon: SiStripe },
    { name: "Netlify", icon: SiNetlify },
    { name: "Vercel", icon: SiVercel },
    { name: "Figma", icon: FaFigma },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      style={{
        minHeight: "100vh",
        padding: "100px 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <span className="section-label">SKILLS & EXPERTISE</span>
          <h2
            style={{
              fontSize: "clamp(36px, 6vw, 56px)",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "16px",
            }}
          >
            My Tech{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #00fff5, #8b5cf6, #ff00ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Arsenal
            </span>
          </h2>
          <p
            style={{
              fontSize: "18px",
              color: "rgba(255, 255, 255, 0.6)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            Crafting digital experiences with modern technologies
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "center",
            marginBottom: "80px",
          }}
          className="skills-main-grid"
        >
          {/* Left: Orbit Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{
              position: "relative",
              height: "450px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              overflow: "visible",
            }}
          >
            {/* Center Core */}
            <motion.div
              key={activeCategory}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1, rotate: 360 }}
              transition={{
                scale: { duration: 0.3 },
                opacity: { duration: 0.3 },
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              }}
              style={{
                position: "absolute",
                width: "100px",
                height: "100px",
                borderRadius: "50%",
                background: `linear-gradient(135deg, ${skillCategories[activeCategory].color}30, transparent)`,
                border: `2px solid ${skillCategories[activeCategory].color}50`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `0 0 60px ${skillCategories[activeCategory].color}40, inset 0 0 30px ${skillCategories[activeCategory].color}20`,
              }}
            >
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                {(() => {
                  const IconComponent = skillCategories[activeCategory].icon;
                  return <IconComponent size={40} style={{ color: skillCategories[activeCategory].color }} />;
                })()}
              </motion.div>
            </motion.div>

            {/* Center Label */}
            <motion.div
              key={`label-${activeCategory}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                position: "absolute",
                top: "calc(50% + 70px)",
                textAlign: "center",
              }}
            >
              <p
                style={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: skillCategories[activeCategory].color,
                  letterSpacing: "2px",
                }}
              >
                {skillCategories[activeCategory].title.toUpperCase()}
              </p>
            </motion.div>

            {/* Orbit Rings - Bold and Bright */}
            {[140, 190].map((radius, ringIndex) => (
              <motion.div
                key={radius}
                animate={{ rotate: ringIndex % 2 === 0 ? 360 : -360 }}
                transition={{
                  duration: 40 + ringIndex * 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                  borderRadius: "50%",
                  border: `2px solid ${skillCategories[activeCategory].color}40`,
                  boxShadow: `
                    0 0 20px ${skillCategories[activeCategory].color}20,
                    inset 0 0 20px ${skillCategories[activeCategory].color}10
                  `,
                }}
              />
            ))}

            {/* Decorative Outer Ring */}
            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                duration: 60,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                position: "absolute",
                width: "480px",
                height: "480px",
                borderRadius: "50%",
                border: `1px dashed ${skillCategories[activeCategory].color}30`,
              }}
            />

            {/* Glowing Dots on Orbits */}
            {[140, 190].map((radius, ringIndex) => (
              <motion.div
                key={`glow-${radius}`}
                animate={{ rotate: ringIndex % 2 === 0 ? 360 : -360 }}
                transition={{
                  duration: 10 + ringIndex * 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                style={{
                  position: "absolute",
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "-4px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    background: skillCategories[activeCategory].color,
                    boxShadow: `0 0 15px ${skillCategories[activeCategory].color}, 0 0 30px ${skillCategories[activeCategory].color}80`,
                  }}
                />
              </motion.div>
            ))}

            {/* Orbiting Skill Icons - From Selected Category */}
            {skillCategories[activeCategory].skills.map((skill, index) => {
              const totalSkills = skillCategories[activeCategory].skills.length;
              const angleOffset = (index / totalSkills) * 360; // Evenly distributed around circle
              const radius = index % 2 === 0 ? 140 : 190; // Alternating radius
              const SkillIcon = skill.icon;
              const duration = 25 + (index % 3) * 5; // Varying speeds
              const direction = index % 2 === 0 ? 1 : -1; // Alternating directions

              return (
                <motion.div
                  key={`${activeCategory}-${skill.name}`}
                  initial={{ opacity: 0, scale: 0, rotate: angleOffset }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: angleOffset + 360 * direction,
                  }}
                  exit={{ opacity: 0, scale: 0 }}
                  transition={{
                    opacity: { duration: 0.4, delay: index * 0.1 },
                    scale: { duration: 0.4, delay: index * 0.1 },
                    rotate: {
                      duration: duration,
                      repeat: Infinity,
                      ease: "linear",
                    },
                  }}
                  style={{
                    position: "absolute",
                    width: `${radius * 2}px`,
                    height: `${radius * 2}px`,
                  }}
                >
                  {/* Icon Container - Bold and Bright */}
                  <motion.div
                    whileHover={{ scale: 1.3 }}
                    initial={{ rotate: -angleOffset }}
                    animate={{ rotate: -angleOffset - 360 * direction }}
                    transition={{
                      rotate: {
                        duration: duration,
                        repeat: Infinity,
                        ease: "linear",
                      },
                      scale: { duration: 0.2 },
                    }}
                    onMouseEnter={() => setCursorVariant && setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant && setCursorVariant("default")}
                    style={{
                      position: "absolute",
                      top: "0",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "60px",
                      height: "60px",
                      borderRadius: "16px",
                      background: `linear-gradient(135deg, ${skillCategories[activeCategory].color}25, rgba(10, 10, 15, 0.95))`,
                      border: `2px solid ${skillCategories[activeCategory].color}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      boxShadow: `0 0 20px ${skillCategories[activeCategory].color}60, 0 0 40px ${skillCategories[activeCategory].color}30, inset 0 0 15px ${skillCategories[activeCategory].color}20`,
                    }}
                  >
                    <SkillIcon
                      size={28}
                      style={{
                        color: skillCategories[activeCategory].color,
                        filter: `drop-shadow(0 0 8px ${skillCategories[activeCategory].color})`,
                      }}
                    />
                  </motion.div>
                </motion.div>
              );
            })}

            {/* Floating Particles */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
                style={{
                  position: "absolute",
                  width: "4px",
                  height: "4px",
                  borderRadius: "50%",
                  background: skillCategories[activeCategory].color,
                  top: `${20 + Math.random() * 60}%`,
                  left: `${20 + Math.random() * 60}%`,
                  boxShadow: `0 0 10px ${skillCategories[activeCategory].color}`,
                }}
              />
            ))}
          </motion.div>

          {/* Right: Category Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {skillCategories.map((category, catIndex) => {
              const isActive = activeCategory === catIndex;
              const CategoryIcon = category.icon;

              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + catIndex * 0.1 }}
                  onClick={() => setActiveCategory(catIndex)}
                  onMouseEnter={() => setCursorVariant && setCursorVariant("hover")}
                  onMouseLeave={() => setCursorVariant && setCursorVariant("default")}
                  style={{
                    padding: isActive ? "24px" : "20px",
                    borderRadius: "16px",
                    background: isActive
                      ? `linear-gradient(135deg, ${category.color}15, rgba(10, 10, 15, 0.9))`
                      : "rgba(22, 22, 29, 0.5)",
                    border: `1px solid ${isActive ? category.color + "50" : "rgba(255, 255, 255, 0.05)"}`,
                    cursor: "pointer",
                    transition: "all 0.4s ease",
                    boxShadow: isActive ? `0 10px 40px ${category.color}20` : "none",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "16px",
                      marginBottom: isActive ? "20px" : "0",
                    }}
                  >
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "12px",
                        background: `${category.color}20`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <CategoryIcon size={24} style={{ color: category.color }} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: isActive ? category.color : "#fff",
                          marginBottom: "4px",
                        }}
                      >
                        {category.title}
                      </h3>
                      <p
                        style={{
                          fontSize: "13px",
                          color: "rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        {category.subtitle}
                      </p>
                    </div>

                    {/* Arrow Indicator */}
                    <motion.div
                      animate={{ rotate: isActive ? 90 : 0 }}
                      style={{
                        marginLeft: "auto",
                        color: isActive ? category.color : "rgba(255, 255, 255, 0.3)",
                      }}
                    >
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M9 18l6-6-6-6" />
                      </svg>
                    </motion.div>
                  </div>

                  {/* Skills List - Expandable */}
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: isActive ? "auto" : 0,
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ overflow: "hidden" }}
                  >
                    <div
                      style={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "12px",
                      }}
                    >
                      {category.skills.map((skill, skillIndex) => {
                        const SkillIcon = skill.icon;

                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: skillIndex * 0.05 }}
                            whileHover={{
                              background: `${category.color}15`,
                              borderColor: `${category.color}30`,
                            }}
                            style={{
                              padding: "12px",
                              borderRadius: "10px",
                              background: "rgba(255, 255, 255, 0.03)",
                              border: "1px solid transparent",
                              transition: "all 0.3s ease",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "8px",
                              }}
                            >
                              <SkillIcon size={16} style={{ color: category.color }} />
                              <span
                                style={{
                                  fontSize: "13px",
                                  color: "#fff",
                                  fontWeight: "500",
                                }}
                              >
                                {skill.name}
                              </span>
                              <span
                                style={{
                                  marginLeft: "auto",
                                  fontSize: "12px",
                                  color: category.color,
                                  fontWeight: "600",
                                }}
                              >
                                {skill.level}%
                              </span>
                            </div>

                            {/* Progress Bar */}
                            <div
                              style={{
                                height: "4px",
                                background: "rgba(255, 255, 255, 0.1)",
                                borderRadius: "2px",
                                overflow: "hidden",
                              }}
                            >
                              <motion.div
                                initial={{ width: 0 }}
                                animate={isActive ? { width: `${skill.level}%` } : { width: 0 }}
                                transition={{
                                  duration: 0.8,
                                  delay: skillIndex * 0.1,
                                  ease: "easeOut",
                                }}
                                style={{
                                  height: "100%",
                                  background: `linear-gradient(90deg, ${category.color}, ${category.color}80)`,
                                  borderRadius: "2px",
                                  boxShadow: `0 0 10px ${category.color}50`,
                                }}
                              />
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Bottom: Tech Stack Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: "12px",
              letterSpacing: "3px",
              color: "rgba(255, 255, 255, 0.4)",
              marginBottom: "24px",
            }}
          >
            TECHNOLOGIES I WORK WITH
          </p>

          {/* Marquee Container */}
          <div
            style={{
              overflow: "hidden",
              maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
              WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)",
            }}
          >
            <motion.div
              animate={{ x: [0, -1200] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                display: "flex",
                gap: "24px",
                width: "fit-content",
              }}
            >
              {[...techStack, ...techStack].map((tech, index) => {
                const TechIcon = tech.icon;
                return (
                  <motion.div
                    key={`${tech.name}-${index}`}
                    whileHover={{ scale: 1.1, y: -5 }}
                    onMouseEnter={() => setCursorVariant && setCursorVariant("hover")}
                    onMouseLeave={() => setCursorVariant && setCursorVariant("default")}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      padding: "12px 20px",
                      borderRadius: "12px",
                      background: "rgba(22, 22, 29, 0.6)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      flexShrink: 0,
                    }}
                  >
                    <TechIcon size={20} style={{ color: "#00fff5" }} />
                    <span
                      style={{
                        fontSize: "14px",
                        color: "rgba(255, 255, 255, 0.8)",
                        fontWeight: "500",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {tech.name}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background Effects */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            position: "absolute",
            top: "20%",
            left: "-10%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: `radial-gradient(circle, ${skillCategories[activeCategory].color}30, transparent 70%)`,
            filter: "blur(60px)",
          }}
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{ duration: 8, repeat: Infinity }}
          style={{
            position: "absolute",
            bottom: "20%",
            right: "-10%",
            width: "400px",
            height: "400px",
            borderRadius: "50%",
            background: "radial-gradient(circle, #ff00ff30, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>

      {/* CSS for responsive grid */}
      <style>{`
        @media (max-width: 900px) {
          .skills-main-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Skills;
