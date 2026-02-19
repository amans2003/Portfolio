import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const technologies = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js/Express",
    "MongoDB/MySQL",
    "ReactNative/Flutter",
    "Firebase/Supabase",
  ];

  return (
    <section
      id="about"
      ref={ref}
      style={{
        minHeight: "100vh",
        padding: "120px 24px",
        background: "linear-gradient(180deg, transparent, rgba(139, 92, 246, 0.03), transparent)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "60px" }}
        >
          <span className="section-label">MY PORTFOLIO</span>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
        >
          {/* Left - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p
              style={{
                fontSize: "17px",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: 1.9,
                marginBottom: "24px",
              }}
            >
              Greetings! I'm <span style={{ color: "#00fff5", fontWeight: "600" }}>Aman Singh</span>, a
              passionate Full Stack Developer currently working as a Software Developer at
              <span style={{ color: "#8b5cf6", fontWeight: "600" }}> Holstein</span>. My expertise
              lies in crafting modern, full-stack web applications using the MERN stack and cutting edge
              technologies.
            </p>

            <p
              style={{
                fontSize: "17px",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: 1.9,
                marginBottom: "24px",
              }}
            >
              Currently working on my thesis focusing on{" "}
              <span style={{ color: "#fff" }}>Deep Learning algorithms visualization</span>, I combine my love
              for clean code with creative problem-solving to build experiences that are both functional and
              beautiful.
            </p>

            <p
              style={{
                fontSize: "17px",
                color: "rgba(255, 255, 255, 0.7)",
                lineHeight: 1.9,
                marginBottom: "32px",
              }}
            >
              I am enthusiastic about exploring new opportunities that challenge and expand my skills. The
              prospect of working in an environment that fosters continuous learning aligns with my belief
              that there is always room for improvement.
            </p>

            <p
              style={{
                fontSize: "15px",
                color: "rgba(255, 255, 255, 0.5)",
                marginBottom: "16px",
              }}
            >
              Over the time I've specialized in many technologies:
            </p>

            {/* Tech List */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "12px",
              }}
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    color: "rgba(255, 255, 255, 0.8)",
                    fontSize: "14px",
                  }}
                >
                  <span style={{ color: "#00fff5" }}>▹</span>
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "350px",
                height: "420px",
              }}
            >
              {/* Main Image Container */}
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: "20px",
                  background: "linear-gradient(145deg, rgba(22, 22, 29, 0.9), rgba(10, 10, 15, 0.95))",
                  border: "1px solid rgba(255, 255, 255, 0.08)",
                  overflow: "hidden",
                }}
              >
                {/* Gradient Overlay */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "50%",
                    background: "linear-gradient(180deg, rgba(0, 255, 245, 0.1), transparent)",
                  }}
                />

                {/* Placeholder Content */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "40px",
                  }}
                >
                  <span
                    style={{
                      fontSize: "100px",
                      fontWeight: "bold",
                      background: "linear-gradient(135deg, rgba(0, 255, 245, 0.3), rgba(139, 92, 246, 0.3))",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    AS
                  </span>

                  {/* Code Decoration */}
                  <div
                    style={{
                      position: "absolute",
                      bottom: "30px",
                      left: "30px",
                      right: "30px",
                      background: "rgba(0, 0, 0, 0.5)",
                      borderRadius: "10px",
                      padding: "16px",
                      fontFamily: "monospace",
                      fontSize: "13px",
                    }}
                  >
                    <p>
                      <span style={{ color: "#ff00ff" }}>const</span>{" "}
                      <span style={{ color: "#00fff5" }}>developer</span> = {"{"}
                    </p>
                    <p style={{ paddingLeft: "16px" }}>
                      <span style={{ color: "rgba(255,255,255,0.5)" }}>passion:</span>{" "}
                      <span style={{ color: "#4ade80" }}>"building"</span>,
                    </p>
                    <p style={{ paddingLeft: "16px" }}>
                      <span style={{ color: "rgba(255,255,255,0.5)" }}>focus:</span>{" "}
                      <span style={{ color: "#4ade80" }}>"innovation"</span>
                    </p>
                    <p>{"}"}</p>
                  </div>
                </div>
              </div>

              {/* Decorative Border */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  left: "20px",
                  right: "-20px",
                  bottom: "-20px",
                  border: "2px solid rgba(0, 255, 245, 0.3)",
                  borderRadius: "20px",
                  zIndex: -1,
                }}
              />

              {/* Floating Badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                style={{
                  position: "absolute",
                  top: "-20px",
                  right: "-20px",
                  padding: "12px 20px",
                  background: "linear-gradient(135deg, #00fff5, #8b5cf6)",
                  borderRadius: "10px",
                  fontWeight: "600",
                  fontSize: "14px",
                  color: "#0a0a0f",
                }}
              >
                1+ Years Exp
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "24px",
            marginTop: "80px",
          }}
        >
          {[
            { number: "10+", label: "Projects Completed" },
            { number: "2+", label: "Years Experience" },
            { number: "15+", label: "Technologies" },
            { number: "100%", label: "Problem Solver" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1 }}
              style={{
                textAlign: "center",
                padding: "30px 20px",
                background: "rgba(255, 255, 255, 0.02)",
                border: "1px solid rgba(255, 255, 255, 0.05)",
                borderRadius: "16px",
              }}
            >
              <p
                style={{
                  fontSize: "42px",
                  fontWeight: "700",
                  background: "linear-gradient(135deg, #00fff5, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: "8px",
                }}
              >
                {stat.number}
              </p>
              <p
                style={{
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.5)",
                }}
              >
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default About;
