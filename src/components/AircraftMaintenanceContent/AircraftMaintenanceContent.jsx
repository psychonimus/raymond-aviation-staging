import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../CharterContent/CharterContent.css";


const tabs = [
    {
        id: "private",
        label: "Regulatory Compliance",
        image: "./assets/images/regulatory-compliance-1.jpg",
        heading: "DGCA & Regulatory Compliance",
        body: [
            "",

        ],

        listHeading2: "",
        list2: [
            "NSOP (Non-Scheduled Operator Permit) maintained in good standing",
            "DGCA inspections, audits, & correspondence managed",
            "Operations, safety, & maintenance manuals prepared, approved, & maintained by the operator",
            "Annual safety review with owner briefing on findings & improvements",

        ],


    },
    {
        id: "private-1",
        label: "Crew Management",
        image: "./assets/images/crew-management.jpg",
        heading: "Crew Management",
        body: [
            "",

        ],
        listHeading: "Recruitment & Training",
        list: [

            "Sourcing and screening of qualified captains and first officers to DGCA-recognised standards, with crew compatibility aligned with type of aircraft",
            "Recurrent simulator training, line checks, proficiency checks, and route familiarisation",

            "Emergency procedures and Crew Resource Management (CRM) training",
            "Medical fitness monitoring and scheduling"
        ],
        listHeading2: "",
        list2: [

        ],
        listHeading3: "Rostering & Standby",
        list3: [
            "Crew scheduling aligned with owner's travel patterns",
            "Standby crew arrangements for unplanned demand",
            "Fatigue risk management",

        ],
        listHeading4: "Flight Operations Management",
        list4: [
            "24/7 flight operations centre monitoring",
            "Flight planning, NOTAM review, and weather briefings",
            "Slot coordination, permit filing, and ATC liaison",
            "Overflight permits, diplomatic clearances"
        ],

    },
    {
        id: "group",
        label: "Maintenance Management",
        image: "./assets/images/aircraft-management-2.webp",
        heading: "Maintenance Management",
        body: [
            "",

        ],
        listHeading: "Scheduled/Unscheduled Maintenance & AOG Support",
        list: [
            "Full management of OEM-mandated maintenance intervals",
            "Coordination with approved MRO facilities",
            "Technical log management, component tracking, and airworthiness directives compliance",
            "24/7 AOG response team for unexpected technical issues",
            "Global spares sourcing and MRO network for international AOG recovery"
        ],
        listHeading2: "Airworthiness Management",
        list2: [
            "Maintenance of Certificate of Airworthiness (CoA), renewal and surveillance",
            "Continuing Airworthiness Management Organisation (CAMO) functions",
            "Liaison with DGCA for airworthiness and technical regulatory matters"

        ],
        listHeading3: "",
        list3: [


        ],
        listHeading4: "Financial Management & Reporting",
        list4: [
            "Transparent monthly accounts with cost breakdowns",

            "Annual budget planning and actual-vs-budget performance review",
            "Insurance renewal management and claims coordination"

        ],
        stats: [{ label: "oxygen, and monitoring systems", value: "Aircraft equipped with medical stretchers" }, { label: "ground ambulances, and attending physicians", value: "Coordination with hospitals" }, { label: "Both domestic and international medical evacuations handled", value: "Domestic and International" }],
    },
    {
        id: "group3",
        label: "Charter Revenue Generation",
        image: "./assets/images/charter-revenue.webp",
        heading: "Charter Revenue Generation",
        body: [
            "With owner consent, Raymond Aviation can place managed aircraft on the charter market during unutilised periods to generate revenue and offset ownership and management costs. This optional service operates under a transparent revenue-share agreement.",

        ],
        listHeading: "",
        list: [
            "Marketing and sales of owner's aircraft on the charter market",
            "Client vetting and approval before each third-party use",
            "Charter revenue credited directly against owner management fees"
        ],

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
                                <div key={pi}>
                                    <p >{para}</p>
                                    {tab.listHeading && <h5 style={{ color: "var(--primary)" }}>{tab.listHeading}</h5>}
                                    {tab.list && <ul className="text-white">
                                        {tab.list.map((item, li) => (
                                            <li key={li}>{item}</li>
                                        ))}
                                    </ul>}
                                    {tab.listHeading2 && <h5 style={{ color: "var(--primary)" }}>{tab.listHeading2}</h5>}
                                    {tab.list2 && <ul className="text-white">
                                        {tab.list2.map((item, li) => (
                                            <li key={li}>{item}</li>
                                        ))}
                                    </ul>}
                                    {tab.listHeading3 && <h5 style={{ color: "var(--primary)" }}>{tab.listHeading3}</h5>}
                                    {tab.list3 && <ul className="text-white">
                                        {tab.list3.map((item, li) => (
                                            <li key={li}>{item}</li>
                                        ))}
                                    </ul>}
                                    {tab.listHeading4 && <h5 style={{ color: "var(--primary)" }}>{tab.listHeading4}</h5>}
                                    {tab.list4 && <ul className="text-white">
                                        {tab.list4.map((item, li) => (
                                            <li key={li}>{item}</li>
                                        ))}
                                    </ul>}
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