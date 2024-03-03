import React, { useState, useEffect } from 'react';

// For navigation between pages
import { useNavigate } from 'react-router-dom';

// import for translation
import { useTranslation } from 'react-i18next';

// Navigation bar Component
import Navigator from '../components/Navigator';
import AddPosition from '../components/AddPosition';
import PositionsFilter from '../components/PositionsFilter';
import FilterData from '../components/FilterData';
import UserPositions from '../components/UserPositions';
import '../style/Volunteers.css';
 import '../style/UserPositions.css';
 import '../style/Positions.css';


const RecruiterPositions = () => {

  const { t } = useTranslation();   // translation
  const navigate = useNavigate();   // navigation

  const [userData, setUserData] = useState(null);  // Store userData values
  const [showAddPosition, setShowAddPosition] = useState(false);  // Visibility of AddPosition component
  
  const [positions, setPositions] = useState([]);  // Store user's positions values

  const [showFilter, setShowFilter] = useState(false);             // Manage Filter visibility
  const [filterData, setFilterData] = useState({                   // Manage FilterData's data
    service: '',
    availability: '',
    location: '',
  });  

  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;

    // Call navigate inside useEffect with a condition to prevent infinite updates
    if (parsedUserData === null) {
      navigate("/signin");
    }

    setUserData(parsedUserData);
    setPositions(parsedUserData.positions);
    
  }, []); // Only include navigate as a dependency
  
  if (userData === null) {
    return null;
  }

  const getFilterPositions = async () => {
    try {

      const query = {
        ...filterData, // Copy the original object
        publisherId: userData._id, // Insert a new field
      };
      const fixedQuery = removeEmptyFields(query);
     
      const response = await fetch('http://localhost:3001/api/filterPosition', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify(fixedQuery),
      });

      if (response.ok) {
        const responseBody = await response.text();
        if (responseBody.trim() === '') {
          return;
        }

        const responseData = JSON.parse(responseBody);
        
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  const removeEmptyFields = (obj) => {
    for (let key in obj) {
        // Check if the value is an object and recursively remove empty fields
        if (typeof obj[key] === 'object' && obj[key] !== null) {
            obj[key] = removeEmptyFields(obj[key]);
        } else if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
            // If the value is null, undefined, or an empty string, delete the key
            delete obj[key];
        }
    }
    return obj;
};

// Make post request to get the data of the user
  const getUserData = async () => {
    try {
      const response = await fetch('http://localhost:3001/api/getUserData', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({_id: userData._id, type: userData.type}),
      });

      if (response.ok) {
        const responseBody = await response.text();
        if (responseBody.trim() === '') {
          return;
        }

        const responseData = JSON.parse(responseBody);
        localStorage.setItem('userData', JSON.stringify(responseData));
        setUserData(responseData);
        setPositions(responseData.positions);
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }


  ////////////////////////////////////////////////////////////
  // those functions are related to the AddPositoins component
  ////////////////////////////////////////////////////////////
  
  const addPosition = () => {
    setShowAddPosition(!showAddPosition);
    setShowFilter(false); // Close filter when adding a position
  };

  // This function transferred to the AddPosition component to handle adding position
  const handlePositionAdded = () => {
    setShowAddPosition(!showAddPosition);
    getUserData();
  };

  // This function transferred to the AddPosition component to handle cancle the adding position
  const handleCancelAddPosition = () => {
    setShowAddPosition(false);
  };

  ///////////////////////////////////////////////////////////////
  // those functions are related to the PositionsFilter component
  ///////////////////////////////////////////////////////////////
  
  // This function transferred to the Filter to save the filter's data
  const handleFilterChange = (filterName, value) => {
    setFilterData((prevData) => ({ ...prevData, [filterName]: value }));
  };

  const filter = () => {
    setShowFilter(!showFilter);
    setShowAddPosition(false);    // Close AddPosition when showing filter
  };

  // This function transferred to the Filter to handle filtering
  const handleFilter = () => {
    filter();
    getFilterPositions();
  };

  // This function transferred to the Filter to cancel the filter
  const cancelFilter = () => {
    setShowFilter(false);
  };
  
  // for case that there is no filtering to show
  const shouldShowFilterData = Object.values(filterData).some((value) => value !== '');

  return (
    <div>
      <Navigator/>
      <h1>{t("myPositions")}</h1>
      <div className="button-container">

        {/* Visibility of AddPosition */}
        {!showAddPosition && (
          <button className="toggle-button" onClick={addPosition}>{t("addPosition")}</button>
        )}

        {/* Visability of AddPosition */}
        {showAddPosition && (
            <AddPosition
              id={userData._id}
              type={userData.type}
              onPositionAdded={handlePositionAdded}
              onCancel={handleCancelAddPosition}
            />
        )}

            {/* <LastPositions positions={positions.slice(-5)} /> show the last 5 positions the recruiter post */}


        {/* Visibility of "Filter" button */}
        {!showFilter && (
          <button className="toggle-button" onClick={filter}>{t("filter")}</button>
        )}

        {/* Visibility of "Filter" */}
        {showFilter && (
            <PositionsFilter
              onFilterChange={handleFilterChange}
              handleFilter={handleFilter}
              onCancel={cancelFilter}
              initialFilters={filterData}
            />
        )}
      </div>
    
      {/* Visibility of "FilterData" */}
      {!showFilter && shouldShowFilterData && (
        <FilterData data={filterData} />
      )}
    <UserPositions positions={positions} />
      
  </div>
  );
};

export default RecruiterPositions;