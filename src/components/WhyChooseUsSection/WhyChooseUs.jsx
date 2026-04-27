import { useEffect, useRef, useState } from "react";

import "./WhyChooseUs.css";

/* ─── Data ──────────────────────────────────────────────────── */
const ITEMS = [
  
  {
    id: "availability",
    title: "Elevated travel experience, backed by a legacy of trust",
    icon:"./assets/images/travel-experience.svg",
    text: "India's most trusted name in private charters.",
    image: "./assets/images/avi-experience.webp",
  },
  {
    id: "onboard",
    title: "Flexible planning, aligned to your preferences",
    icon:"./assets/images/flexible-planning.svg",
    text: "Easily manage your dates and preferences in one place.",
    image: "./assets/images/flexible-planning.jpg",
  },
  {
    id: "efficient",
    title: "End-to-end support from planning to execution",
    icon:"./assets/images/end-to-end-support.svg",
    text: "We’re here to ensure every detail of your reservation is perfect.",
    image: "./assets/images/aviation-support.jpg",
  },
  {
    id: "safety",
    title: "Transparent pricing and clear communication",
    icon:"./assets/images/transparent-pricing.svg",
    text: "All-inclusive quotes with no hidden charges for positioning, crew, or fuel surcharges.",
    image: "./assets/images/transparent-pricing.jpg",
  },
  {
    id: "crew",
    title: "Round-the-clock coordination",
    icon:"./assets/images/round-the-clock-coordination.svg",
    text: "A real person answers, always. We aren't just a booking engine, we're your partners in making things happen. Ready to get started?",
    image: "./assets/images/crew.webp",
  },
];

/* ─── Reusable image panel ──────────────────────────────────── */
function ImagePanel({ refsMap }) {
  return (
    <div className="acc-image-wrapper">
      {ITEMS.map((item, i) => (
        <div
          key={item.id}
          className="acc-image-slide"
          ref={el => { refsMap[item.id] = el; }}
          style={{ opacity: 0, zIndex: i === 0 ? 1 : 0 }}
        >
          <img src={item.image} alt={item.title} loading={i === 0 ? "eager" : "lazy"} />
        </div>
      ))}
    </div>
  );
}

/* ─── Main component ────────────────────────────────────────── */
export default function LuxuryAccordion() {
  const [openId, setOpenId] = useState(ITEMS[0].id);
  const openIdRef = useRef(ITEMS[0].id);

  const eyebrowRef = useRef(null);
  const itemRefs = useRef([]);
  const bodyRefs = useRef({});
  const bodyTextRefs = useRef({});
  const desktopRefs = useRef({});   // desktop image slides
  const mobileRefs = useRef({});   // mobile image slides
  const gsapRef = useRef(null);

  useEffect(() => { openIdRef.current = openId; }, [openId]);

  /* ── Load Bootstrap CSS + GSAP ── */
  useEffect(() => {
    // Bootstrap
    if (!document.getElementById("bs5-css")) {
      const link = document.createElement("link");
      link.id = "bs5-css";
      link.rel = "stylesheet";
      link.href = "https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.3.3/css/bootstrap.min.css";
      document.head.appendChild(link);
    }

    // Custom CSS

    // GSAP
    const loadGSAP = () => {
      gsapRef.current = window.gsap;
      runEntrance();
      setTimeout(() => triggerOpen(ITEMS[0].id, true), 900);
    };

    if (window.gsap) {
      loadGSAP();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
      script.onload = loadGSAP;
      document.head.appendChild(script);
    }

    return () => {

    };
  }, []);

  /* ── Entrance ── */
  function runEntrance() {
    const gsap = gsapRef.current;
    if (!gsap) return;

    gsap.to(eyebrowRef.current, {
      opacity: 1, y: 0, duration: 0.9, ease: "power3.out", delay: 0.2,
    });

    gsap.to(itemRefs.current.filter(Boolean), {
      opacity: 1, y: 0, duration: 0.9, stagger: 0.12, ease: "power3.out", delay: 0.4,
    });

    revealSlide(desktopRefs.current[ITEMS[0].id], 0.5);
    revealSlide(mobileRefs.current[ITEMS[0].id], 0.5);
  }

  /* ── Wipe-reveal one slide ── */
  function revealSlide(slide, delay = 0) {
    const gsap = gsapRef.current;
    if (!gsap || !slide) return;
    gsap.set(slide, { opacity: 1 });
    
    // Wipe new image upward, letting the previous one show underneath
    gsap.fromTo(slide,
      { clipPath: "inset(100% 0 0 0)" },
      { clipPath: "inset(0% 0 0 0)", duration: delay ? 1.1 : 0.85, ease: "power4.inOut", delay }
    );
    
    const img = slide.querySelector("img");
    if (img) {
      gsap.fromTo(img, { scale: 1.1 },
        { scale: 1, duration: delay ? 1.4 : 1.1, ease: "power4.out", delay }
      );
    }
  }

  /* ── Swap images in a given refs map ── */
  function swapImages(refsMap, prevId, nextId) {
    const gsap = gsapRef.current;
    if (!gsap) return;
    const next = refsMap[nextId];
    const prev = prevId ? refsMap[prevId] : null;
    if (!next) return;

    gsap.set(next, { zIndex: 2, opacity: 1 });
    if (prev) gsap.set(prev, { zIndex: 1 });

    revealSlide(next, 0);

    if (prev) {
      gsap.to(prev, {
        opacity: 0, duration: 0.1, delay: 0.85,
        onComplete: () => gsap.set(prev, { zIndex: 0 }),
      });
    }
  }

  /* ── Open / close item ── */
  function triggerOpen(id, skipImageAnim = false) {
    const gsap = gsapRef.current;
    if (!gsap) return;

    const prevId = openIdRef.current;

    // Close previous
    if (prevId && prevId !== id) {
      const pBody = bodyRefs.current[prevId];
      const pText = bodyTextRefs.current[prevId];
      if (pBody) gsap.to(pBody, { height: 0, duration: 0.5, ease: "power3.inOut" });
      if (pText) gsap.to(pText, { opacity: 0, y: 14, duration: 0.3, ease: "power2.in" });
      const pEl = itemRefs.current.find(el => el?.dataset.id === prevId);
      if (pEl) pEl.classList.remove("is-open");
    }

    // Toggle closed
    if (prevId === id && !skipImageAnim) {
      const body = bodyRefs.current[id];
      const text = bodyTextRefs.current[id];
      if (body) gsap.to(body, { height: 0, duration: 0.5, ease: "power3.inOut" });
      if (text) gsap.to(text, { opacity: 0, y: 14, duration: 0.3, ease: "power2.in" });
      const el = itemRefs.current.find(e => e?.dataset.id === id);
      if (el) el.classList.remove("is-open");
      openIdRef.current = null;
      setOpenId(null);
      return;
    }

    // Open new
    const body = bodyRefs.current[id];
    const text = bodyTextRefs.current[id];
    const el = itemRefs.current.find(e => e?.dataset.id === id);

    if (el) el.classList.add("is-open");

    if (body) {
      body.style.height = "auto";
      const fullH = body.scrollHeight;
      body.style.height = "0px";
      gsap.to(body, { height: fullH, duration: 0.55, ease: "power3.inOut" });
    }
    if (text) {
      gsap.to(text, { opacity: 1, y: 0, duration: 0.55, ease: "power3.out", delay: 0.2 });
    }

    if (!skipImageAnim) {
      swapImages(desktopRefs.current, prevId, id);
      swapImages(mobileRefs.current, prevId, id);
    }

    openIdRef.current = id;
    setOpenId(id);
  }

  return (
    <section className="acc-section">

      {/* ── MOBILE IMAGE BANNER — visible only below md ── */}
      <div className="acc-image-mobile d-md-none">
        <ImagePanel refsMap={mobileRefs.current} />
      </div>

      {/* ── BOOTSTRAP GRID ── */}
      <div className="container-fluid">
        <div className="row acc-row p-md-5">

          {/* LEFT — accordion (full width on mobile, half on md+) */}
          <div className="col-12 col-md-6 acc-left">
            {/* <p className="hero-eyebrow" ref={eyebrowRef} >A Better way to Travel</p> */}
            <h2 className="hero-title mb-5" style={{fontSize : "2.8rem", color:"var(--primary)" }}>
              Why book with us?
            </h2>

            <ul className="acc-list">
              {ITEMS.map((item, i) => (
                
                <li
                  key={item.id}
                  className="acc-item"
                  data-id={item.id}
                  ref={el => (itemRefs.current[i] = el)}
                >
                  <button
                    className="acc-trigger"
                    onClick={() => triggerOpen(item.id)}
                    aria-expanded={openId === item.id}
                  > 
                    <img src={item.icon} style={{width:"45px"}} alt="" />  
                    <span className="acc-title">{item.title}</span>
                    {/* <span className="acc-icon" aria-hidden="true" /> */}
                    <span className="acc-trigger-line" />
                  </button>

                  {/* <div
                    className="acc-body"
                    ref={el => (bodyRefs.current[item.id] = el)}
                  >
                    <div className="acc-body-inner">
                      <p
                        className="acc-body-text"
                        ref={el => (bodyTextRefs.current[item.id] = el)}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div> */}
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT — sticky image (hidden on mobile, shown md+) */}
          <div className="col-md-6 d-none d-md-flex acc-image-col">
            <ImagePanel refsMap={desktopRefs.current} />
          </div>

        </div>
      </div>
    </section>
  );
}