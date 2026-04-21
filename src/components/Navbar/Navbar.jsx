import { useState, useEffect, useRef } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { IoPersonCircleSharp } from "react-icons/io5";





export default function Navbar({ toggleMenu }) {
  const [lang, setLang] = useState("EN");
  const [region, setRegion] = useState("US");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let idleTimeout;

    const resetIdleTimer = () => {
      clearTimeout(idleTimeout);
      idleTimeout = setTimeout(() => {
        if (window.scrollY > 50) {
          setIsHidden(true);
        }
      }, 3000);
    };

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY.current = currentScrollY;
      resetIdleTimer();
    };

    window.addEventListener("scroll", handleScroll);
    resetIdleTimer();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(idleTimeout);
    };
  }, []);

  return (
    <>

      <nav className={`ac-navbar ${isScrolled ? "scrolled" : ""} ${isHidden ? "hidden" : ""}`}>
        {/* Left */}
        <div className="ac-nav-left">
          <Link to="/" className="ac-nav-brand ">
          <img src="../assets/images/raymond-aviation-logo.svg" alt="" style={{ width: "110px" }} />
        </Link>
          
        </div>

        {/* Center Brand */}
        

        {/* Right */}
        <div className="ac-nav-right">
          <Link to="/contact" className="ac-nav-contact d-none d-md-block">Contact Us</Link>
          <Link to="" className="ac-nav-services d-none d-md-block"><IoPersonCircleSharp style={{width:"40px", height:"40px"}} /></Link>

          <button onClick={toggleMenu} className="ac-hamburger" aria-label="Menu">
            <img src="../assets/images/menu-icon.svg" alt="" style={{width:"40px", height:"40px"}} />
          </button>
        </div>
      </nav>
    </>
  );
}