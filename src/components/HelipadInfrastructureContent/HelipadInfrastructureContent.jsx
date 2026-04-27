import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "../CharterContent/CharterContent.css";

const tabs = [
    {
        id: "solution",
        label: "End-to-End Helipad Solution",
        image: "./assets/images/helipad-infra-cover.jpg",
        heading: "Turnkey Helipad Infrastructure",
        body: [
            "",
        ],
        sections: [
            {
                title: "Consultancy & Feasibility",
                desc: "Assessing site suitability to deliver a definitive feasibility report",
                image: "/assets/images/helipad-banner-1.jpg"
            },
            {
                title: "Master Planning & Design",
                desc: "Designing of DGCA-compliant helipad layouts",
                image: "/assets/images/helipad-banner-2.jpg"
            },
            {
                title: "Regulatory Approvals",
                desc: "Approvals across DGCA, AAI, Municipal and environmental/coastal/defence authorities.(Wherever applicable)",
                image: "/assets/images/helipad-banner-3.jpg"
            },
            {
                title: "Construction & Project Management",
                desc: "Turnkey delivery of civil works and structural systems, lighting, fuel facilities, and passenger Lounge",
                image: "/assets/images/helipad-banner-4.jpg"
            },
            {
                title: "Commissioning & Licensing",
                desc: "DGCA liaison, pre-commissioning test flights and certification of all safety systems",
                image: "/assets/images/helipad-banner-5.jpg"
            },
            {
                title: "Operations & Management",
                desc: "Helipad operations including ATC liaison, ground handling, maintenance, fuelling, safety audits, and 24/7 support",
                image: "/assets/images/helipad-infra-cover.jpg"
            }

        ]
    },
    {
        id: "solution2",
        label: "Types of Helipads",
        image: "./assets/images/types-of-helipads.jpg",
        heading: "Types of Helipads We Can Build",
        body: [
            "",
        ],
        sections: [
            {
                title: "Rooftop Helipad",
                desc: "Specialized installations for urban high-rises.",
                image: "./assets/images/rooftop-helipad.jpg"
            },
            {
                title: "Coastal / Seafront Helipad",
                desc: "Marine-grade construction for saline environments.",
                image: "./assets/images/coastal-helipad.jpg"
            },
            {
                title: "Floating / Offshore Deck Helipad",
                desc: "Stabilized decks for marine and offshore platforms.",
                image: "./assets/images/offshore-helipad-2.jpg"
            },
            {
                title: "Ground-Level / Surface Helipad",
                desc: "At-grade designs with full DGCA markings.",
                image: "./assets/images/helipad-banner-1.jpg"
            },
            {
                title: "Elevated / Deck Helipad",
                desc: "Purpose-built elevated steel/concrete structures.",
                image: "./assets/images/elivated-helipad.jpg"
            },
            {
                title: "Licensed / DGCA Certified Helipad",
                desc: "Formal licensing and aerodrome compliance.",
                image: "./assets/images/dgca-helipad.jpg"
            },
            
            {
                title: "Hospital / HEMS Helipad",
                desc: "Emergency designs for rapid patient transfer.",
                image: "./assets/images/hospital-helipad.jpg"
            },

        ]
    },

];

export default function HelipadInfrastructureContent() {
    const [active, setActive] = useState(0);
    const [animating, setAnimating] = useState(false);
    const swiperRef = useRef(null);
    const imagePanelRef = useRef(null);
    const contentRef = useRef(null);

    const switchTab = (idx) => {
        if (idx === active || animating) return;
        setAnimating(true);

        const imgPanel = imagePanelRef.current;
        const contentEl = contentRef.current;

        gsap.timeline()
            .to(imgPanel, { scale: 1.05, opacity: 0, duration: 0.45, ease: "power2.in" })
            .to(contentEl, { y: 18, opacity: 0, duration: 0.3, ease: "power2.in" }, "<")
            .add(() => {
                setActive(idx);
            });
    };

    useEffect(() => {
        if (!animating) return;

        const imgPanel = imagePanelRef.current;
        const contentEl = contentRef.current;

        gsap.set(imgPanel, { scale: 1.05, opacity: 0 });
        gsap.set(contentEl, { y: 18, opacity: 0 });

        gsap.timeline({ onComplete: () => setAnimating(false) })
            .to(imgPanel, { scale: 1, opacity: 1, duration: 0.55, ease: "power3.out" })
            .to(contentEl, { y: 0, opacity: 1, duration: 0.45, ease: "power3.out" }, "-=0.3");
    }, [active]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".charters-section",
                start: "top 75%",
            }
        });

        tl.fromTo(imagePanelRef.current,
            { x: -40, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
        )
            .fromTo(contentRef.current,
                { x: 40, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" },
                "-=0.6"
            );
    }, []);

    const tab = tabs[active];

    return (
        <section className="charters-section">
            <div className="image-panel" ref={imagePanelRef}>
                {tab.id === "solution2" ? (
                    <Swiper
                        modules={[Autoplay, EffectFade, Navigation]}
                        effect="fade"
                        autoplay={{ delay: 4000, disableOnInteraction: false }}
                        loop={true}
                        speed={1500}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                        className="charter-swiper"
                        style={{ width: "100%", height: "100%" }}
                    >
                        {tab.sections.map((section, idx) => (
                            <SwiperSlide key={idx}>
                                <img 
                                    src={section.image || tab.image} 
                                    alt={section.title} 
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <img src={tab.image} alt={tab.heading} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                )}
                <div className="image-overlay" />
            </div>

            <div className="content-panel">
                <nav className="tab-nav" role="tablist">
                    {tabs.map((t, i) => (
                        <button
                            key={t.id}
                            className={`tab-btn${active === i ? " active" : ""}`}
                            onClick={() => switchTab(i)}
                        >
                            {t.label}
                        </button>
                    ))}
                </nav>

                <div className="content-inner" ref={contentRef}>
                    <h2 className="content-heading">
                        {tab.heading.split(" ").map((word, wi) => (
                            <span key={wi} style={{ color: wi === 1 ? "var(--primary)" : "inherit" }}>
                                {word}{" "}
                            </span>
                        ))}
                    </h2>

                    <div className="content-body">
                        {tab.body.map((para, pi) => (
                            <p key={pi}>{para}</p>
                        ))}
                        <div className="mt-4">
                            {tab.sections.map((section, si) => (
                                <div 
                                    key={si} 
                                    className="mb-4"
                                    onClick={() => tab.id === "solution2" && swiperRef.current?.slideToLoop(si)}
                                    style={{ cursor: tab.id === "solution2" ? "pointer" : "default" }}
                                >
                                    <h5 style={{ color: "var(--primary)", display: "flex", alignItems: "center", gap: "12px" }}>
                                        {tab.id === "solution2" && (
                                            <span style={{ 
                                                width: "8px", 
                                                height: "8px", 
                                                borderRadius: "50%", 
                                                backgroundColor: "var(--primary)", 
                                                display: "inline-block" 
                                            }}></span>
                                        )}
                                        {section.title}
                                    </h5>
                                    {section.desc && <p className="text-white opacity-75">{section.desc}</p>}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="deco-number">0{active + 1}</div>
            </div>
        </section>
    );
}


