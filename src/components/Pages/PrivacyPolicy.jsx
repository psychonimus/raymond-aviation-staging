import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { gsap } from 'gsap';
import Footer from '../Footer/Footer';
import '../LegalContent/LegalContent.css';

const PrivacyPolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        
        const tl = gsap.timeline();
        tl.from(".legal-hero h1", { opacity: 0, y: 30, duration: 0.8, ease: "power3.out" })
          .from(".legal-hero p", { opacity: 0, y: 20, duration: 0.6, ease: "power3.out" }, "-=0.4")
          .from(".legal-section", {
              opacity: 0,
              y: 30,
              duration: 0.8,
              stagger: 0.1,
              ease: "power3.out",
              clearProps: "all" // Ensure styles are cleared after animation
          }, "-=0.2");
    }, []);

    return (
        <div className="legal-page">
            <Helmet>
                <title>Privacy Policy & Terms | Raymond Aviation</title>
                <meta name="description" content="Read the Privacy Policy and Terms and Conditions of Raymond Aviation." />
            </Helmet>

            <header className="legal-hero">
                <div className="container">
                    <h1>Privacy Policy & Terms</h1>
                    <p>Last updated: May 09, 2026</p>
                </div>
            </header>

            <main className="legal-content">
                <section className="legal-section">
                    <p>
                        These Terms and Conditions (“Terms”) govern your access to and use of the website operated by Raymond Limited (“Company”, “we”, “our”, or “us”), including all information, services, enquiries, charter requests, aviation-related content, and communications made available through the website (“Website”).
                    </p>
                    <p>
                        By accessing or using the Website, you agree to be bound by these Terms. If you do not agree, you must discontinue use of the Website immediately.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>1. ELIGIBILITY</h2>
                    <p>You represent and warrant that:</p>
                    <ul>
                        <li>You are competent to contract under the provisions of the Indian Contract Act, 1872;</li>
                        <li>You are at least 18 years of age; and</li>
                        <li>All information submitted by you through the Website is accurate and complete.</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>2. NATURE OF SERVICES</h2>
                    <p>The Website provides information regarding aviation-related services including but not limited to:</p>
                    <ul>
                        <li>Aircraft charter services;</li>
                        <li>Helicopter charter services;</li>
                        <li>Aviation consultancy;</li>
                        <li>Maintenance and aviation support services;</li>
                        <li>Charter enquiries and quotation requests; and</li>
                        <li>Other ancillary aviation-related offerings.</li>
                    </ul>
                    <p>
                        Submission of an enquiry, request for quotation, or communication through the Website does not constitute confirmation, acceptance, or guarantee of any booking, charter, or service. Any aviation services may be subject to aircraft availability, operational feasibility, weather conditions, DGCA approvals, regulatory permissions, security clearances, and execution of separate commercial agreements.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>3. NO ONLINE BOOKING CONTRACT</h2>
                    <p>
                        The Website is intended primarily for informational and enquiry purposes unless expressly stated otherwise. No binding charter agreement, aviation service contract, or transportation obligation shall arise merely through the use of the Website, submission of a form, receipt of an automated email, or preliminary discussions.
                    </p>
                    <p>
                        Any confirmed aviation service shall be governed by a separate executed agreement, charter contract, work order, quotation, or invoice issued by the Company.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>4. USER OBLIGATIONS</h2>
                    <p>You agree that you shall not:</p>
                    <ul>
                        <li>Use the Website for any unlawful purpose;</li>
                        <li>Submit false, misleading, or fraudulent information;</li>
                        <li>Interfere with Website functionality or security;</li>
                        <li>Attempt unauthorized access to the Website, servers, or systems;</li>
                        <li>Upload malware, viruses, or malicious code;</li>
                        <li>Copy, reproduce, scrape, or commercially exploit Website content without prior written consent;</li>
                        <li>Use the Website in violation of applicable aviation, privacy, cyber, or export control laws.</li>
                    </ul>
                </section>

                <section className="legal-section">
                    <h2>5. INTELLECTUAL PROPERTY RIGHTS</h2>
                    <p>
                        All intellectual property rights in and to the Website, including trademarks, trade names, logos, branding, aircraft images, layouts, graphics, videos, text, designs, software, and proprietary content, shall remain the exclusive property of Raymond Limited and/or its licensors.
                    </p>
                    <p>
                        Unauthorized use of the intellectual property may violate applicable laws including the Copyright Act, 1957 and Trade Marks Act, 1999.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>6. THIRD-PARTY LINKS</h2>
                    <p>
                        The Website may contain links to third-party websites. Such links are provided solely for convenience and do not imply endorsement, control, or responsibility by the Company. Users access third-party websites at their own risk.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>7. DISCLAIMER</h2>
                    <p>
                        The Website and all content are provided on an “as is” and “as available” basis. The Company disclaims all warranties, express or implied, including accuracy, completeness, reliability, merchantability, and fitness for a particular purpose.
                    </p>
                    <p>
                        Aviation schedules, aircraft specifications, fleet details, and operational information are indicative and may change without notice.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>8. LIMITATION OF LIABILITY</h2>
                    <p>
                        To the fullest extent permitted under applicable law, Raymond Aviation shall not be liable for any indirect, incidental, consequential, special, or punitive losses arising from the use of the Website. The aggregate liability of the Company shall not exceed INR 10,000.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>9. INDEMNITY</h2>
                    <p>
                        You agree to indemnify and hold harmless Raymond Aviation from and against any claims, liabilities, losses, and expenses arising out of your breach of these Terms or misuse of the Website.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>10. PRIVACY</h2>
                    <p>
                        Your use of the Website is also governed by our Privacy Policy. By using the Website, you consent to the collection and processing of information in accordance with applicable Indian laws, including the Digital Personal Data Protection Act, 2023.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>11. AVIATION REGULATORY COMPLIANCE</h2>
                    <p>
                        Any aviation-related services are subject to DGCA regulations, airport authority regulations, air traffic permissions, customs and immigration requirements, and other applicable laws.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>12. FORCE MAJEURE</h2>
                    <p>
                        The Company shall not be liable for any failure arising due to events beyond reasonable control, including weather conditions, governmental restrictions, airspace closures, strikes, war, or natural disasters.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>14. GOVERNING LAW AND JURISDICTION</h2>
                    <p>
                        These Terms shall be governed by and construed in accordance with the laws of India. Courts at Mumbai, Maharashtra shall have exclusive jurisdiction.
                    </p>
                </section>

                <section className="legal-section">
                    <h2>15. DISPUTE RESOLUTION</h2>
                    <p>
                        Any dispute shall first be attempted to be resolved amicably. Failing such resolution, the dispute shall be referred to arbitration in Mumbai in accordance with the Arbitration and Conciliation Act, 1996.
                    </p>
                </section>

                <div className="legal-contact-box">
                    <h3>Contact Us</h3>
                    <p>For any queries regarding these Terms, you may contact:</p>
                    <p><strong>Raymond Aviation</strong></p>
                    <p>Mumbai, Maharashtra, India</p>
                    <p>Email: aviation@raymond.in</p>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
