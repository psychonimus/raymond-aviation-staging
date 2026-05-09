import React, { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useParams, useNavigate } from 'react-router-dom';
import { gsap } from 'gsap';
import { inventoryData } from '../../data/inventoryData';
import Footer from '../Footer/Footer';
import '../Inventory/Inventory.css';

const InventoryDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const item = inventoryData.find(i => i.id === id);
    const contentRef = useRef(null);
    const sidebarRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [selectedImage]);

    useEffect(() => {
        if (!item) {
            navigate('/inventory');
            return;
        }

        window.scrollTo(0, 0);

        const tl = gsap.timeline();
        tl.fromTo(".detail-hero-content h1",
            { y: 50, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.2 }
        )
            .fromTo(contentRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.5"
            )
            .fromTo(sidebarRef.current,
                { x: 30, opacity: 0 },
                { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
                "-=0.6"
            );
    }, [item, navigate]);

    if (!item) return null;

    return (
        <div className="inventory-detail">
            <Helmet>
                <title>{`${item.name} | ${item.category} for Sale | Raymond Aviation`}</title>
                <meta name="description" content={`View details for the ${item.year} ${item.name}. ${item.description.substring(0, 150)}...`} />
            </Helmet>
            <section className="detail-hero" onClick={() => setSelectedImage(item.image)}>
                <img src={item.image} alt={item.name} />
                <div className="detail-hero-overlay">
                    <div className="detail-hero-content">
                        <div className="category-badge" style={{ position: 'static', display: 'inline-block', marginBottom: '20px' }}>
                            {item.category}
                        </div>
                        <h1>{item.name}</h1>
                    </div>
                </div>
            </section>

            <div className="container detail-main px-3 px-md-0">
                <div className="detail-grid">
                    <div className="detail-content" ref={contentRef}>
                        <div className="detail-description">
                            <h2>Asset Overview</h2>
                            <p>{item.description}</p>
                        </div>

                        <div className="detail-specs">
                            <h2>Specifications</h2>
                            <div className="specs-grid">
                                <div className="spec-item">
                                    <span className="spec-label">Year</span>
                                    <span className="spec-value">{item.year}</span>
                                </div>
                                {item.details.range && (
                                    <div className="spec-item">
                                        <span className="spec-label">Max Range</span>
                                        <span className="spec-value">{item.details.range}</span>
                                    </div>
                                )}
                                {item.details.speed && (
                                    <div className="spec-item">
                                        <span className="spec-label">Cruise Speed</span>
                                        <span className="spec-value">{item.details.speed}</span>
                                    </div>
                                )}
                                {item.details.capacity && (
                                    <div className="spec-item">
                                        <span className="spec-label">Capacity</span>
                                        <span className="spec-value">{item.details.capacity}</span>
                                    </div>
                                )}
                                {item.details.hours && (
                                    <div className="spec-item">
                                        <span className="spec-label">Total Hours</span>
                                        <span className="spec-value">{item.details.hours}</span>
                                    </div>
                                )}
                                {item.details.length && (
                                    <div className="spec-item">
                                        <span className="spec-label">Length</span>
                                        <span className="spec-value">{item.details.length}</span>
                                    </div>
                                )}
                                {item.details.engine && (
                                    <div className="spec-item">
                                        <span className="spec-label">Engines</span>
                                        <span className="spec-value">{item.details.engine}</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className="detail-features">
                            <h2>Key Features</h2>
                            <ul className="features-list">
                                {item.details.features.map((feature, idx) => (
                                    <li key={idx}>{feature}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="image-gallery">
                            {item.images.slice(1).map((img, idx) => (
                                <div className="gallery-img" key={idx} onClick={() => setSelectedImage(img)}>
                                    <img src={img} alt={`${item.name} gallery ${idx}`} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="detail-sidebar" ref={sidebarRef}>
                        <div className="sidebar-price">Asking Price</div>
                        <span className="sidebar-amount">{item.price}</span>

                        <p style={{ color: 'var(--para)', fontSize: '0.9rem', marginBottom: '20px' }}>
                            Our experts are available for a private consultation and to arrange a viewing of this {item.category.toLowerCase()}.
                        </p>

                        <a href="/contact" className="enquire-btn">Enquire Now</a>
                    </div>
                </div>
            </div>

            <Footer
                FooterHeader="SECURE YOUR NEXT ASSET"
                FooterTaglineOne="Professional Inspection"
                FooterTaglineTwo="Title Search & Clearance"
                FooterTaglineThree="Post-Sale Management"
                btnTxt="Enquire Now"
            />

            {/* Image Preview Modal */}
            <div className={`image-preview-modal ${selectedImage ? 'active' : ''}`} onClick={() => setSelectedImage(null)}>
                <div className="preview-content" onClick={e => e.stopPropagation()}>
                    <button className="close-preview" onClick={() => setSelectedImage(null)}>&times;</button>
                    <img src={selectedImage} alt="Preview" />
                </div>
            </div>
        </div>
    );
};

export default InventoryDetail;
