import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import {
    FaGithub,
    FaExternalLinkAlt,
    FaReact,
    FaNodeJs,
    FaDatabase,
    FaStripe,
    FaFire,
    FaTimes,
} from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiVite, SiJsonwebtokens, SiFirebase } from "react-icons/si";

function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024);
        };
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    const techIcons = {
        React: FaReact,
        "Node.js": FaNodeJs,
        MongoDB: SiMongodb,
        Stripe: FaStripe,
        JWT: SiJsonwebtokens,
        Vite: SiVite,
        EmailJS: FaFire,
        "Tailwind CSS": SiTailwindcss,
        Firebase: SiFirebase,
        "TMDB API": FaDatabase,
    };

    const projects = [
        {
            title: "Book Now",
            subtitle: "Travel Booking Platform",
            description:
                "A comprehensive travel booking platform with multi-role systems (User, Vendor, Admin), Stripe payment integration, and JWT authentication.",
            features: [
                "Multi-role authentication",
                "Stripe payment integration",
                "Real-time booking",
                "Admin dashboard",
                "JWT security",
                "Modern UI",
            ],
            tech: ["React", "Node.js", "MongoDB", "Stripe", "JWT"],
            github: "https://github.com/amans2003/PingMe_ChatApp",
            live: "https://pingme-chatapp-9dki.onrender.com/login",
            image: "/assets/Ping.png",
            color: "#00fff5",
        },
        {
            title: "Bocado",
            subtitle: "Restaurant Website",
            description:
                "Spanish tapas restaurant website featuring a complete reservation system using EmailJS, custom branding and elegant animations.",
            features: [
                "Table reservation",
                "EmailJS integration",
                "Custom branding",
                "Smooth animations",
                "Interactive menu",
                "Responsive design",
            ],
            tech: ["React", "Vite", "EmailJS", "Tailwind CSS"],
            github: "https://github.com/SarwarMorshad/bocado-berlin",
            live: "https://bocadoberlin.de/",
            image: "https://i.postimg.cc/P54q2g8W/bocado.png",
            color: "#a7c957",
        },
        {
            title: "Movie Matrix",
            subtitle: "Movie Database App",
            description:
                "A feature-rich movie database application with Firebase authentication, CRUD operations, and advanced search filtering.",
            features: [
                "Firebase auth",
                "CRUD operations",
                "Search & filter",
                "Movie ratings",
                "Watchlist",
                "TMDB API",
            ],
            tech: ["React", "Firebase", "Tailwind CSS", "TMDB API"],
            github: "https://github.com/SarwarMorshad/movie-matrix-client",
            live: "https://movie-matrix-bb82a.web.app/",
            image: "https://i.postimg.cc/MGHztvwX/movie.png",
            color: "#8b5cf6",
        },
        {
            title: "Warm Paws",
            subtitle: "Pet Adoption Platform",
            description:
                "A heartwarming pet adoption platform connecting loving homes with pets in need with user authentication and modern interface.",
            features: [
                "Pet listings",
                "Adoption system",
                "User profiles",
                "Search & filter",
                "Favorites",
                "Admin panel",
            ],
            tech: ["React", "Firebase", "Node.js", "MongoDB"],
            github: "https://github.com/SarwarMorshad/warm-paws",
            live: "https://warm-paws-932c4.web.app/",
            image: "https://i.postimg.cc/Kv1rX55d/warmpaws.png",
            color: "#00fff5",
        },
    ];

    // Popup Component - Fixed position to stay on screen
    const ProjectPopup = ({ project, isEven, cardRef }) => {
        const [popupStyle, setPopupStyle] = useState({});

        useEffect(() => {
            if (cardRef?.current) {
                const cardRect = cardRef.current.getBoundingClientRect();
                const popupWidth = 320;
                const popupHeight = 480;
                const padding = 20;

                let left, top;

                // Horizontal position
                if (isEven) {
                    // Card is on left, popup on right side of card
                    left = cardRect.right - popupWidth - padding;
                } else {
                    // Card is on right, popup on left side of card
                    left = cardRect.left + padding;
                }

                // Keep popup within screen horizontally
                if (left < padding) left = padding;
                if (left + popupWidth > window.innerWidth - padding) {
                    left = window.innerWidth - popupWidth - padding;
                }

                // Vertical position - center on card
                top = cardRect.top + (cardRect.height - popupHeight) / 2;

                // Keep popup within screen vertically
                if (top < padding) top = padding;
                if (top + popupHeight > window.innerHeight - padding) {
                    top = window.innerHeight - popupHeight - padding;
                }

                setPopupStyle({ left, top });
            }
        }, [cardRef, isEven]);

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                style={{
                    position: "fixed",
                    top: popupStyle.top,
                    left: popupStyle.left,
                    width: "320px",
                    background: "linear-gradient(145deg, rgba(22, 22, 29, 0.99), rgba(10, 10, 15, 1))",
                    border: `1px solid ${project.color}50`,
                    borderRadius: "16px",
                    boxShadow: `0 25px 80px rgba(0,0,0,0.6), 0 0 40px ${project.color}25`,
                    zIndex: 1000,
                    overflow: "hidden",
                    backdropFilter: "blur(20px)",
                }}
            >
                {/* Popup Image */}
                <div style={{ position: "relative", height: "120px", flexShrink: 0 }}>
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                    <div
                        style={{
                            position: "absolute",
                            inset: 0,
                            background: `linear-gradient(to top, rgba(10, 10, 15, 1), transparent 60%)`,
                        }}
                    />
                    <div style={{ position: "absolute", bottom: "8px", left: "12px", right: "12px" }}>
                        <p
                            style={{
                                color: project.color,
                                fontSize: "10px",
                                fontWeight: "600",
                                marginBottom: "2px",
                                letterSpacing: "0.5px",
                            }}
                        >
                            {project.subtitle.toUpperCase()}
                        </p>
                        <h3 style={{ fontSize: "18px", fontWeight: "700", color: "#fff" }}>{project.title}</h3>
                    </div>
                </div>

                {/* Popup Content */}
                <div style={{ padding: "12px" }}>
                    {/* Description */}
                    <p
                        style={{
                            fontSize: "12px",
                            color: "rgba(255,255,255,0.7)",
                            lineHeight: 1.5,
                            marginBottom: "12px",
                        }}
                    >
                        {project.description}
                    </p>

                    {/* Features */}
                    <div style={{ marginBottom: "12px" }}>
                        <h4
                            style={{
                                fontSize: "12px",
                                fontWeight: "600",
                                color: project.color,
                                marginBottom: "8px",
                                letterSpacing: "1px",
                            }}
                        >
                            KEY FEATURES
                        </h4>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4px" }}>
                            {project.features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        padding: "5px 6px",
                                        background: "rgba(255,255,255,0.03)",
                                        borderRadius: "4px",
                                        fontSize: "10px",
                                        color: "rgba(255,255,255,0.85)",
                                    }}
                                >
                                    <span
                                        style={{
                                            width: "4px",
                                            height: "4px",
                                            borderRadius: "50%",
                                            background: project.color,
                                            flexShrink: 0,
                                        }}
                                    />
                                    {feature}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Tech Stack */}
                    <div style={{ marginBottom: "12px" }}>
                        <h4
                            style={{
                                fontSize: "10px",
                                fontWeight: "600",
                                color: project.color,
                                marginBottom: "8px",
                                letterSpacing: "1px",
                            }}
                        >
                            TECH STACK
                        </h4>
                        <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                            {project.tech.map((tech) => {
                                const IconComponent = techIcons[tech] || FaDatabase;
                                return (
                                    <div
                                        key={tech}
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "4px",
                                            padding: "4px 8px",
                                            background: `${project.color}15`,
                                            border: `1px solid ${project.color}30`,
                                            borderRadius: "4px",
                                        }}
                                    >
                                        <IconComponent size={10} style={{ color: project.color }} />
                                        <span style={{ fontSize: "10px", color: "#fff", fontWeight: "500" }}>{tech}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div style={{ display: "flex", gap: "8px" }}>
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "6px",
                                padding: "10px",
                                background: `linear-gradient(135deg, ${project.color}, #8b5cf6)`,
                                borderRadius: "8px",
                                color: "#0a0a0f",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontWeight: "600",
                            }}
                        >
                            <FaExternalLinkAlt size={10} />
                            Live Demo
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "6px",
                                padding: "10px",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.15)",
                                borderRadius: "8px",
                                color: "#fff",
                                textDecoration: "none",
                                fontSize: "12px",
                                fontWeight: "600",
                            }}
                        >
                            <FaGithub size={12} />
                            Source
                        </a>
                    </div>
                </div>
            </motion.div>
        );
    };

    // Mobile Modal Component
    const MobileModal = ({ project, onClose }) => (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0, 0, 0, 0.95)",
                backdropFilter: "blur(10px)",
                zIndex: 100,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "16px",
            }}
        >
            <motion.div
                initial={{ scale: 0.9, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 50 }}
                onClick={(e) => e.stopPropagation()}
                style={{
                    background: "linear-gradient(145deg, #16161d, #0a0a0f)",
                    border: `1px solid ${project.color}30`,
                    borderRadius: "20px",
                    width: "100%",
                    maxWidth: "500px",
                    maxHeight: "85vh",
                    overflow: "auto",
                }}
            >
                <div style={{ position: "relative", height: "180px" }}>
                    <img
                        src={project.image}
                        alt={project.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "20px 20px 0 0" }}
                    />
                    <button
                        onClick={onClose}
                        style={{
                            position: "absolute",
                            top: "12px",
                            right: "12px",
                            width: "36px",
                            height: "36px",
                            borderRadius: "50%",
                            background: "rgba(0,0,0,0.7)",
                            border: "none",
                            color: "#fff",
                            cursor: "pointer",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                        }}
                    >
                        <FaTimes size={16} />
                    </button>
                </div>

                <div style={{ padding: "20px" }}>
                    <p style={{ color: project.color, fontSize: "12px", fontWeight: "600", marginBottom: "4px" }}>
                        {project.subtitle}
                    </p>
                    <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#fff", marginBottom: "12px" }}>
                        {project.title}
                    </h3>
                    <p
                        style={{
                            fontSize: "14px",
                            color: "rgba(255,255,255,0.6)",
                            lineHeight: 1.6,
                            marginBottom: "16px",
                        }}
                    >
                        {project.description}
                    </p>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px", marginBottom: "16px" }}>
                        {project.features.map((feature, idx) => (
                            <div
                                key={idx}
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: "8px",
                                    fontSize: "12px",
                                    color: "rgba(255,255,255,0.7)",
                                }}
                            >
                                <span
                                    style={{ width: "6px", height: "6px", borderRadius: "50%", background: project.color }}
                                />
                                {feature}
                            </div>
                        ))}
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "20px" }}>
                        {project.tech.map((tech) => {
                            const Icon = techIcons[tech] || FaDatabase;
                            return (
                                <span
                                    key={tech}
                                    style={{
                                        display: "flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        padding: "6px 12px",
                                        background: `${project.color}15`,
                                        border: `1px solid ${project.color}30`,
                                        borderRadius: "6px",
                                        fontSize: "11px",
                                        color: project.color,
                                    }}
                                >
                                    <Icon size={12} />
                                    {tech}
                                </span>
                            );
                        })}
                    </div>

                    <div style={{ display: "flex", gap: "12px" }}>
                        <a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
                                padding: "12px",
                                background: `linear-gradient(135deg, ${project.color}, #8b5cf6)`,
                                borderRadius: "10px",
                                color: "#0a0a0f",
                                textDecoration: "none",
                                fontSize: "13px",
                                fontWeight: "600",
                            }}
                        >
                            <FaExternalLinkAlt size={12} />
                            Live Demo
                        </a>
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                flex: 1,
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: "8px",
                                padding: "12px",
                                background: "rgba(255,255,255,0.05)",
                                border: "1px solid rgba(255,255,255,0.1)",
                                borderRadius: "10px",
                                color: "#fff",
                                textDecoration: "none",
                                fontSize: "13px",
                                fontWeight: "600",
                            }}
                        >
                            <FaGithub size={14} />
                            Code
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );

    return (
        <section
            id="projects"
            ref={ref}
            style={{
                minHeight: "100vh",
                padding: "120px 24px",
                overflow: "visible",
            }}
        >
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: "60px", textAlign: "center" }}
                >
                    <span className="section-label">MY WORK</span>
                    <h2
                        style={{
                            fontSize: "clamp(32px, 5vw, 48px)",
                            fontWeight: "700",
                            marginTop: "20px",
                            marginBottom: "16px",
                        }}
                    >
                        Things I've Built
                    </h2>
                    <p
                        style={{
                            fontSize: "17px",
                            color: "rgba(255, 255, 255, 0.6)",
                            maxWidth: "500px",
                            margin: "0 auto",
                        }}
                    >
                        {isMobile
                            ? "Tap on any project to see more details."
                            : "Hover over any project to see more details."}
                    </p>
                </motion.div>

                {/* Projects - Zigzag Layout */}
                <div style={{ display: "flex", flexDirection: "column", gap: "80px" }}>
                    {projects.map((project, index) => {
                        const isEven = index % 2 === 0;
                        const isHovered = hoveredIndex === index;

                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 50 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.6, delay: index * 0.15 }}
                                style={{
                                    display: "flex",
                                    justifyContent: isEven ? "flex-start" : "flex-end",
                                }}
                            >
                                {/* Card Wrapper - Relative for popup positioning */}
                                <div
                                    ref={(el) => (cardRefs.current[index] = el)}
                                    style={{
                                        position: "relative",
                                        width: isMobile ? "100%" : "85%",
                                    }}
                                    onMouseEnter={() => !isMobile && setHoveredIndex(index)}
                                    onMouseLeave={() => !isMobile && setHoveredIndex(null)}
                                >
                                    {/* Project Card */}
                                    <div
                                        onClick={() => isMobile && setSelectedProject(project)}
                                        style={{
                                            display: "grid",
                                            gridTemplateColumns: isMobile ? "1fr" : isEven ? "1.1fr 1fr" : "1fr 1.1fr",
                                            gap: "24px",
                                            alignItems: "center",
                                            padding: "24px",
                                            background: isHovered
                                                ? `linear-gradient(145deg, ${project.color}10, rgba(10, 10, 15, 0.95))`
                                                : "linear-gradient(145deg, rgba(22, 22, 29, 0.7), rgba(10, 10, 15, 0.9))",
                                            border: isHovered
                                                ? `1px solid ${project.color}60`
                                                : "1px solid rgba(255, 255, 255, 0.08)",
                                            borderRadius: "20px",
                                            transition: "all 0.4s ease",
                                            cursor: isMobile ? "pointer" : "default",
                                            transform: isHovered ? "scale(1.02)" : "scale(1)",
                                            boxShadow: isHovered ? `0 10px 40px ${project.color}15` : "none",
                                        }}
                                    >
                                        {/* Project Image */}
                                        <div
                                            style={{
                                                order: isMobile ? 1 : isEven ? 1 : 2,
                                                position: "relative",
                                                aspectRatio: "16/10",
                                                borderRadius: "12px",
                                                overflow: "hidden",
                                            }}
                                        >
                                            <img
                                                src={project.image}
                                                alt={project.title}
                                                style={{
                                                    width: "100%",
                                                    height: "100%",
                                                    objectFit: "cover",
                                                    transition: "transform 0.5s ease",
                                                    transform: isHovered ? "scale(1.08)" : "scale(1)",
                                                }}
                                            />

                                            <span
                                                style={{
                                                    position: "absolute",
                                                    top: "10px",
                                                    left: "10px",
                                                    padding: "5px 10px",
                                                    background: "rgba(0,0,0,0.7)",
                                                    backdropFilter: "blur(10px)",
                                                    borderRadius: "5px",
                                                    fontSize: "11px",
                                                    fontWeight: "600",
                                                    color: project.color,
                                                }}
                                            >
                                                {String(index + 1).padStart(2, "0")}
                                            </span>

                                            {isMobile && (
                                                <div
                                                    style={{
                                                        position: "absolute",
                                                        bottom: "10px",
                                                        right: "10px",
                                                        padding: "5px 10px",
                                                        background: `${project.color}90`,
                                                        borderRadius: "15px",
                                                        fontSize: "10px",
                                                        fontWeight: "600",
                                                        color: "#0a0a0f",
                                                    }}
                                                >
                                                    Tap for details
                                                </div>
                                            )}
                                        </div>

                                        {/* Project Info */}
                                        <div
                                            style={{
                                                order: isMobile ? 2 : isEven ? 2 : 1,
                                                textAlign: isMobile ? "left" : isEven ? "left" : "right",
                                            }}
                                        >
                                            <p
                                                style={{
                                                    color: project.color,
                                                    fontSize: "13px",
                                                    fontWeight: "600",
                                                    marginBottom: "6px",
                                                }}
                                            >
                                                {project.subtitle}
                                            </p>

                                            <h3
                                                style={{
                                                    fontSize: "24px",
                                                    fontWeight: "700",
                                                    marginBottom: "10px",
                                                    color: "#fff",
                                                }}
                                            >
                                                {project.title}
                                            </h3>

                                            <p
                                                style={{
                                                    fontSize: "14px",
                                                    color: "rgba(255, 255, 255, 0.6)",
                                                    lineHeight: 1.7,
                                                    marginBottom: "16px",
                                                    display: "-webkit-box",
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: "vertical",
                                                    overflow: "hidden",
                                                }}
                                            >
                                                {project.description}
                                            </p>

                                            <div
                                                style={{
                                                    display: "flex",
                                                    flexWrap: "wrap",
                                                    gap: "8px",
                                                    marginBottom: "16px",
                                                    justifyContent: isMobile ? "flex-start" : isEven ? "flex-start" : "flex-end",
                                                }}
                                            >
                                                {project.tech.slice(0, 3).map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="tech-tag"
                                                        style={{ fontSize: "11px", padding: "4px 10px" }}
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.tech.length > 3 && (
                                                    <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>
                                                        +{project.tech.length - 3}
                                                    </span>
                                                )}
                                            </div>

                                            <div
                                                style={{
                                                    display: "flex",
                                                    gap: "12px",
                                                    justifyContent: isMobile ? "flex-start" : isEven ? "flex-start" : "flex-end",
                                                }}
                                            >
                                                <a
                                                    href={project.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    style={{
                                                        color: "rgba(255,255,255,0.6)",
                                                        transition: "color 0.3s",
                                                        display: "inline-flex",
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.color = project.color;
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                                                    }}
                                                >
                                                    <FaGithub size={20} />
                                                </a>
                                                <a
                                                    href={project.live}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    onClick={(e) => e.stopPropagation()}
                                                    style={{
                                                        color: "rgba(255,255,255,0.6)",
                                                        transition: "color 0.3s",
                                                        display: "inline-flex",
                                                    }}
                                                    onMouseEnter={(e) => {
                                                        e.currentTarget.style.color = project.color;
                                                    }}
                                                    onMouseLeave={(e) => {
                                                        e.currentTarget.style.color = "rgba(255,255,255,0.6)";
                                                    }}
                                                >
                                                    <FaExternalLinkAlt size={18} />
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Popup - Desktop Only - Fixed position to stay on screen */}
                                    {!isMobile && (
                                        <AnimatePresence>
                                            {isHovered && (
                                                <ProjectPopup
                                                    project={project}
                                                    isEven={isEven}
                                                    cardRef={{ current: cardRefs.current[index] }}
                                                />
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* View All Button */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.8 }}
                    style={{
                        textAlign: "center",
                        marginTop: "60px",
                    }}
                >
                    <a
                        href="https://github.com/SarwarMorshad"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary"
                        style={{ display: "inline-flex" }}
                    >
                        <span>View All Projects</span>
                        <FaGithub size={18} />
                    </a>
                </motion.div>
            </div>

            {/* Mobile Modal */}
            <AnimatePresence>
                {isMobile && selectedProject && (
                    <MobileModal project={selectedProject} onClose={() => setSelectedProject(null)} />
                )}
            </AnimatePresence>
        </section>
    );
}

export default Projects;
