import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FaGithub, FaLinkedinIn, FaFacebookF, FaCodepen } from "react-icons/fa";
import { HiOutlineMail, HiOutlineLocationMarker } from "react-icons/hi";
import { FiSend } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const ref = useRef(null);
  const formRef = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      toast.success("🎉 Message sent successfully! I'll get back to you soon.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        style: {
          background: "linear-gradient(145deg, rgba(22, 22, 30, 0.95), rgba(12, 12, 18, 0.98))",
          border: "1px solid rgba(74, 222, 128, 0.3)",
          borderRadius: "12px",
          color: "#fff",
        },
        progressStyle: {
          background: "linear-gradient(90deg, #00fff5, #4ade80)",
        },
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      toast.error("❌ Failed to send message. Please try again.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        style: {
          background: "linear-gradient(145deg, rgba(22, 22, 30, 0.95), rgba(12, 12, 18, 0.98))",
          border: "1px solid rgba(248, 113, 113, 0.3)",
          borderRadius: "12px",
          color: "#fff",
        },
        progressStyle: {
          background: "linear-gradient(90deg, #f87171, #ef4444)",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { name: "GitHub", url: "https://github.com/SarwarMorshad", icon: FaGithub },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/sarwarmorshad/", icon: FaLinkedinIn },
    { name: "Facebook", url: "https://www.facebook.com/smorshad", icon: FaFacebookF },
    { name: "CodePen", url: "https://codepen.io/Sarwar-Morshad", icon: FaCodepen },
  ];

  const contactInfo = [
    {
      label: "Email",
      value: "dev.sarwarmorshad@gmail.com",
      href: "mailto:dev.sarwarmorshad@gmail.com",
      icon: HiOutlineMail,
    },
    {
      label: "Location",
      value: "Berlin, Germany",
      href: null,
      icon: HiOutlineLocationMarker,
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        minHeight: "100vh",
        padding: "120px 24px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: "center", marginBottom: "60px" }}
        >
          <span className="section-label">CONTACT</span>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 48px)",
              fontWeight: "700",
              marginTop: "20px",
              marginBottom: "16px",
            }}
          >
            Get In Touch
          </h2>
          <p
            style={{
              fontSize: "17px",
              color: "rgba(255, 255, 255, 0.6)",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            I'm open for new opportunities – especially ambitious or large projects. Whether you have a
            question or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        {/* Content Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* Left - Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              background: "linear-gradient(145deg, rgba(22, 22, 29, 0.8), rgba(10, 10, 15, 0.9))",
              border: "1px solid rgba(255, 255, 255, 0.05)",
              borderRadius: "24px",
              padding: "40px",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "600",
                marginBottom: "32px",
                color: "#fff",
              }}
            >
              Send me a message
            </h3>

            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.6)",
                  fontWeight: "500",
                }}
              >
                Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div style={{ marginBottom: "24px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.6)",
                  fontWeight: "500",
                }}
              >
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div style={{ marginBottom: "32px" }}>
              <label
                style={{
                  display: "block",
                  marginBottom: "10px",
                  fontSize: "14px",
                  color: "rgba(255, 255, 255, 0.6)",
                  fontWeight: "500",
                }}
              >
                Your Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Tell me about your project..."
                style={{ resize: "none" }}
              />
            </div>

            <button type="submit" disabled={isSubmitting} className="btn-primary" style={{ width: "100%" }}>
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send Message</span>
                  <FiSend size={18} />
                </>
              )}
            </button>
          </motion.form>

          {/* Right - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Contact Details */}
            <div style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  fontSize: "24px",
                  fontWeight: "600",
                  marginBottom: "24px",
                  color: "#fff",
                }}
              >
                Contact Details
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  const content = (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "16px",
                        color: "rgba(255, 255, 255, 0.7)",
                        transition: "color 0.3s",
                      }}
                    >
                      <div
                        style={{
                          width: "52px",
                          height: "52px",
                          borderRadius: "14px",
                          background: "rgba(255, 255, 255, 0.03)",
                          border: "1px solid rgba(255, 255, 255, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <IconComponent size={22} />
                      </div>
                      <div>
                        <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)", marginBottom: "4px" }}>
                          {info.label}
                        </p>
                        <p style={{ fontSize: "16px", fontWeight: "500" }}>{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.href ? (
                    <a
                      key={info.label}
                      href={info.href}
                      style={{ textDecoration: "none", color: "inherit" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = "#00fff5";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = "rgba(255, 255, 255, 0.7)";
                      }}
                    >
                      {content}
                    </a>
                  ) : (
                    <div key={info.label}>{content}</div>
                  );
                })}
              </div>
            </div>

            {/* Social Links */}
            <div style={{ marginBottom: "40px" }}>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: "600",
                  marginBottom: "20px",
                  color: "#fff",
                }}
              >
                Follow Me
              </h3>

              <div style={{ display: "flex", gap: "12px" }}>
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      style={{
                        width: "52px",
                        height: "52px",
                        borderRadius: "14px",
                        background: "rgba(255, 255, 255, 0.03)",
                        border: "1px solid rgba(255, 255, 255, 0.08)",
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
                        e.currentTarget.style.transform = "translateY(-4px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                        e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)";
                        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.08)";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                    >
                      <IconComponent size={22} />
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              style={{
                background: "linear-gradient(145deg, rgba(0, 255, 245, 0.05), rgba(139, 92, 246, 0.05))",
                border: "1px solid rgba(0, 255, 245, 0.2)",
                borderRadius: "16px",
                padding: "24px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    width: "10px",
                    height: "10px",
                    borderRadius: "50%",
                    background: "#4ade80",
                    boxShadow: "0 0 12px #4ade80",
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
                <span
                  style={{
                    color: "#4ade80",
                    fontWeight: "600",
                    fontSize: "15px",
                  }}
                >
                  Available for work
                </span>
              </div>
              <p
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                Currently looking for new opportunities. Let's build something amazing together!
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          style={{
            marginTop: "100px",
            paddingTop: "40px",
            borderTop: "1px solid rgba(255, 255, 255, 0.05)",
            textAlign: "center",
          }}
        >
          <p
            style={{
              color: "rgba(255, 255, 255, 0.4)",
              fontSize: "14px",
            }}
          >
            © {new Date().getFullYear()} Sarwar Morshad.
          </p>
        </motion.div>
      </div>

      {/* Toast Container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </section>
  );
}

export default Contact;
