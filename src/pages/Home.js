import React from 'react';
import '../style//Home.css'; // Import the CSS file to add styles
import { Link } from 'react-router-dom';
import tank from '../images/tank.jpg'

const Home = ({userType}) => {
  return (
    <div className="container"> {/* Apply a container for the elements of the page */}
      <h1 className="title">ברוכים הבאים לדרושים במילואים</h1>
      <p className="description">במהלך מלחמת "לרבות ברזל" הוחלט על הקמת פרויקט חדש על מנת להקל
      על הליכי הגיוס למילואים ומעבר בין יחידות שך מילואים שונות
      הניכם מוזמנים להצטרף לקהילת "דרושים למילואים" הגדולה בארץ ובכך לתרום 
      לצבא החזק , מוסרי והאיכותי ביותר בעולם!!!</p>
      <img src={tank} alt="Descripción de la imagen" className="image" /> {/* Add an image */}
      <Link to={userType === 'recruiter' ? "/recruiterHome" : userType === 'volunteer' ? "/volunteerHome" : "/signin"}>
        <button>לאיזור האישי</button>
      </Link>
    </div>
  );
};

export default Home;
