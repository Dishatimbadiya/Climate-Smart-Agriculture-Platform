// // C:\Users\Disha\Climate-Smart-Agriculture-Platform\mongodb\client\src\components\Home.jsx

// import React from 'react';
// import { Link } from 'react-router-dom';
// import './Home.css'; 


// const Home = () => {
//     return (
//         <div className="home-container">
//             <h1>Welcome to the Climate-Smart Agriculture Platform</h1>
//             <p className="description">
//                 Our platform aims to provide farmers with innovative solutions to predict crop yields 
//                 and make informed decisions based on climate data. Join us in promoting sustainable agriculture!
//             </p>

//             <div className="card-container">
//                 <div className="card">
//                     <h2>About Us</h2>
//                     <p>
//                         The Agriculture, Farmers Welfare and Co-operation Department of Gujarat is dedicated to enhancing agricultural productivity 
//                         and ensuring the welfare of farmers through scientific methods and innovative policies.
//                     </p>
//                 </div>

//                 <div className="card">
//                     <h2>Key Objectives</h2>
//                     <ul>
//                         <li>Increase agricultural production and productivity.</li>
//                         <li>Enhance farmer income and welfare.</li>
//                         <li>Promote sustainable agricultural practices.</li>
//                         <li>Ensure food security through effective policies.</li>
//                         <li>Facilitate research and development in agriculture.</li>
//                     </ul>
//                 </div>

//                 <div className="card">
//                     <h2>Key Services</h2>
//                     <ul>
//                         <li>Agricultural Production and Productivity Enhancement</li>
//                         <li>Soil Health Management and Conservation</li>
//                         <li>Animal Husbandry and Dairy Development</li>
//                         <li>Fisheries and Aquaculture Support</li>
//                         <li>Research and Education in Agricultural Practices</li>
//                         <li>Support for Organic Farming and Sustainable Practices</li>
//                     </ul>
//                 </div>

//                 <div className="card">
//                     <h2>Programs & Schemes</h2>
//                     <p>Our department runs various programs and schemes aimed at promoting agricultural development:</p>
//                     <ul>
//                         <li>PM-KISAN: Financial support to farmers.</li>
//                         <li>Soil Health Card Scheme: Assessing soil health for better yield.</li>
//                         <li>National Agriculture Market (e-NAM): Online trading platform for agricultural produce.</li>
//                         <li>Fisheries Development Program: Enhancing fish production and sustainability.</li>
//                     </ul>
//                 </div>

//                 <div className="card">
//                     <h2>Recent Updates</h2>
//                     <p>Stay tuned for the latest news and updates in the field of agriculture!</p>
//                 </div>

//                 <div className="card">
//                     <h2>Statistics</h2>
//                     <p>Here are some important statistics highlighting the significance of agriculture:</p>
//                     <ul>
//                         <li>Agriculture contributes approximately 18% to Gujarat's GDP.</li>
//                         <li>Over 70% of the population in Gujarat is engaged in agricultural activities.</li>
//                         <li>Gujarat has seen a remarkable increase in agricultural production, particularly in cotton and groundnut.</li>
//                     </ul>
//                 </div>
//             </div>

//             <div className="image-container">
//                 <img 
//                     src="https://images.pexels.com/photos/533346/pexels-photo-533346.jpeg?auto=compress&cs=tinysrgb&w=600" 
//                     alt="Agriculture"
//                     className="home-image"
//                 />
//                 <img 
//                     src="https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
//                     alt="Crop Prediction"
//                     className="home-image"
//                 />
//             </div>

//             <footer className="footer">
//                 <p>&copy; {new Date().getFullYear()} Climate-Smart Agriculture. All rights reserved.</p>
//                 <p>Contact us: support@agricultureplatform.com</p>
//             </footer>
//         </div>
//     );
// };

// export default Home;
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; 

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="blackText">Welcome to the Climate-Smart Agriculture Platform</h1>
            <p className="description">
                Our platform provides farmers with innovative solutions to predict crop yields 
                and make informed decisions based on real-time climate data. Join us in promoting sustainable agriculture practices and building a more resilient agricultural future.
            </p>

            <div className="card-container">
                <div className="card">
                    <h2>About Us</h2>
                    <p>
                        The Agriculture, Farmers Welfare and Co-operation Department of Gujarat is committed to boosting agricultural productivity and ensuring the well-being of farmers through advanced scientific methods, technological innovations, and farmer-centric policies.
                    </p>
                    <Link to="/about" className="learn-more">Learn More</Link>
                </div>

                <div className="card">
                    <h2>Key Objectives</h2>
                    <ul>
                        <li>Increase agricultural production and productivity.</li>
                        <li>Enhance farmer income and welfare.</li>
                        <li>Promote sustainable agricultural practices.</li>
                        <li>Ensure food security through effective policies.</li>
                        <li>Facilitate research and development in agriculture.</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>Key Services</h2>
                    <ul>
                        <li>Agricultural Production and Productivity Enhancement</li>
                        <li>Soil Health Management and Conservation</li>
                        <li>Animal Husbandry and Dairy Development</li>
                        <li>Fisheries and Aquaculture Support</li>
                        <li>Research and Education in Agricultural Practices</li>
                        <li>Support for Organic Farming and Sustainable Practices</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>Programs & Schemes</h2>
                    <p>Our department runs various programs aimed at supporting agricultural development:</p>
                    <ul>
                        <li>PM-KISAN: Financial support to farmers.</li>
                        <li>Soil Health Card Scheme: Assessing soil health for better yield.</li>
                        <li>National Agriculture Market (e-NAM): Online trading platform for agricultural produce.</li>
                        <li>Fisheries Development Program: Enhancing fish production and sustainability.</li>
                    </ul>
                </div>

                <div className="card">
                    <h2>Farmer Success Stories</h2>
                    <p>Read about how our platform has empowered farmers to adopt climate-smart practices and improve their yields.</p>
                    <Link to="/success-stories" className="learn-more">Explore Stories</Link>
                </div>

                <div className="card">
                    <h2>Partners & Collaborators</h2>
                    <p>We are proud to collaborate with leading organizations to bring the best resources and innovations to farmers.</p>
                    <Link to="/partners" className="learn-more">Our Partners</Link>
                </div>

                <div className="card">
                    <h2>Recent Updates</h2>
                    <p>Stay informed about the latest developments in agriculture, climate trends, and technological advancements!</p>
                </div>

                <div className="card">
                    <h2>Statistics</h2>
                    <p>Agriculture plays a pivotal role in our region. Here are some key statistics:</p>
                    <ul>
                        <li>Agriculture contributes 18% to Gujarat's GDP.</li>
                        <li>Over 70% of Gujarat's population engages in agricultural activities.</li>
                        <li>Significant growth in cotton, groundnut, and other crops in recent years.</li>
                    </ul>
                </div>
            </div>

            <div className="image-container">
                <img 
                    src="https://images.pexels.com/photos/533346/pexels-photo-533346.jpeg?auto=compress&cs=tinysrgb&w=600" 
                    alt="Agriculture"
                    className="home-image"
                />
                <img 
                    src="https://images.pexels.com/photos/2518861/pexels-photo-2518861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                    alt="Crop Prediction"
                    className="home-image"
                />
            </div>

            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Climate-Smart Agriculture. All rights reserved.</p>
                <p>Contact us: <a href="mailto:support@agricultureplatform.com">support@agricultureplatform.com</a></p>
            </footer>
        </div>
    );
};

export default Home;
