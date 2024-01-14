import React, { useState } from 'react';

import "../style/AddPosition.css"

const AddPosition = ({ onPositionAdded, onCancel }) => {
  const [positionData, setFormData] = useState({
    positionTitle: '',
    companyName: '',
    jobDescription: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...positionData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/addPosition', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Send cookies (credentials) with the request
        body: JSON.stringify(positionData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the response JSON
      const responseData = await response.json();
  
      // Log the response from the server
      console.log('Server Response:', responseData.message);
      if(responseData.message === 'success') {
        onPositionAdded();
        window.alert("added position");
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="add-position-container">
      <h2>Add New Position</h2>
      <form className="add-position-form" onSubmit={handleSubmit}>
        <label htmlFor="positionTitle">Position Title:</label>
        <input
          type="text"
          id="positionTitle"
          name="positionTitle"
          value={positionData.positionTitle}
          onChange={handleChange}
          required
        /><br/>

        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={positionData.companyName}
          onChange={handleChange}
          required
        /><br/>

        <label htmlFor="jobDescription">Job Description:</label>
        <textarea
          id="jobDescription"
          name="jobDescription"
          value={positionData.jobDescription}
          onChange={handleChange}
          required
        ></textarea><br/>

        <button type="submit">Add Position</button>
        {/* "Cancel" button */}
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default AddPosition;

// טבחים?
// 🚛 נהגים?
// 📅 מעוניינים להתגייס לטובת תעסוקה מבצעית ביו"ש בין התאריכים 6/2-13/3?
// - - - - - - - - - - - - - - - - - - - - 
// לגדוד חה"ן דרושים:
// ++ טבחים
// ✅ בעלי ניסיון צבאי או אזרחי
// ✅ עם לב ונשמה למטבח 

// ++ נהגים
// ✅ משא כבד, אמבולנס ו/או נהגים עם היתרים לזאב או דוד ממוגן
// ✅ עם רישיון והיתר בתוקף
// ✅ עדיפות לבעלי ניסיון מבצעי ביו״ש
// - - - - - - - - - - - - - - - - - - - - 
// לפרטים נוספים - נא שלחו הודעת וואטסאפ מסודרת אל:
// (1) איציק 053-7245110; או
// (2) דויד: 054-2450505
// בה כלולים הפרטים הבאים:
// - שם מלא
// - מספר אישי
// - מספר פלאפון
// - תפקיד מבוקש
// - ניסיון רלוונטי
// - פירוט סטטוס מילואים
// - - - - - - - - - - - - - - - - - - - -
// 🔷 הצטרפות לגדוד חה"ן
// 🔷 גדוד הנדסה צפוני המורכב מפלוגות צמ"ה, פלסים וס"פ
// __
// דרושים - למילואים
// - - - - - - - - - - - - - - - - - - - -
// https://t.me/+-UAcDAk3oRo3ZDhk