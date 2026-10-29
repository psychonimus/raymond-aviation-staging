import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useModal } from '../../context/ModalContext';
import { emptyLegFlights } from '../../data/emptyLegData';
import { IoMdTime } from "react-icons/io";
import { MdAirlineSeatReclineExtra } from "react-icons/md";
import './EmptyLegList.css';

const EmptyLegList = () => {
    const { openEmptyLegModal, openBookingModal } = useModal();
    const cardsRef = useRef([]);
    const emptyStateRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (emptyLegFlights.length > 0 && cardsRef.current.length > 0) {
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
        } else if (emptyStateRef.current) {
            gsap.fromTo(emptyStateRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: ".el-list-section",
                        start: "top 80%",
                    }
                }
            );
        }
    }, []);

    return (
        <section className="el-list-section">
            <div className="container">
                <div className="el-section-header text-center">
                    <h2>Upcoming Empty Leg Flights</h2>
                    <p>Exclusive repositioning opportunities at exceptional value.</p>
                </div>

                {emptyLegFlights.length > 0 ? (
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

                                        <div className="el-route-display">
                                            {flight?.belowRoute && (
                                                <>
                                                    <div className="el-location">
                                                        <span className="el-city-code">{flight.belowRoute.split(' - ')[0]}</span>
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
                                                        <span className="el-city-code">{flight.belowRoute.split(' - ')[1]}</span>
                                                    </div>
                                                </>
                                            )}
                                        </div>

                                        <div className="el-date-display mb-2">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                            </svg>
                                            <span>{flight.date}</span>
                                        </div>
                                        {flight.time && (
                                            <div className="el-date-display">
                                                <IoMdTime size={20} />
                                                <span>{flight.time}</span>
                                            </div>
                                        )}
                                        {
                                            flight.seats && (
                                                <div className="el-date-display">
                                                    <MdAirlineSeatReclineExtra size={20} />
                                                    <span>{flight.seats}</span>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="el-divider"></div>
                                    <h3 className="el-aircraft-name">{flight.aircraft}</h3>
                                    <div className="el-card-price">Price&#58; <strong>{flight.price}</strong></div>
                                    <button className="el-enquire-now-btn" onClick={() => openEmptyLegModal(flight)}>Enquire Now</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="el-empty-state" ref={emptyStateRef}>
                        <div className="el-empty-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" viewBox="0 0 16 16">
                                <path d="M6.428 1.151C6.708.527 7.265 0 8 0s1.292.527 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>
                            </svg>
                        </div>
                        <h3 className="el-empty-title">No Empty Leg Flights Available</h3>
                        <p className="el-empty-description">
                            There are currently no empty leg listings available at this moment. Schedules are updated on a rolling basis—contact our team to register your preferred routes or arrange a customized private charter.
                        </p>
                        <div className="el-empty-actions">
                            <button className="el-empty-btn" onClick={openBookingModal}>
                                Request Private Charter
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default EmptyLegList;
