import { useEffect, useRef, useState } from "react";

import "./WhyChooseUs.css";

/* ─── Data ──────────────────────────────────────────────────── */
const ITEMS = [
  
  {
    id: "availability",
    title: "100 Years of Raymond Group Legacy",
    icon:"./assets/images/legacy.svg",
    text: "Since 1925, the Raymond name has been a guarantee of quality. Every project bearing the Raymond name, from a suit to a skyscraper to a helipad, is built on a century of craftsmanship, ethics, and trust that no newer entrant can replicate.",
    image: "./assets/images/avi-experience.webp",
  },
  {
    id: "onboard",
    title: "30 Years of General Aviation Expertise",
    icon:"./assets/images/aviation-experience.svg",
    text: "Raymond Aviation has operated in Indian skies since 1996. We understand helicopters, airspace, DGCA regulations, and operational realities at a depth that only comes from three decades of hands-on aviation experience.",
    image: "./assets/images/avi-experience.webp",
  },
  {
    id: "efficient",
    title: "MMRDA Certified — Government Validated",
    icon:"./assets/images/certified.svg",
    text: "The award of the MMRDA Coastal Road Helipad project is not just a contract, it is government validation. MMRDA's rigorous tendering process selected Raymond for its technical competence, financial capability, and track record.",
    image: "./assets/images/trusted-support.webp",
  },
  {
    id: "safety",
    title: "Full Regulatory Compliance",
    icon:"./assets/images/regulatory-compliance.svg",
    text: "As an NSOP holder, Raymond Aviation operates to the highest regulatory standard in Indian aviation. We apply the same compliance discipline to every helipad we build, zero shortcuts, zero compromises.",
    image: "./assets/images/regulatory-compliance.jpg",
  },
  {
    id: "crew",
    title: "Single-Window Accountability",
    icon:"./assets/images/accountability.svg",
    text: "Clients deal with one organisation from site assessment to post-commissioning management. Raymond Aviation eliminates the risk of fragmented responsibility between architects, engineers, regulatory consultants, and operators.",
    image: "./assets/images/crew.webp",
  },
  {
    id: "Operator",
    title: "Operator Perspective, Built In",
    icon:"./assets/images/operator.svg",
    text: "Unlike pure construction companies, Raymond Aviation operates AW 109 helicopter. Our AW109 Grand helicopter has flown into numerous helipads across India. That operational insight directly helps in  every design and construction decision we make.",
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
export default function WhyChooseUsHelipad() {
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
              Why Trust Raymond Aviation?
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

                  <div
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
                  </div>
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