import React, { useRef } from 'react';
import { gsap } from 'gsap';
import { CustomEase } from 'gsap/CustomEase';
import { useGSAP } from '@gsap/react';
import { Link } from 'react-router-dom';
import './Menu.css';
import SocialIcons from '../SocialIcons/SocialIcons';

gsap.registerPlugin(CustomEase);

const Menu = ({ isOpen, toggleMenu }) => {
    const container = useRef();

    useGSAP(() => {
        CustomEase.create("main", "0.65, 0.01, 0.05, 0.99");
        gsap.defaults({
            ease: "main",
            duration: 0.7
        });
    }, { scope: container });

    const { contextSafe } = useGSAP({ scope: container });

    const animateMenu = contextSafe((open) => {
        const navWrap = container.current;
        const overlay = navWrap.querySelector(".overlay");
        const menu = navWrap.querySelector(".menu");
        const bgPanels = navWrap.querySelectorAll(".bg-panel");
        const menuLinks = navWrap.querySelectorAll(".menu-link");
        const fadeTargets = navWrap.querySelectorAll("[data-menu-fade]");

        const tl = gsap.timeline();

        if (open) {
            tl.set(navWrap, { display: "block" })
                .set(menu, { xPercent: 0 }, "<")
                .fromTo(overlay, { autoAlpha: 0 }, { autoAlpha: 1 }, "<")
                .fromTo(bgPanels, { xPercent: 101 }, { xPercent: 0, stagger: 0.12, duration: 0.575 }, "<")
                .fromTo(menuLinks, { yPercent: 140, rotate: 10 }, { yPercent: 0, rotate: 0, stagger: 0.05 }, "<+=0.35")
                .fromTo(fadeTargets, { autoAlpha: 0, yPercent: 50 }, { autoAlpha: 1, yPercent: 0, stagger: 0.04 }, "<+=0.2");
        } else {
            tl.to(overlay, { autoAlpha: 0 })
                .to(menu, { xPercent: 120 }, "<")
                .set(navWrap, { display: "none" });
        }
    });

    React.useEffect(() => {
        animateMenu(isOpen);
    }, [isOpen, animateMenu]);

    return (
        <div ref={container} className="nav" style={{ display: 'none' }}>
            <div onClick={toggleMenu} className="overlay" />
            <nav className="menu">
                <button onClick={toggleMenu} className="menu-close-btn" aria-label="Close Menu">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
                <div className="menu-bg">
                    <div className="bg-panel first" />
                    <div className="bg-panel second" />
                    <div className="bg-panel" />
                </div>
                <div className="menu-inner">
                    <ul className="menu-list">
                        <li className="menu-list-item">
                            <Link to="/about" className="menu-link w-inline-block">
                                <div className="menu-link-heading">
                                    <span className="menu-link-text">About us</span>
                                    <span className="menu-link-text is--hover">About us</span>
                                </div>
                                {/* <p className="eyebrow">01</p> */}
                                <div className="menu-link-bg" />
                            </Link>
                        </li>
                        {/* <li className="menu-list-item">
                            <a href="" className="menu-link w-inline-block">
                                <div className="menu-link-heading">
                                    <span className="menu-link-text">Our work</span>
                                    <span className="menu-link-text is--hover">Our work</span>
                                </div>
                                <p className="eyebrow">02</p>
                                <div className="menu-link-bg" />
                            </a>
                        </li> */}
                        <li className="menu-list-item">
                            <Link to="/services" className="menu-link w-inline-block">
                                <div className="menu-link-heading">
                                    <span className="menu-link-text">Services</span>
                                    <span className="menu-link-text is--hover">Services</span>
                                </div>
                                {/* <p className="eyebrow">03</p> */}
                                <div className="menu-link-bg" />
                            </Link>
                        </li>
                        <li className="menu-list-item"> 
                            <Link to="/blogs" className="menu-link w-inline-block">
                                <div className="menu-link-heading">
                                    <span className="menu-link-text">Blog</span>
                                    <span className="menu-link-text is--hover">Blog</span>
                                </div>
                                {/* <p className="eyebrow">04</p> */}
                                <div className="menu-link-bg" />
                            </Link>
                        </li>
                        <li className="menu-list-item">
                            <Link to="/contact" className="menu-link w-inline-block">
                                <div className="menu-link-heading">
                                    <span className="menu-link-text">Contact us</span>
                                    <span className="menu-link-text is--hover">Contact us</span>
                                </div>
                                {/* <p className="eyebrow">05</p> */}
                                <div className="menu-link-bg" />
                            </Link>
                        </li>
                    </ul>
                    <div className="menu-details">
                        <p data-menu-fade="" className="p-small">
                            Socials
                        </p>
                        <SocialIcons />
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Menu;
