import React, { useState } from 'react';

import "../style/AddPosition.css"

const AddPosition = () => {
  const [formData, setFormData] = useState({
    positionTitle: '',
    companyName: '',
    jobDescription: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
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
          value={formData.positionTitle}
          onChange={handleChange}
          required
        /><br/>

        <label htmlFor="companyName">Company Name:</label>
        <input
          type="text"
          id="companyName"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
        /><br/>

        <label htmlFor="jobDescription">Job Description:</label>
        <textarea
          id="jobDescription"
          name="jobDescription"
          value={formData.jobDescription}
          onChange={handleChange}
          required
        ></textarea><br/>

        <button type="submit">Submit</button>
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