import React, { useState } from 'react';

// Translation
import { useTranslation } from 'react-i18next';

import "../style/AddPosition.css"

const AddPosition = ({ id, type, onPositionAdded, onCancel }) => {

  const { t } = useTranslation();   // translation

  const [positionData, setFormData] = useState({
    positionTitle: '',
    unitName: '',
    service: '',
    availability: '',
    jobType: '',
    location: '',
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
      const postData = {
        publisherId: id,
        type: type,
        ...positionData,
      };
      console.log("postData is: ", postData);

      // console.log("postData: ", postData);
      const response = await fetch('http://localhost:3001/api/addPosition', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Send cookies (credentials) with the request
        body: JSON.stringify(postData),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      // Parse the response JSON
      const responseData = await response.json();
  
      // Log the response from the server
      console.log('Server Response:', responseData);
      // window.alert("added position");
      onPositionAdded();
    } catch (error) {
      console.error('Error:', error);
    }
  };


  return (
    <div className="add-position-container">
      <h2>{t("addNewPosition")}</h2>
      <form className="add-position-form" onSubmit={handleSubmit}>

        <label htmlFor="positionTitle">תאור המשרה</label>
        <input
          type="text"
          id="positionTitle"
          name="positionTitle"
          value={positionData.positionTitle}
          onChange={handleChange}
          required
        /><br/>

        <label htmlFor="unitName">יחידה</label>
        <input
          type="text"
          id="unitName"
          name="unitName"
          value={positionData.unitName}
          onChange={handleChange}
          required
        /><br/>

        <label className="label" htmlFor="service">סוג שירות</label>
        <select 
          className="select-input"
          id="service" 
          name="service" 
          value={positionData.service} 
          onChange={handleChange} >
          <option value=""></option>
          <option value={t("lohem")}>{t("lohem")}</option>
          <option value={t("tomeh")}>{t("tomeh")}</option>
          <option value={t("job")}>{t("job")}</option>
        </select>

        <label className="label" htmlFor="availability">זמינות</label>
        <select 
          className="select-input" 
          id="availability" 
          name="availability" 
          value={positionData.availability} 
          onChange={handleChange} >
          <option value=""></option>
          <option value={t("immediate")}>{t("immediate")}</option>
          <option value={t("notImmediate")}>{t("notImmediate")}</option>
        </select>

        <label htmlFor={t("jobType")}>זמינות</label>
        <select 
          className="select-input" 
          id="jobType" 
          name="jobType" 
          value={positionData.jobType} 
          onChange={handleChange} >
          <option value=""></option>
            <option value={t("permanent")}>{t("permanent")}</option>
          <option value={t("temporary")}>{t("temporary")}</option>
        </select>
        

        <label htmlFor="location">מיקום</label>
        <select 
          className="select-input" 
          id="location" 
          name="location" 
          value={positionData.location} 
          onChange={handleChange} >
          <option value=""></option>
          <option value={t("north")}>{t("north")}</option>
          <option value={t("center")}>{t("center")}</option>
          <option value={t("south")}>{t("south")}</option>
        </select>

        <label htmlFor="jobDescription">תאור כללי</label>
        <textarea
          id="jobDescription"
          name="jobDescription"
          rows="6" cols="30"
          value={positionData.jobDescription}
          onChange={handleChange}
          required
        ></textarea><br/>

        

        <button type="submit">הוסף משרה</button>
        <button type="button" onClick={onCancel}>בטל</button>
      </form>
    </div>
  );
};

export default AddPosition;