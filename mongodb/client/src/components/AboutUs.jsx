import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <>
        <br/>
        <br/>
        <br/>
        <div className="about-container">
            <h1>About Us</h1>
            <p className="intro-text">
                Welcome to the Climate-Smart Agriculture Platform, where we leverage technology to empower farmers with the information they need to sustainably manage their crops. Our mission is to promote sustainable agricultural practices that adapt to the ever-changing climate, ensuring food security and farmer welfare.
            </p>

            <section className="mission-vision">
                <div className="mission">
                    <h2>Our Mission</h2>
                    <p>
                        To equip farmers with data-driven insights and advanced tools for enhancing productivity, minimizing environmental impacts, and promoting resilience in the face of climate change.
                    </p>
                </div>
                <div className="vision">
                    <h2>Our Vision</h2>
                    <p>
                        We envision a world where agriculture is sustainable, climate-resilient, and resource-efficient. We aim to build a future where every farmer has access to the tools and knowledge they need to thrive in a rapidly changing environment.
                    </p>
                </div>
            </section>

            <section className="goals">
                <h2>Our Goals</h2>
                <ul>
                    <li>Empower farmers with actionable climate and crop data.</li>
                    <li>Promote sustainable and eco-friendly farming practices.</li>
                    <li>Facilitate better decision-making through predictive crop yield models.</li>
                    <li>Encourage collaboration between farmers, researchers, and policymakers.</li>
                </ul>
            </section>

            <section className="achievements">
                <h2>Our Achievements</h2>
                <ul>
                    <li>Successfully implemented crop prediction models for over 1000 farmers.</li>
                    <li>Partnered with leading agricultural research institutes to improve data accuracy.</li>
                    <li>Reduced farming costs by 20% for over 500 smallholder farmers using precision agriculture tools.</li>
                </ul>
            </section>

            <footer className="about-footer">
                <p>&copy; {new Date().getFullYear()} Climate-Smart Agriculture. All rights reserved.</p>
            </footer>
        </div>
        <br/>
        <br/>
        <br/>
        </>
    );
};

export default AboutUs;
