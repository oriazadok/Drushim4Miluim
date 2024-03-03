import React, { useState, useEffect } from 'react';
import Navigator from '../components/Navigator';
// For navigation between pages
import { useNavigate } from 'react-router-dom';
import PositionFilter from '../components/PositionsFilter';
import FilterData from '../components/FilterData';

import UserPositions from '../components/UserPositions';

const VolunteerSearch = () => {
  const [userData, setUserData] = useState(null);  // Store userData valu
  const navigate = useNavigate();   // navigation
  const [positions, setPositions] = useState([]);  // Store user's positions values
  const [showFilter, setShowFilter] = useState(false);             // Manage Filter visibility
  const [filterData, setFilterData] = useState({                   // Manage FilterData's data
    location: '',
    service: '',
    rovai: '',
    profile: '',
    fromAge: '',
    untilAge: '',
  });
  useEffect(() => {
    const storedUserData = localStorage.getItem('userData');
    const parsedUserData = storedUserData ? JSON.parse(storedUserData) : null;

    // Call navigate inside useEffect with a condition to prevent infinite updates
    if (parsedUserData === null) {
      navigate("/signin");
    }
    console.log("parsedUserData: ", parsedUserData);
    setUserData(parsedUserData);
    
  }, []); // Only include navigate as a dependency

  

  const getFilterPositions = async () => {
    try {

      const query = {
        ...filterData, // Copy the original object
      
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
        setPositions(responseData);
        
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

useEffect(() => {
  getFilterPositions();
  
}, []); 



// This function transferred to the Filter to handle filtering
const handleFilter = () => {
  filter();
  getFilterPositions();
};


  // This function transferred to the Filter to save the filter's data
  const handleFilterChange = (filterName, value) => {
    setFilterData((prevData) => ({ ...prevData, [filterName]: value }));
  };

  // This function transferred to the Filter to handle filtering
  const filter = () => {
    setShowFilter(!showFilter);
      // Close AddPosition when showing filter
  };

  // This function transferred to the Filter to cancel the filter
  const cancelFilter = () => {
    setShowFilter(false);
  };

  // for case that there is no filtering to show
  const shouldShowFilterData = Object.values(filterData).some((value) => value !== '');

  console.log("posin: ", positions);
  return (
    <div className="volunteers-profile-container">
      <Navigator />
      <h1 className="profile-heading">שלום מתנדב יקר</h1>

      <div className="button-container">
        {/* Visibility of "Filter" button */}
        {!showFilter && (
          <button className="toggle-button" onClick={filter}>סנן</button>
        )}

        {/* Visibility of "Filter" */}
        {showFilter && (
            <PositionFilter
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

      <UserPositions positions={positions}/>
    </div>
  );
};

export default VolunteerSearch;
