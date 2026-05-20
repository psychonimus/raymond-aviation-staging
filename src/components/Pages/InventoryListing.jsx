import React, { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { inventoryData } from '../../data/inventoryData';
import HeroBanner from '../Herobanner/HeroBanner';
import Footer from '../Footer/Footer';
import '../Inventory/Inventory.css';

const InventoryListing = () => {
    const navigate = useNavigate();
    const cardsRef = useRef([]);

    useEffect(() => {
        gsap.fromTo(cardsRef.current, 
            { opacity: 0, y: 50 },
            { 
                opacity: 1, 
                y: 0, 
                duration: 0.8, 
                stagger: 0.2, 
                ease: "power3.out",
                delay: 0.5 
            }
        );
    }, []);

    const handleCardClick = (id) => {
        navigate(`/inventory/${id}`);
    };

    return (
        <div className="inventory-page">
            <Helmet>
                <title>Aircraft Inventory | Raymond Aviation</title>
                <meta name="description" content="Browse our current inventory of premium aircraft available for sale. Find your next asset with Raymond Aviation." />
            </Helmet>
            {/* <HeroBanner
                headlineUp="Inventory On Offers"
                headlineDown=""
                bgImage="./assets/images/inventory-banner.jpg"
                btnTxt="Enquire Now"
            /> */}

            <section className="inventory-listing">
                <div className="container">
                    <div className="inventory-header">
                        <h1>Current Inventory</h1>
                        <p>Explore our curated selection of pre-owned aircraft, helicopters, and yachts. Each asset has been rigorously evaluated to ensure it meets our standards of excellence.</p>
                    </div>

                    <div className="inventory-grid">
                        {inventoryData.map((item, index) => (
                            <div 
                                key={item.id} 
                                className="inventory-card"
                                ref={el => cardsRef.current[index] = el}
                                onClick={() => handleCardClick(item.id)}
                            >
                                <div className="card-image-wrapper">
                                    <div className="category-badge">{item.category}</div>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className="list-card-content">
                                    <div className="card-specs">
                                        <span className="highlight-spec">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" className="spec-icon">
                                                <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/>
                                            </svg>
                                            Year: {item.year}
                                        </span>
                                        {item.details.hours && (
                                            <span className="highlight-spec">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" className="spec-icon">
                                                    <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.82z"/>
                                                    <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/>
                                                </svg>
                                                Hours: {item.details.hours}
                                            </span>
                                        )}
                                        {item.details.length && (
                                            <span className="highlight-spec">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" className="spec-icon">
                                                    <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8ZM7.646 1.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 2.707V5.5a.5.5 0 0 1-1 0V2.707L6.354 3.854a.5.5 0 1 1-.708-.708l2-2ZM8 10.5a.5.5 0 0 1 .5.5v2.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 13.793V11a.5.5 0 0 1 .5-.5Z"/>
                                                </svg>
                                                Length: {item.details.length}
                                            </span>
                                        )}
                                    </div>
                                    <h3>{item.name}</h3>
                                    <div className="card-price">{item.price}</div>
                                    <button className="view-details-btn">View Details</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer 
                FooterHeader="INTERESTED IN AN ASSET?"
                FooterTaglineOne="Personalized Consultations"
                FooterTaglineTwo="Global Delivery Support"
                FooterTaglineThree="Seamless Closing"
                btnTxt="Contact Our Sales Team"
            />
        </div>
    );
};

export default InventoryListing;
