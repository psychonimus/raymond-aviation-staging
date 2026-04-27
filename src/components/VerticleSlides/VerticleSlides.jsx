import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";
import "./VerticleSlides.css";

gsap.registerPlugin(ScrollTrigger);

/* ─── tunables ─── */
const BLIND_COUNT = 12;
const svgNS = "http://www.w3.org/2000/svg";

const SLIDES = [
  {
    img: "./assets/images/types-of-helipads.jpg",
    h2: "Types of Helipads\nWe Can Build(To be Discussed)",
    h3: "Raymond Aviation has the technical expertise, equipment, and regulatory knowledge to design and construct every category of helipad across India. Each type presents unique engineering challenges, from structural load calculations for rooftop installations to marine-grade corrosion protection for coastal and floating platforms.",
    features: []
  },
  {
    img: "./assets/images/rooftop-helipad.jpg",
    h2: "Rooftop\nHelipad",
    h3: "Helipads constructed on the rooftops of high-rise buildings, hospitals, corporate towers, and residential skyscrapers. These are among the most technically demanding types due to structural load requirements, obstacle limitation constraints in dense urban airspace, and wind-shear considerations at height.",
    features: [
      "Structural load engineering",
      "Wind analysis & simulation",
      "Urban OLS compliance",
      "Helipad deck drainage",
      "Anti-skid surface finish",
      "DGCA building integration"
    ]
  },
  {
    img: "./assets/images/coastal-helipad.jpg",
    h2: "Coastal / Seafront\nHelipad",
    h3: "Helipads built on or adjacent to India's coastline, including beachfronts, cliff edges, coastal highways, and promenades. These require CRZ (Coastal Regulation Zone) compliance and marine-grade construction materials.",
    features: [
      "CRZ clearance",
      "Saline environment material selection",
      "Wind rose analysis",
      "Tidal flooding protection",
      "Coastal erosion assessment."
    ]
  },
  {
    img: "./assets/images/offshore-helipad.jpg",
    h2: "Floating / Offshore\nDeck Helipad",
    h3: "Helipads mounted on floating barges, pontoons, or offshore platforms deployed on lakes, rivers, reservoirs, or nearshore marine environments. Engineered to absorb vessel motion while maintaining a stable landing surface. Applicable for offshore logistics, luxury yacht platforms, and emergency evacuation platforms.",
    features: [
      "Dynamic load compensation",
      "Marine-grade aluminium deck",
      "Anchor system design",
      "Cathodic protection",
      "Helicopter deck net",
      "Offshore safety equipment"
    ]
  },
  {
    img: "./assets/images/ground-helipad.jpg",
    h2: "Ground-Level/\nSurface Helipad",
    h3: "At-grade helipads constructed on open ground, at private estates, resorts, farmhouses, hospitals, industrial facilities, and government campuses. These are the most straightforward type structurally but require careful drainage, surface load rating, and clear approach/departure sector management.",
    features: [
      "Reinforced concrete or block paving",
      "Perimeter lighting",
      "Full DGCA marking",
      "Drainage",
      "Wind cone",
      "Optional fuel storage"
    ]
  },
  {
    img: "./assets/images/elivated-helipad.jpg",
    h2: "Elevated / Deck\nHelipad",
    h3: "Helipads constructed on elevated steel or concrete structures that are purpose-built above ground, for example, over podium levels of a building, above infrastructure decks, or at elevated hospital trauma centres. These provide clear approach paths without the structural integration complexity of full rooftop helipads.",
    features: [
      "Structural steel design",
      "Approach clearance optimisation",
      "Fire suppression",
      "Load-rated deck",
      "Emergency egress routes"
    ]
  },
  {
    img: "./assets/images/dgca-helipad.jpg",
    h2: "Licensed / DGCA\nCertified Helipad",
    h3: "All helipads intended for commercial helicopter operations, including charter flights, scheduled services, or public use, must be formally licensed by the DGCA.",
    features: [
      "Full DGCA documentation package",
      "Aerodrome manual preparation",
      "Safety management system",
      "Fire safety certificate",
      "Building NOC"
    ]
  },
  // {
  //   img: "./assets/images/luxury-helipad.jpg",
  //   h2: "Hospitality & Luxury\nHelipad",
  //   h3: "Premium helipads designed as lifestyle infrastructure for luxury resorts, five-star hotels, private villas, and heritage properties. These helipads are designed with aesthetics in mind, integrating with landscaping, architecture, and brand identity, while meeting all technical and regulatory requirements.",
  //   features: [
  //     "Architectural integration",
  //     "Bespoke finishing",
  //     "Landscape design coordination",
  //     "VIP lounge linkage",
  //     "Discreet security systems"
  //   ]
  // },
  {
    img: "./assets/images/hospital-helipad.jpg",
    h2: "Hospital / HEMS\nHelipad",
    h3: "Helipads designed specifically for Helicopter Emergency Medical Services (HEMS) operations, typically on or adjacent to Level 1 trauma centres, super-specialty hospitals, and multi-speciality medical hubs. These are designed for rapid turnaround, 24/7 operation, and direct patient transfer linkage.",
    features: [
      "24/7 lighting",
      "Direct lift access to trauma bay",
      "AFFF fire suppression",
      "Emergency generator backup",
      "HEMS crew facilities"
    ]
  }
];


export default function VerticalSlides() {
  const stageRef    = useRef(null);
  const layersRef   = useRef([]);      // svg elements
  const textsRef    = useRef([]);      // .vb-txt elements
  const fillsRef    = useRef([]);      // .vb-fill elements
  const lenisRef    = useRef(null);
  const masterRef   = useRef(null);
  const timerRef    = useRef(null);

  /* ── helpers ── */
  function createBlinds(g, isFirstLayer, vbWidth) {
    g.innerHTML = "";
    const w = vbWidth / BLIND_COUNT;
    const blinds = [];
    let currentX = 0;

    for (let i = 0; i < BLIND_COUNT; i++) {
      const centerX  = currentX + w / 2;
      const rectLeft  = document.createElementNS(svgNS, "rect");
      const rectRight = document.createElementNS(svgNS, "rect");

      [rectLeft, rectRight].forEach((r) => {
        r.setAttribute("y",      "0");
        r.setAttribute("height", "100");
        r.setAttribute("width",  isFirstLayer ? w / 2 + 0.1 : "0");
        r.setAttribute("fill",   "white");
        r.setAttribute("shape-rendering", "crispEdges");
      });

      if (isFirstLayer) {
        rectLeft.setAttribute("x",  centerX - w / 2);
        rectRight.setAttribute("x", centerX);
      } else {
        rectLeft.setAttribute("x",  centerX);
        rectRight.setAttribute("x", centerX);
      }

      g.appendChild(rectLeft);
      g.appendChild(rectRight);
      blinds.push({ left: rectLeft, right: rectRight, x: centerX, w: w / 2 });
      currentX += w;
    }
    return blinds;
  }

  function openBlinds(blinds) {
    return gsap.to(
      blinds.flatMap((b) => [b.left, b.right]),
      {
        attr: {
          x:     (i) => { const b = blinds[Math.floor(i / 2)]; return i % 2 === 0 ? b.x - b.w : b.x; },
          width: (i) => { const b = blinds[Math.floor(i / 2)]; return b.w + 0.05; },
        },
        ease: "none",
        stagger: { each: 0.02, from: "start" },
      }
    );
  }

  function buildMasterTimeline(blindsSets) {
    if (masterRef.current) masterRef.current.kill();

    const texts = textsRef.current;

    masterRef.current = gsap.timeline({
      scrollTrigger: {
        trigger: stageRef.current,
        start: "top top",
        end:   "bottom bottom",
        scrub: 2.0,
        invalidateOnRefresh: true,
      },
    });

    gsap.set(texts, { clipPath: "inset(0% 0% 100% 0%)", y: 40, opacity: 0 });
    gsap.set(texts[0], { clipPath: "inset(0% 0% 0% 0%)", y: 0,  opacity: 1 });

    blindsSets.forEach((blinds, i) => {
      if (i === 0) return;

      if (texts[i - 1]) {
        masterRef.current.to(texts[i - 1], {
          clipPath: "inset(0% 0% 100% 0%)", y: -40, opacity: 0, duration: 0.8,
        }, ">");
      }

      masterRef.current.add(openBlinds(blinds), "-=0.3");

      if (texts[i]) {
        masterRef.current.to(texts[i], {
          clipPath: "inset(0% 0% 0% 0%)", y: 0, opacity: 1, duration: 0.8,
        }, "-=0.5");
      }

      masterRef.current.to({}, { duration: 2 });
    });
  }

  function initProgressBar() {
    const fills = fillsRef.current;
    ScrollTrigger.create({
      trigger: stageRef.current,
      start: "top top",
      end:   "bottom bottom",
      scrub: 0.3,
      onUpdate: (self) => {
        const progress   = self.progress;
        const totalSteps = fills.length;
        fills.forEach((fill, i) => {
          let p = (progress - i / totalSteps) * totalSteps;
          p = Math.max(0, Math.min(1, p));
          fill.style.width = `${p * 100}%`;
        });
      },
    });
  }

  function updateLayout() {
    const width  = window.innerWidth;
    const height = window.innerHeight;
    const vbWidth  = (width / height) * 100;
    const vbHeight = 100;

    const blindsSets = [];

    layersRef.current.forEach((svg, i) => {
      if (!svg) return;

      svg.setAttribute("viewBox", `0 0 ${vbWidth} ${vbHeight}`);

      const maskRect = svg.querySelector("mask rect");
      if (maskRect) {
        maskRect.setAttribute("width",  vbWidth);
        maskRect.setAttribute("height", vbHeight);
      }

      const img = svg.querySelector("image");
      if (img) {
        img.setAttribute("width",  vbWidth);
        img.setAttribute("height", vbHeight);
        img.setAttribute("preserveAspectRatio", "xMidYMid slice");
      }

      const g = svg.querySelector("g[id]");
      if (g) {
        const blinds = createBlinds(g, i === 0, vbWidth);
        if (blinds) blindsSets.push(blinds);
      }
    });

    buildMasterTimeline(blindsSets);
  }

  /* ── lifecycle ── */
  useEffect(() => {
    /* Lenis */
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    lenisRef.current = new Lenis({ lerp: 0.15, smoothWheel: true, smoothTouch: !isTouch });
    lenisRef.current.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => lenisRef.current?.raf(time * 1000));

    updateLayout();
    initProgressBar();

    const onResize = () => {
      clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        updateLayout();
        ScrollTrigger.refresh();
      }, 250);
    };
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("resize", onResize);
      clearTimeout(timerRef.current);
      masterRef.current?.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
      lenisRef.current?.destroy();
      gsap.ticker.remove((time) => lenisRef.current?.raf(time * 1000));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* ── render ── */
  return (
    <div className="vb-root">
      

      <section className="vb-stage" ref={stageRef}>
        <div className="vb-layers">
          <div className="vb-overlay" />

          {/* SVG layers */}
          {SLIDES.map((slide, i) => (
            <svg
              key={i}
              className="vb-layer"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              ref={(el) => (layersRef.current[i] = el)}
            >
              <defs>
                <mask id={`vb-mask${i + 1}`} maskUnits="userSpaceOnUse">
                  <rect x="0" y="0" width="100" height="100" fill="black" />
                  <g id={`vb-blinds${i + 1}`} />
                </mask>
              </defs>
              <image
                href={slide.img}
                x="0" y="0"
                width="100" height="100"
                preserveAspectRatio="xMidYMid slice"
                mask={`url(#vb-mask${i + 1})`}
                style={{ filter: "brightness(0.8)" }}
              />
            </svg>
          ))}

          {/* Progress bar */}
          <div className="vb-progress-bar">
            {SLIDES.map((_, i) => (
              <div className="vb-segment" key={i}>
                <div className="vb-fill" ref={(el) => (fillsRef.current[i] = el)} />
              </div>
            ))}
          </div>

          {/* Texts */}
          <div className="vb-texts">
            {SLIDES.map((slide, i) => (
              <div
                key={i}
                className="vb-txt"
                ref={(el) => (textsRef.current[i] = el)}
              >
                <h2>{slide.h2}</h2>
                <h3>{slide.h3}</h3>
                <div className="vb-features">
                  {slide.features.map((feature, fi) => (
                    <div key={fi} className="vb-feature-item">
                      <svg className="vb-feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}