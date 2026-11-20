import React, { useState, useEffect, useRef } from 'react';
import SEO from '../SEO/SEO';
import { useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { inventoryData } from '../../data/inventoryData';
import HeroBanner from '../Herobanner/HeroBanner';
import Footer from '../Footer/Footer';
import '../Inventory/Inventory.css';

const categories = [
    { id: "all", label: "All Assets", match: [] },
    { id: "helicopters", label: "Helicopters", match: ["helicopter", "helicopters", "heli"] },
    { id: "aircrafts", label: "Aircrafts", match: ["aircraft", "aircrafts", "jet", "jets", "plane", "airplane"] },
    { id: "yachts", label: "Yachts", match: ["yacht", "yachts", "yatch", "boat"] },
    { id: "air-ambulance", label: "Air Ambulance", match: ["air ambulance", "ambulance", "medevac", "medical"] }
];

const InventoryListing = () => {
    const navigate = useNavigate();
    const [activeCategory, setActiveCategory] = useState("all");
    const cardsRef = useRef([]);
    const emptyStateRef = useRef(null);

    const filteredItems = inventoryData.filter((item) => {
        if (activeCategory === "all") return true;
        const cat = categories.find((c) => c.id === activeCategory);
        if (!cat) return true;
        const itemCat = (item.category || "").toLowerCase();
        return cat.match.some((keyword) => itemCat.includes(keyword));
    });

    const handleCategoryChange = (categoryId) => {
        if (categoryId === activeCategory) return;
        cardsRef.current = [];
        setActiveCategory(categoryId);
    };

    useEffect(() => {
        if (filteredItems.length > 0 && cardsRef.current.length > 0) {
            gsap.fromTo(
                cardsRef.current.filter(Boolean),
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.08,
                    ease: "power3.out"
                }
            );
        } else if (emptyStateRef.current) {
            gsap.fromTo(
                emptyStateRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    ease: "power3.out"
                }
            );
        }
    }, [activeCategory]);

    const handleCardClick = (id) => {
        navigate(`/inventory/${id}`);
    };

    return (
        <div className="inventory-page">
            <SEO
                title="Aircraft Inventory | Raymond Aviation"
                description="Browse our current inventory of premium aircraft, luxury helicopters, and yachts available for sale. Find your next asset with Raymond Aviation."
                keywords="aircraft inventory, private jets for sale, helicopters for sale, luxury yachts for sale"
                path="/inventory"
            />
            {/* <HeroBanner
                headlineUp="Inventory On Offers"
                headlineDown=""
                bgImage="./assets/images/inventory-banner.jpg"
                btnTxt="Enquire Now"
            /> */}

            <section className="inventory-listing mt-5">
                <div className="container">
                    <div className="inventory-header">
                        <h1>Current Inventory</h1>
                        <p>Explore our curated selection of pre-owned aircraft, helicopters, and yachts. Each asset has been rigorously evaluated to ensure it meets our standards of excellence.</p>
                    </div>

                    {/* Category Tabs */}
                    <div className="inventory-tabs-wrapper">
                        <div className="inventory-tabs" role="tablist">
                            {categories.map((category) => (
                                <button
                                    key={category.id}
                                    role="tab"
                                    aria-selected={activeCategory === category.id}
                                    className={`inventory-tab-btn ${activeCategory === category.id ? 'active' : ''}`}
                                    onClick={() => handleCategoryChange(category.id)}
                                >
                                    {category.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {filteredItems.length > 0 ? (
                        <div className="inventory-grid">
                            {filteredItems.map((item, index) => (
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
                                        <h3>{item.name}</h3>
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
                                            {/* {item.details.location && (
                                                <span className="highlight-spec">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" className="spec-icon">
                                                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                                                    </svg>
                                                    {item.details.location}
                                                </span>
                                            )} */}
                                            {item.details.length && (
                                                <span className="highlight-spec">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" viewBox="0 0 16 16" className="spec-icon">
                                                        <path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 8ZM7.646 1.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 2.707V5.5a.5.5 0 0 1-1 0V2.707L6.354 3.854a.5.5 0 1 1-.708-.708l2-2ZM8 10.5a.5.5 0 0 1 .5.5v2.793l1.146-1.147a.5.5 0 0 1 .708.708l-2 2a.5.5 0 0 1-.708 0l-2-2a.5.5 0 0 1 .708-.708L7.5 13.793V11a.5.5 0 0 1 .5-.5Z"/>
                                                    </svg>
                                                    Length: {item.details.length}
                                                </span>
                                            )}
                                        </div>
                                        
                                        <div className="card-price">Price: {item.price}</div>
                                        <button className="view-details-btn">View Details</button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="inventory-empty-state" ref={emptyStateRef}>
                            <div className="inventory-empty-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" viewBox="0 0 16 16">
                                    <path d="M6.428 1.151C6.708.527 7.265 0 8 0s1.292.527 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Z"/>
                                </svg>
                            </div>
                            <h3 className="inventory-empty-title">No Listings Available at the Moment</h3>
                            <p className="inventory-empty-description">
                                There are currently no listings available under {categories.find(c => c.id === activeCategory)?.label || 'this category'} in our public inventory. Our advisory team actively sources exclusive off-market aircraft, helicopters, and yachts globally. Contact our sales desk to register your interest or request private off-market options.
                            </p>
                            <div className="inventory-empty-actions">
                                <button 
                                    className="inventory-empty-btn primary"
                                    onClick={() => navigate('/contact')}
                                >
                                    Contact Sales Team
                                </button>
                                <button 
                                    className="inventory-empty-btn secondary"
                                    onClick={() => handleCategoryChange('all')}
                                >
                                    View All Inventory
                                </button>
                            </div>
                        </div>
                    )}
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
