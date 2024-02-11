import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import tank from '../images/tank.jpg'
import '../style//Home.css'; // Import the CSS file to add styles

const Home = () => {
 
  const [userData, setUserData] = useState({}); // Define state for user data using the useState hook

  useEffect(() => {
    // Retrieve user data from localStorage
    const storedUserData = localStorage.getItem('userData');

    if (storedUserData !== null) {
      const userData = JSON.parse(storedUserData);

      if(userData !== null) {
        setUserData(userData);

      }
    }
  }, []); 
  return (
    <div className="container"> {/* Apply a container for the elements of the page */}
      <h1 className="title">ברוכים הבאים לדרושים במילואים</h1>
      <p className="description">במהלך מלחמת "לרבות ברזל" הוחלט על הקמת פרויקט חדש על מנת להקל
      על הליכי הגיוס למילואים ומעבר בין יחידות שך מילואים שונות
      הניכם מוזמנים להצטרף לקהילת "דרושים למילואים" הגדולה בארץ ובכך לתרום 
      לצבא החזק , מוסרי והאיכותי ביותר בעולם!!!</p>
      <img src={tank} alt="Descripción de la imagen" className="image" /> {/* Add an image */}
      <Link to={userData && userData.type === "recruiters" ? "/recruiterHome" : userData.type === "volunteers" ? "/volunteerHome" : "/signin"}> 
        <button>לאיזור האישי</button>
      </Link>
    </div>
  );
};

export default Home;
