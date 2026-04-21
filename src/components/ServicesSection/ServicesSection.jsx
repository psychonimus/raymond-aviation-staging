import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ServicesSection.css";
import { Link } from "react-router-dom";


gsap.registerPlugin(useGSAP, ScrollTrigger);

const services = [
  {
    id: "01",
    title: "Charter On-Demand",
    path: "/charter-on-demand",
    description:
      "Your Schedule, Our Wings, No Compromise. Experience the ultimate in global mobility.",
    image:
      "./assets/images/charter-on-demand.webp",
  },
  {
    id: "02",
    title: "Fractional Ownership",
    path: "/fractional-ownership",
    description:
      "The Power of Ownership. The Freedom of a Fleet. Why own just one jet or one helicopter when you can have access to the world's most advanced fleet.",
    image:
      "./assets/images/fractional-ownership.webp",
  },
  {
    id: "03",
    title: "Jet Card Programs (through our Affiliation) ",
    path: "/jet-card-program",
    description:
      "The Sky, Simplified. Unlock guaranteed access to a global fleet with a single card.",
    image:
      "/assets/images/affiliation.webp",
  },
  {
    id: "04",
    title: "Aircraft Management",
    path: "/aircraft-management",
    description:
      "Your Asset, Our Expertise, Seamless Performance. Professional aircraft management for the modern owner.",
    image:
      "./assets/images/aircraft-management.webp",
  },
  {
    id: "05",
    title: "Aircraft Sales & Acquisitions",
    path: "/aircraft-sales-and-aquisition",
    description:
      "Navigate the Global Skies with Certainty. Expertise in the acquisition and sale of world-class aircraft.",
    image:
      "./assets/images/aircraft-sales.webp",
  },
  {
    id: "06",
    title: "Empty Leg Flights",
    path: "/empty-leg-flights",
    description:
      "Luxury at the Speed of Opportunity. Experience the world of private aviation for up to 75% less.",
    image:
      "./assets/images/empty-leg-flights.webp",
  },
  // {
  //   id: "07",
  //   title: "Helicopter Services",
  //   description:
  //     "Experience the agility of helicopter travel through our flexible charter, fractional, and short-term leasing programs tailored for the fast paced world.",
  //   image:
  //     "/assets/images/helishare.webp",
  // },
  // {
  //   id: "08",
  //   title: "Empty Leg Flights",
  //   description:
  //     "Luxury at the Speed of Opportunity. Experience the world of private aviation for up to 75% less.",
  //   image:
  //     "/assets/images/empty-leg-flight.webp",
  // },
  // {
  //   id: "09",
  //   title: "Aircraft Maintenance",
  //   description:
  //     "Precision Maintenance for a Digital Age. Total technical support for fixed-wing and rotary aircraft.",
  //   image:
  //     "/assets/images/charter-maintenance.webp",
  // },
  // {
  //   id: "10",
  //   title: "Concierge & Flight Care Services",
  //   description:
  //     "The Art of the Perfect Journey. Luxury doesn't end when you land. From Michelin-starred sky-dining to secure ground logistics and global event access.",
  //   image:
  //     "/assets/images/Concierge-services.webp",
  // },
  // {
  //   id: "11",
  //   title: "Broker / Affiliate Partnership Programs",
  //   description:
  //     "Scale Your Business with a Global Fleet at Your Fingertips. Join the industry's most transparent and rewarding partnership network.",
  //   image:
  //     "https://images.unsplash.com/photo-1488085061387-422e29b40080?w=800&q=80",
  // },

];

const gridClasses = [
  "div1", "div2", "div3", "div4", "div5", "div6",
];

export default function ServicesSection() {
  const [cursor, setCursor] = useState({ x: -100, y: -100 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [cursorVisible, setCursorVisible] = useState(false);
  const sectionRef = useRef(null);

  useGSAP(() => {
    // Header Animation
    gsap.from(".services-header", {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });

    // Cards Stagger Animation
    const cards = gsap.utils.toArray(".service-card");
    gsap.from(cards, {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 60%",
        toggleActions: "play none none none"
      }
    });

  }, { scope: sectionRef });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursor({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>


      {/* Cursor follower */}
      <div
        className="cursor-follower"
        style={{
          left: cursor.x,
          top: cursor.y,
          opacity: cursorVisible ? 1 : 0,
        }}
      >
        <span>VIEW </span>
      </div>

      <section className="services-section" ref={sectionRef}>
        <div className="services-header">
          <div className="text-center">
            <p className="hero-eyebrow">What We Offer</p>
            <h2 className="hero-title" style={{color:"var(--primary)"}}>
              Our Services
            </h2>
          </div>

        </div>

        <div className="parent">
          {services.map((service, index) => (

            <div
              key={service.id}
              className={`service-card ${gridClasses[index]}`}
              onMouseEnter={() => {
                setHoveredCard(service.id);
                setCursorVisible(true);
              }}
              onMouseLeave={() => {
                setHoveredCard(null);
                setCursorVisible(false);
              }}
            >

              <Link to={service.path}>
                <div
                className="card-bg"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              <div className="card-gradient" />
              <div className="card-overlay" />

              <div className="card-content">
                <div className="card-number">{service.id}</div>
                <h3 className="card-title">{service.title}</h3>
                <div className="card-divider" />
                <p className="card-desc">{service.description}</p>
              </div>
              </Link>
            </div>

          ))}
        </div>
      </section>
    </>
  );
}