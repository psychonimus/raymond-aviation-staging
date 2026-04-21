import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const tabs = [
    {
        id: "private",
        label: "Aircraft Sales- Representation for Sellers",
        image: "./assets/images/aircraft-sales.webp",
        heading: "",
        body: [
            "When you are ready to divest your aircraft, the margin between a good outcome and a great one depends entirely on preparation, positioning, and the quality of your buyer pipeline. Raymond Aviation manages every dimension of your aircraft sale.",

        ],
        listHeading: "Independent Valuation",
        list: [
            "Market-benchmarked aircraft appraisal using international databases (IMI, Vref, AVAC) and proprietary Indian market intelligence"
        ],
        listHeading2: "Pre-Sale Preparation",
        list2: [
            "Maintenance record organisation, cosmetic and systems review, and DGCA documentation audit to maximise aircraft presentation"
        ],
        listHeading3: "Qualified Buyer Identification",
        list3: [
            "Access to our network of pre-qualified Indian and international buyers, including confidential off-market transactions"
        ],
        listHeading4: "Negotiation Management",
        list4: [
            "Full representation in price, terms, and delivery condition negotiations"
        ],
        listHeading5: "Closing Coordination",
        list5: [
            "Legal documentation, DGCA deregistration, title transfer, and sale completion"
        ],

    },
    {
        id: "group",
        label: "Aircraft Acquisition, Representation for Buyers",
        image: "./assets/images/aircraft-owner.webp",
        heading: "",
        body: [
            "Acquiring a private aircraft without expert guidance exposes you to risks that are both financial and regulatory. Raymond Aviation acts as your dedicated acquisition advisor, protecting your interests at every step.",

        ],
        listHeading: "Mission Profile Analysis",
        list: [
            "Defining the right aircraft category, range, cabin size, and operational specification based on your actual travel patterns"
        ],
        listHeading2: "Global Sourcing",
        list2: [
            "Access to listed and off-market aircraft worldwide; relationships with dealers, lessors, and private sellers across the globe"
        ],
        listHeading3: "Pre-Purchase Inspection (PPI)",
        list3: [
            "Coordinating independent technical inspection of airframe, engines, avionics, and interior, with experienced test pilots and engineers"
        ],
        listHeading4: "Lien & Title Search",
        list4: [
            "Clearance verification under DGCA, FAA, Cape Town Convention, and other applicable registries"
        ],
        listHeading5: "Import & Registration Management",
        list5: [
            "End-to-end management of DGCA import permission, customs clearance, GST structuring, and VT registration"
        ],
        stats: [{ label: "oxygen, and monitoring systems", value: "Aircraft equipped with medical stretchers" }, { label: "ground ambulances, and attending physicians", value: "Coordination with hospitals" }, { label: "Both domestic and international medical evacuations handled", value: "Domestic and International" }],
    },
];

export default function AircraftSalesContent() {
    const [active, setActive] = useState(0);
    const [animating, setAnimating] = useState(false);
    const imageRef = useRef(null);
    const contentRef = useRef(null);
    const statsRef = useRef([]);
    const prevActive = useRef(0);

    const switchTab = (idx) => {
        if (idx === active || animating) return;
        setAnimating(true);

        const imgEl = imageRef.current;
        const contentEl = contentRef.current;

        // Outgoing animation
        gsap.timeline()
            .to(imgEl, { scale: 1.08, opacity: 0, duration: 0.45, ease: "power2.in" })
            .to(contentEl, { y: 18, opacity: 0, duration: 0.3, ease: "power2.in" }, "<")
            .add(() => {
                prevActive.current = active;
                setActive(idx);
            });
    };

    useEffect(() => {
        if (!animating) return;

        const imgEl = imageRef.current;
        const contentEl = contentRef.current;

        // Incoming animation
        gsap.set(imgEl, { scale: 1.08, opacity: 0 });
        gsap.set(contentEl, { y: 18, opacity: 0 });

        gsap.timeline({ onComplete: () => setAnimating(false) })
            .to(imgEl, { scale: 1, opacity: 1, duration: 0.55, ease: "power3.out" })
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
        const imgEl = imageRef.current;
        const contentEl = contentRef.current;

        gsap.registerPlugin(ScrollTrigger);

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".charters-section",
                start: "top 75%",
            }
        });

        tl.fromTo(imgEl,
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
                {/* LEFT: Image */}
                <div className="image-panel">
                    <img ref={imageRef} src={tab.image} alt={tab.heading} />
                    <div className="image-overlay" />
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
                                <div>
                                    <p key={pi}>{para}</p>
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
        </>
    );
}