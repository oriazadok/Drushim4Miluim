import '../style//AboutUs.css'; // Import the CSS file to add styles
import { Link } from 'react-router-dom';
import React from 'react';
import tzav8 from '../images/tzav8.jpg'

const AboutUs = () => {
    return (
        <div className="AboutUs">
            <header className="AboutUsHeader">
                <img src={tzav8} alt="Descripción de la imagen" className="image" /> {/* Add an image */}
                <p className="description">
                This project was developed in order to help recruiters and volunteers for miluim find each other.
                If you want to volunteer, you can enter your details and start looking for your best match position.
                We are students for Computer Science in University of Ariel, 3rd year. We all  were called to the reserves and understood the need for such plutform.
                </p>
                <Link to={"/"}> 
                    <button>back</button>
                </Link>
            </header>
        </div>
    );
}
    
export default AboutUs;