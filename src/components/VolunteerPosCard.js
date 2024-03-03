import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Navigator from "../components/Navigator";
// Translation
import { useTranslation } from 'react-i18next';


const VolunteerPosCard = ( positionData ) => {

    const { t } = useTranslation();   // translation
    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);
    const [editMode, setEditMode] = useState(false);
    const [loading, setLoading] = useState(false);
    const [updatedPositionData, setUpdatedPositionData] = useState({
        positionTitle: positionData.positionTitle,
        unitName: positionData.unitName,
        service: positionData.service,
        availability: positionData.availability,
        jobType: positionData.jobType,
        location: positionData.location,
        jobDescription: positionData.jobDescription,
    });

    useEffect(() => {
        const storedUserData = localStorage.getItem('userData');
        const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;
    
        // Call navigate inside useEffect with a condition to prevent infinite updates
        if (parsedUserData === null) {
          navigate("/signin");
        }
    
        setUserData(parsedUserData);
        
      }, []); // Only include navigate as a dependency
      
      if (userData === null) {
        return null;
      }


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedPositionData({ ...updatedPositionData, [name]: value });
    };

    const applyToPosition = async () => {
        try {
          const positionID = positionData._id;
          const applier_ID = userData._id;
          const fieldName = 'applayers';
          const response = await fetch('http://localhost:3001/api/insertToArray', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include', // Send cookies (credentials) with the request
            body: JSON.stringify({
              _id: positionData._id,
              publisherId: positionData.publisherId,
              applayer_Id: userData._id,
            }),
          });
       
        } catch (error) {
          console.error('Error:', error);
        }
      };

  

    return (
        <div>
       
            <div className="position-card"> {/* Add class "position-card" */}
                <h2>{"פרטי משרה מלאים"}</h2>
                <div className="profile-details">
                 {positionData && (
                  <div>
                <p>
                <strong>{t("positionTitle")}:</strong>{" "}
                {editMode ? (
                  <input
                    type="text"
                    name="positionTitle"
                    value={updatedPositionData.positionTitle}
                    onChange={handleInputChange}
                  />
                ) : (
                    positionData.positionTitle
                )}
              </p>

              <p>
                <strong>{t("unitName")}:</strong>{" "}
                {editMode ? (
                    <input
                    type="text"
                    name="unitName"
                    value={updatedPositionData.unitName}
                    onChange={handleInputChange}
                    />
                ) : (
                    positionData.unitName
                )}
                </p>


                <p>
                <strong>{t("service")}: </strong>
                {editMode ? (
                    <select
                    name="service"
                    value={updatedPositionData.service}
                    onChange={handleInputChange}
                    >
                    {[
                        { value: '', label: positionData.service },
                        { value: t("lohem"), label: t("lohem") },
                        { value: t("tomeh"), label: t("tomeh") },
                        { value: t("job"), label: t("job") },
                    ].filter(option => option.value !== positionData.service).map(option => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                    </select>
                ) : (
                    positionData.service
                )}
                </p>

              
                    <p>
                    <strong>{t("availability")}: </strong>
                    {editMode ? (
                        <select
                        name="availability"
                        value={updatedPositionData.availability}
                        onChange={handleInputChange}
                        >
                        {[
                            { value: '', label: positionData.availability },
                            { value: t("immediate"), label: t("immediate") },
                            { value: t("notImmediate"), label: t("notImmediate") },
                        ].filter(option => option.value !== positionData.availability).map(option => (
                            <option key={option.value} value={option.value}>
                            {option.label}
                            </option>
                        ))}
                        </select>
                    ) : (
                        positionData.availability
                    )}
                    </p>



                <p>
                <strong>{t("jobType")}: </strong>
                {editMode ? (
                    <select
                    name="jobType"
                    value={updatedPositionData.jobType}
                    onChange={handleInputChange}
                    >
                    {[
                        { value: '', label: positionData.jobType },
                        { value: t("permanent"), label: t("permanent") },
                        { value: t("temporary"), label: t("temporary") },
                    ].filter(option => option.value !== positionData.jobType).map(option => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                    </select>
                ) : (
                    positionData.jobType
                )}
                </p>


                <p>
                <strong>{t("location")}: </strong>
                {editMode ? (
                    <select
                    name="location"
                    value={updatedPositionData.location}
                    onChange={handleInputChange}
                    >
                    {[
                        { value: '', label: positionData.location },
                        { value: t("north"), label: t("north") },
                        { value: t("center"), label: t("center") },
                        { value: t("south"), label: t("south") },
                    ].filter(option => option.value !== positionData.location).map(option => (
                        <option key={option.value} value={option.value}>
                        {option.label}
                        </option>
                    ))}
                    </select>
                ) : (
                    positionData.location
                )}
                </p>


                
                <p>
                    <strong>{t("jobDescription")}:</strong>{""} 
                    {editMode ? (
                        <input
                            type="text"
                            name="jobDescription"
                            value={updatedPositionData.jobDescription}
                            onChange={handleInputChange}
                        />
                    ) : (
                        positionData.jobDescription
                    )}</p>
                </div>
          )}
        </div>

            </div>
        
            {loading && (
            <div className="loading-overlay">
              <div className="loading-spinner"></div>
            </div>
          )}
          
            <button onClick={applyToPosition}>{t("apply")}</button>
        
        </div>
    )
}

export default VolunteerPosCard;