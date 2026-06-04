import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "../CharterContent/CharterContent.css";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";


const tabs = [
    {
        id: "private",
        label: "Aircraft Sales",
        // image: "./assets/images/aircraft-sales.jpg",
        images: ["./assets/images/aircraft-sales.jpg", "./assets/images/helicopter-acqusition-1.jpg"],
        heading: "Aircraft Sales",
        body: [
            "When you are ready to divest your aircraft, the margin between a good outcome and a great one depends entirely on preparation, positioning, and the quality of your buyer pipeline. Raymond Aviation manages every dimension of your aircraft sale.",

        ],
        listHeading: "",
        list: [
            "Independent Valuation",
            "Pre-Sale Preparation",
            "Qualified Buyer Identification",
            "Negotiation Management",
            "Closing Coordination"
        ],
        listHeading2: "",
        list2: [
            
        ],
        listHeading3: "",
        list3: [
            
        ],
        listHeading4: "",
        list4: [
           
        ],
        listHeading5: "",
        list5: [
           
        ],

    },
    {
        id: "group",
        label: "Aircraft Acquisition",

        images: ["./assets/images/aircraft-acquisition.jpg"],
        heading: "Aircraft Acquisition",
        body: [
            "Acquiring an aircraft without expert guidance exposes you to risks that are both financial and regulatory. Raymond Aviation acts as your dedicated acquisition advisor, protecting your interests at every step.",

        ],
        listHeading: "",
        list: [
            "Recomending the right aircraft based on your travel patterns.",
            "Providing access to listed and off-market aircraft worldwide.",
            "Coordinating independent technical evaluation of aircraft.",
            "Verifying lien and title search on selected aircraft.",
            "Managing aircraft import and custom clearence followed by compliances for aircraft registration."
        ],
        listHeading2: "",
        list2: [
            
        ],
        listHeading3: "",
        list3: [
            
        ],
        listHeading4: "",
        list4: [
            
        ],
        listHeading5: "",
        list5: [
            
        ],
        stats: [{ label: "oxygen, and monitoring systems", value: "Aircraft equipped with medical stretchers" }, { label: "ground ambulances, and attending physicians", value: "Coordination with hospitals" }, { label: "Both domestic and international medical evacuations handled", value: "Domestic and International" }],
    },

    {
        id: "private3",
        label: "Aircraft on Sale",
        image: "./assets/images/aircraft-inventory.jpg",
        heading: "Aircraft on Sale",
        body: [
            "We maintain an active inventory of aircraft available for sale, offering clients access to a curated selection across categories. Each opportunity is supported by rigorous evaluation, transparent pricing, and end-to-end advisory through the acquisition process.",

        ],
        listHeading: "",
        list: [

        ],
        listHeading2: "",
        list2: [

        ],
        listHeading3: "",
        list3: [

        ],
        listHeading4: "",
        list4: [
            
        ],
        listHeading5: "",
        list5: [
           
        ],

    },
];

export default function AircraftSalesContent() {
    const [active, setActive] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [showDummyWarning, setShowDummyWarning] = useState(false);
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
            .to(imgPanelEl, { scale: 1.08, opacity: 0, duration: 0.45, ease: "power2.in" })
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
        gsap.set(imgPanelEl, { scale: 1.08, opacity: 0 });
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
                        {(tab.images || (Array.isArray(tab.image) ? tab.image : [tab.image])).map((img, index) => (
                            <SwiperSlide key={index}>
                                <img src={img} alt={`${tab.heading} ${index + 1}`} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="image-overlay" />
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
                                <div key={pi}>
                                    <p>{para}</p>
                                    {tab.id === "private3" && (
                                        <div className="mt-4">
                                            <Link 
                                                to="/inventory" 
                                                className="enquire-btn" 
                                                style={{ display: 'inline-block', width: 'auto', padding: '12px 30px' }}
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    setShowDummyWarning(true);
                                                }}
                                            >
                                                View All Inventory
                                            </Link>
                                        </div>
                                    )}
                                    <h5 style={{color : "var(--primary)"}}>{tab.listHeading}</h5>
                                    <ul className="text-white">
                                        {tab.list.map((item, li) => (
                                            <li key={li}>{item}</li>
                                        ))}
                                    </ul>
                                    <h5 style={{color : "var(--primary)"}}>{tab.listHeading2}</h5>
                                    <ul className="text-white">
                                        {tab.list2.map((item, li) => (
                                            <li key={li}>{item}</li>
                                        ))}
                                    </ul>
                                    <h5 style={{color : "var(--primary)"}}>{tab.listHeading3}</h5>
                                    <ul className="text-white">
                                        {tab.list3.map((item, li) => (
                                            <li key={li}>{item}</li>
                                        ))}
                                    </ul>
                                    <h5 style={{color : "var(--primary)"}}>{tab.listHeading4}</h5>
                                    <ul className="text-white">
                                        {tab.list4.map((item, li) => (
                                            <li key={li}>{item}</li>
                                        ))}
                                    </ul>
                                    <h5 style={{color : "var(--primary)"}}>{tab.listHeading5}</h5>
                                    <ul className="text-white">
                                        {tab.list5.map((item, li) => (
                                            <li key={li}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Stats */}
                        {/* <div className="stats-row">
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
                        </div> */}
                    </div>

                    {/* Decorative large number */}
                    <div className="deco-number">0{active + 1}</div>
                </div>
            </section>

            <AnimatePresence>
                {showDummyWarning && (
                    <div className="booking-modal-overlay">
                        <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="modal-backdrop"
                            onClick={() => setShowDummyWarning(false)}
                        />
                        <motion.div 
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            className="booking-modal-content warning-modal-content"
                            data-lenis-prevent
                        >
                            <button className="close-btn" onClick={() => setShowDummyWarning(false)}>
                                <X size={24} />
                            </button>
                            
                            <div className="modal-header">
                                <h2>Notice</h2>
                            </div>

                            <div className="warning-modal-text">
                                Dummy Page for Demonstration Only
                            </div>

                            <div className="warning-modal-actions">
                                <Link 
                                    to="/inventory"
                                    className="warning-modal-btn" 
                                    onClick={() => setShowDummyWarning(false)}
                                    style={{ textDecoration: 'none', display: 'inline-block' }}
                                >
                                    Proceed to Inventory
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
}