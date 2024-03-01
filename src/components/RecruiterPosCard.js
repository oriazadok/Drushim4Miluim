import React, {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";
import Navigator from "../components/Navigator";
// Translation
import { useTranslation } from 'react-i18next';


const RecruiterPosCard = ( positionData, setPositionData ) => {

    console.log("possssssss: ", positionData);

    const { t } = useTranslation();   // translation
    const navigate = useNavigate();
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
    const [editSuccess, setEditSuccess] = useState(false);

    // useEffect(() => {
    //     const storedPositionData = localStorage.getItem("positgiionData");
    //     const parsedPositionData = storedPositionData ? JSON.parse(storedPositionData) : null;
    
    //     if (parsedPositionData === null) {
    //       navigate("/signin");
    //     }
    
    //     setPositionData(parsedPositionData);
    //     setUpdatedPositionData(parsedPositionData);
    //   }, [navigate]);

    // const handleChange = (e) => {
    //     setUpdatedPositionData({
    //     ...updatedPositionData,
    //     [e.target.name]: e.target.value,
    //     });
    // };

    const updateData = () => {
        setPositionData();
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedPositionData({ ...updatedPositionData, [name]: value });
    };

  //const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const postData = {
//         publisherId: positionData._id,
//         type: positionData._type,
//         ...updatedPositionData,
//       };
//       console.log("postData is: ", postData);

//       // console.log("postData: ", postData);
//       const response = await fetch('http://localhost:3001/api/addPosition', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         credentials: 'include', // Send cookies (credentials) with the request
//         body: JSON.stringify(postData),
//       });
  
//       if (!response.ok) {
//         throw new Error(`HTTP error! Status: ${response.status}`);
//       }
  
//       // Parse the response JSON
//       const responseData = await response.json();
  
//       // Log the response from the server
//       console.log('Server Response:', responseData);
//         setEditSuccess(true);
//         setTimeout(() => setEditSuccess(false), 2000);
//       // window.alert("added position");
//       //onPositionAdded();
//     } catch (error) {
//       console.error('Error:', error);
//     }
  // };

  const update = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3001/api/updatePositionData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify({
          _id: positionData._id,
          type: positionData.type,
          updatedPositionData: updatedPositionData,
        }),
      });

      console.log("cosomo")
      console.log(response);

      setLoading(false);

      if (response.ok) {
        const responseData = await response.json();
        // localStorage.setItem("userData", JSON.stringify(responseData));
        setEditMode(false);
        setEditSuccess(true);
        setTimeout(() => setEditSuccess(false), 2000);
        updateData();
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

    // const positionCandidates {};
    
    const deletePosition = async () => {
        setLoading(true);
        try {
            const response = await fetch('http://localhost:3001/api/deletePosition', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              credentials: 'include', // Send cookies (credentials) with the request
              body: JSON.stringify({_id: positionData._id, publisherId: positionData.publisherId}),
            });
      
            if (response.ok) {
              const data = await response.json();
            } else {
              console.error(`HTTP error! Status: ${response.status}`);
            }
          } catch (error) {
            console.error('Error:', error);
          }
    };

    const editPosition = async () => {
        setEditMode(true);
        // try {
        //     const response = await fetch('http://localhost:3001/api/editPosition', {
        //       method: 'POST',
        //       headers: {
        //         'Content-Type': 'application/json',
        //       },
        //       credentials: 'include', // Send cookies (credentials) with the request
        //       body: JSON.stringify({_id: positionData._id, publisherId: positionData.publisherId}),
        //     });
      
        //     if (response.ok) {
        //       const data = await response.json();
        //     } else {
        //       console.error(`HTTP error! Status: ${response.status}`);
        //     }
        //   } catch (error) {
        //     console.error('Error:', error);
        //   }

    };

    return (
        <div>
       
            <div className="position-card"> {/* Add class "position-card" */}
                <h2>{"פרטי משרה מלאים"}</h2>
                {editSuccess && <p className="success-message">{t("successful")}</p>}
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

                {/* <p>
                    <strong>{t("service")}: </strong>
                    {editMode ? (
                        <select
                        name="service"
                        value={updatedPositionData.service}
                        onChange={handleInputChange}
                        >
                        <option value=""></option>
                        <option value={t("lohem")}>{t("lohem")}</option>
                        <option value={t("tomeh")}>{t("tomeh")}</option>
                        <option value={t("job")}>{t("job")}</option>
                        </select>
                    ) : (
                        positionData.service
                    )}
                    </p> */}
                    

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

                    {/* <p>
                    <strong>{t("availability")}: </strong>
                    {editMode ? (
                        <select
                        name="availability"
                        value={updatedPositionData.availability}
                        onChange={handleInputChange}
                        >
                        <option value=""></option>
                        <option value={t("immediate")}>{t("immediate")}</option>
                        <option value={t("notImmediate")}>{t("notImmediate")}</option>
                        </select>
                    ) : (
                        positionData.availability
                    )}
                    </p> */}


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

{/* 
                    <p>
                    <strong>{t("jobType")}: </strong>
                    {editMode ? (
                        <select
                        name="jobType"
                        value={updatedPositionData.jobType}
                        onChange={handleInputChange}
                        >
                        <option value=""></option>
                        <option value={t("permanent")}>{t("permanent")}</option>
                        <option value={t("temporary")}>{t("temporary")}</option>
                        </select>
                    ) : (
                        positionData.jobType
                    )}
                    </p> */}


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

                    {/* <p>
                    <strong>{t("location")}: </strong>
                    {editMode ? (
                        <select
                        name="location"
                        value={updatedPositionData.location}
                        onChange={handleInputChange}
                        >
                        <option value={positionData.location}>{positionData.location}</option>
                        <option value={t("north")}>{t("north")}</option>
                        <option value={t("center")}>{t("center")}</option>
                        <option value={t("south")}>{t("south")}</option>
                        </select>
                    ) : (
                        positionData.location
                    )}
                    </p> */}

                
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
            {!editMode && <button onClick={() => setEditMode(true)}>{t("edit")}</button>}
            {editMode && <button onClick={update}>{t("update")}</button>}
            {loading && (
            <div className="loading-overlay">
              <div className="loading-spinner"></div>
            </div>
          )}
            <button onClick={deletePosition}>{t('delete')}</button>
            {/* <button onClick={positionCandidates}>{t('positionCandidates')}</button> */}
        
        </div>
    )
}

export default RecruiterPosCard;