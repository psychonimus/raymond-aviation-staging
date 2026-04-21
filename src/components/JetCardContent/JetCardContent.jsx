import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const tabs = [
    {
        id: "private",
        label: "Key Benefits of the Jet Card",
        image: "./assets/images/key-card.webp",
        heading: "Key Benefits of the Jet Card",
        body: [
            "",

        ],
        listHeading: "",
        list: [
            "Rate Certainty: Your hourly rate is fixed at the time of card purchase, immune to market fluctuations or peak-season price surges",
            "No Ownership Liability: No maintenance costs, no crew management, no asset risk",
            "Aircraft Flexibility: Flexible access across aircraft categories, with a pre-defined conversion rate",
            "Simple Accounting: One annual prepayment; each flight draws against your balance with a clear digital statement",
            "Gifting & Corporate Allocation: Jet Cards can be gifted or allocated to specific employees, family members, or clients"
        ],
        listHeading2: "",
        list2: [
            
        ],

    },
    {
        id: "group",
        label: "Jet Card vs. Spot Charter ",
        image: "./assets/images/jetcard-spotcharter.webp",
        heading: "Jet Card vs. Spot Charter ",
        body: [
            "Spot charter pricing fluctuates significantly by season, route, and availability. During peak periods, festive seasons, year-end, special events, summer holidays, charter rates can increase by 40–60% above base. Jet Card holders are insulated from this price surge.",

        ],
        listHeading: "One payment. One rate. One less thing to manage.",
        list: [
            
        ],
        listHeading2: "",
        list2: [
            
        ],
        stats: [{ label: "oxygen, and monitoring systems", value: "Aircraft equipped with medical stretchers" }, { label: "ground ambulances, and attending physicians", value: "Coordination with hospitals" }, { label: "Both domestic and international medical evacuations handled", value: "Domestic and International" }],
    },
];

export default function JetCardContent() {
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