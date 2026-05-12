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
        image: "./assets/images/empty-leg-2.jpg",
        route: "BLR - BOM",
        date: "18 MAY 2026",
        time: "Enquire",
        price: "$12,000",
    },
    {
        id: 3,
        aircraft: "Cessna Citation XLS+",
        image: "./assets/images/empty-leg-3.jpg",
        route: "DEL - DXB",
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
                                <div className="el-category-badge">Empty Leg</div>
                                <img src={flight.image} alt={flight.aircraft} />
                            </div>
                            <div className="el-card-content">
                                <div className="el-card-specs">
                                    <span>{flight.route}</span>
                                    <span>{flight.date}</span>
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
