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
            <HeroBanner
                headlineUp="Aircraft & Asset"
                headlineDown="Inventory"
                bgImage="./assets/images/inventory-banner.jpg"
                btnTxt="Enquire Now"
            />

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
                                <div className="card-content">
                                    <div className="card-specs">
                                        <span>Year: {item.year}</span>
                                        {item.details.hours && <span>Hours: {item.details.hours}</span>}
                                        {item.details.length && <span>Length: {item.details.length}</span>}
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
