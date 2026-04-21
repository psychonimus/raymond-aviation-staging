import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import './CharterContent.css'

const tabs = [
  {
    id: "private",
    label: "Charter",
    images: ["./assets/images/charter-1.jpg", "./assets/images/charter-2.jpg", "./assets/images/charter-3.jpg", "./assets/images/charter-4.jpg"],
    heading: "Charter",
    body: [
      "Raymond Aviation offers a range of tailored charter solutions across aircraft, helicopters, and yachts, designed for business travel, leisure journeys, special events, and VVIP movements. Each experience is crafted to provide the flexibility to choose the right mode of travel, while ensuring efficiency, comfort, and seamless execution.",
      
    ],
    stats: [{ label: "depending on passengers capacity", value: "Flexible Charters" }, { label: "with multiple departure points", value: "Curated Journeys" }, { label: "at origin and destination", value: "Concierge Services" }],
  },
  {
    id: "group",
    label: "Air Ambulance",
    images: ["./assets/images/air-ambulence.webp", "./assets/images/air-ambulance.webp", "./assets/images/charter-maintenance.webp"],
    heading: "Air Ambulance",
    body: [
      "When health demands urgent response, time becomes the most critical factor. Raymond Aviation provides air ambulance services, configured for patient care, staffed with qualified medical crew, and cleared for priority departure at the shortest possible notice.",
      
    ],
    stats: [{ label: "life support systems and qualified support staff", value: "Charter equipped with " }, { label: "ground ambulances and attending physicians", value: "Coordination with hospitals" }, { label: "for urgent domestic and international patient transfers", value: "Worldwide Medical evacuation" }],
  },
  {
    id: "group2",
    label: "Empty Leg",
    images: ["./assets/images/empty-leg-flight.webp", "./assets/images/empty-leg-flight-2.webp", "./assets/images/empty-leg-3.webp"],
    heading: "Empty Leg Charter",
    body: [
      "An empty leg is one of best kept secrets. When an aircraft completes a one-way journey, it must reposition to its base or its next assignment - empty. Raymond Aviation transforms these sectors into value, enabling operators to unlock additional revenue while offering clients access to private charter at significantly reduced rates.",
      
    ],
    stats: [{ label: "Access private charters at preferential pricing on repositioning flights", value: "LUXURY AT THE SPEED OF OPPORTUNITY" }, { label: "Identical aircraft, crew, and onboard experience, without compromise", value: "SAME AIRCRAFT, SAME EXPERIENCE" }, { label: "Dynamic availability, requiring prompt confirmation", value: "TIME-SENSITIVE AND LIMITED" }],
  },
];

export default function CharterContent() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const imagePanelRef = useRef(null);
  const contentRef = useRef(null);
  const statsRef = useRef([]);
  const prevActive = useRef(0);

  const switchTab = (idx) => {
    if (idx === active || animating) return;
    setAnimating(true);

    const imgPanelEl = imagePanelRef.current;
    const contentEl = contentRef.current;

    // Outgoing animation
    gsap.timeline()
      .to(imgPanelEl, { scale: 1.05, opacity: 0, duration: 0.45, ease: "power2.in" })
      .to(contentEl, { y: 18, opacity: 0, duration: 0.3, ease: "power2.in" }, "<")
      .add(() => {
        prevActive.current = active;
        setActive(idx);
      });
  };

  useEffect(() => {
    if (!animating) return;

    const imgPanelEl = imagePanelRef.current;
    const contentEl = contentRef.current;

    // Incoming animation
    gsap.set(imgPanelEl, { scale: 1.05, opacity: 0 });
    gsap.set(contentEl, { y: 18, opacity: 0 });

    gsap.timeline({ onComplete: () => setAnimating(false) })
      .to(imgPanelEl, { scale: 1, opacity: 1, duration: 0.55, ease: "power3.out" })
      .to(contentEl, { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" }, "-=0.3")
      .fromTo(
        statsRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, stagger: 0.1, ease: "power2.out" },
        "-=0.2"
      );
  }, [active]);

  // Mount animation
  useEffect(() => {
    const imgPanelEl = imagePanelRef.current;
    const contentEl = contentRef.current;

    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".charters-section",
        start: "top 75%",
      }
    });

    tl.fromTo(imgPanelEl, 
      { x: -40, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
    )
    .fromTo(contentEl, 
      { x: 40, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" }, 
      "-=0.6"
    )
    .fromTo(statsRef.current, 
      { y: 24, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.12, ease: "power2.out" }, 
      "-=0.4"
    );
  }, []);

  const tab = tabs[active];

  return (
    <>
      <section className="charters-section">
        {/* LEFT: Image Carousel */}
        <div className="image-panel" ref={imagePanelRef}>
          <Swiper
            key={active}
            modules={[Autoplay, EffectFade, Pagination]}
            effect="fade"
            pagination={{ clickable: true }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="charter-swiper"
            style={{ width: '100%', height: '100%' }}
          >
            {tab.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img src={img} alt={`${tab.heading} ${index + 1}`} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div className="image-overlay" /> */}
          {/* <div className="image-label">BBAC Aviation</div> */}
        </div>

        {/* RIGHT: Content */}
        <div className="content-panel">
          {/* Tabs */}
          <nav className="tab-nav" role="tablist">
            {tabs.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={active === i}
                className={`tab-btn${active === i ? " active" : ""}`}
                onClick={() => switchTab(i)}
              >
                {t.label}
              </button>
            ))}
          </nav>

          {/* Animated Content */}
          <div className="content-inner" ref={contentRef}>
            <h2 className="content-heading">
              {tab.heading.split(" ").map((word, wi) => (
                <span key={wi} style={{ color: wi === 0 ? "inherit" : wi === 1 ? "var(--gold)" : "inherit" }}>
                  {word}{" "}
                </span>
              ))}
            </h2>

            <div className="content-body">
              {tab.body.map((para, pi) => (
                <p key={pi}>{para}</p>
              ))}
            </div>

            {/* Stats */}
            <div className="stats-row">
              {tab.stats.map((s, si) => (
                <div
                  key={s.label}
                  className="stat-item"
                  ref={(el) => (statsRef.current[si] = el)}
                >
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative large number */}
          <div className="deco-number">0{active + 1}</div>
        </div>
      </section>
    </>
  );
}
