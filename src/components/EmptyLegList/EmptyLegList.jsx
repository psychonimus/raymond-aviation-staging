import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useModal } from '../../context/ModalContext';
import './EmptyLegList.css';

const emptyLegFlights = [
    {
        id: 1,
        aircraft: "Bombardier Global 6000",
        image: "./assets/images/empty-leg-1.jpg",
        route: "BOM - DEL",
        date: "15 MAY 2026",
        time: "Enquire",
        price: "$15,000",
        
    },
    {
        id: 2,
        aircraft: "Gulfstream G550",
        image: "./assets/images/charter-1.jpg",
        route: "BLR - BOM",
        date: "18 MAY 2026",
        time: "Enquire",
        price: "$12,000",
       
    },
    {
        id: 3,
        aircraft: "Cessna Citation XLS+",
        image: "./assets/images/fractional-banner-1.jpg",
        route: "LON - JNB",
        date: "20 MAY 2026",
        time: "Enquire",
        price: "$18,000",
        
    }
];

const EmptyLegList = () => {
    const { openEmptyLegModal } = useModal();
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.fromTo(cardsRef.current,
            { opacity: 0, y: 50 },
            {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: ".el-list-section",
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section className="el-list-section py-5">
            <div className="container">
                <div className="el-section-header text-center mb-5">
                    <h2 className="display-4 fw-bold">Upcoming Empty Leg Flights</h2>
                    <p className="lead text-muted">Exclusive repositioning opportunities at exceptional value.</p>
                </div>
                <div className="el-grid">
                    {emptyLegFlights.map((flight, index) => (
                        <div
                            key={flight.id}
                            className="el-card"
                            ref={el => cardsRef.current[index] = el}
                        >
                            <div className="el-card-image-wrapper">
                                {/* <div className="el-category-badge">{flight.category}</div> */}
                                <img src={flight.image} alt={flight.aircraft} />
                            </div>
                            <div className="el-card-content">
                                <div className="el-flight-info">
                                    <div className="el-route-display">
                                        <div className="el-location">
                                            <span className="el-city-code">{flight.route.split(' - ')[0]}</span>
                                        </div>
                                        <div className="el-flight-path">
                                            <div className="el-path-line"></div>
                                            <div className="el-plane-icon" >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                                                    <path d="M6.428 1.151C6.708.527 7.265 0 8 0s1.292.527 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>
                                                </svg>
                                            </div>
                                        </div>
                                        <div className="el-location">
                                            <span className="el-city-code">{flight.route.split(' - ')[1]}</span>
                                        </div>
                                    </div>
                                    <div className="el-date-display">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                        </svg>
                                        <span>{flight.date}</span>
                                    </div>
                                </div>
                                <h3 className="el-aircraft-name">{flight.aircraft}</h3>
                                <div className="el-card-price">Starting From: {flight.price}</div>
                                <button className="el-enquire-now-btn" onClick={() => openEmptyLegModal(flight)}>Enquire Now</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default EmptyLegList;
