import React, { useState } from 'react';
import LastPositions from '../components/LastPositions';
// import for translation
import { useTranslation } from 'react-i18next';
import PositionCard from '../components/PositionCard';
// Navigation bar Component
import Navigator from '../components/Navigator';
import PositionsFilter from '../components/PositionsFilter';
import FilterData from '../components/FilterData';
import AddPosition from '../components/AddPosition';




const Positions = () => {
  const [page, setPage] = useState(0);
  // const [filter, setFilter] = useState('');
  const { t } = useTranslation();   // translation
  const [showAddPosition, setShowAddPosition] = useState(false);  // Visibility of AddPosition component
  const [userData, setUserData] = useState(null);  // Store userData values
  const [positions, setPositions] = useState([]);  // Store user's positions values

  

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

  const handleCancelAddPosition = () => {
    setShowAddPosition(false);
  };

  const handlePositionAdded = () => {
    setShowAddPosition(!showAddPosition); 
    getUserData();
  };

 
  const [showFilter, setShowFilter] = useState(false);             // Manage Filter visibility
  const [filterData, setFilterData] = useState({                   // Manage FilterData's data
    service: '',
    availability: '',
    location: '',

  });
  

  const handlePreviousClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

    // This function transferred to the Filter to save the filter's data
    const handleFilterChange = (filterName, value) => {
      setFilterData((prevData) => ({ ...prevData, [filterName]: value }));
    };
  
    // This function transferred to the Filter to handle filtering
    const filter = () => {
      setShowFilter(!showFilter);
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
      <h1>My Positions</h1>
      <div>
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="חיפוש מודעה"
        />
      </div>
      <div className="button-container">
        {/* Visibility of "Filter" button */}
        {!showFilter && (
          <button className="toggle-button" onClick={filter}>סנן</button>
        )}

        

        {/* Visibility of "Filter" */}
        {showFilter && (
            <PositionsFilter
              onFilterChange={handleFilterChange}
              handleFilter={filter}
              onCancel={cancelFilter}
              initialFilters={filterData}
            />
        )}
      </div>
      
      {/* Visibility of "FilterData" */}
      {!showFilter && shouldShowFilterData && (
        <FilterData data={filterData} />
      )}

      <LastPositions page={page} filter={filter}>
        {(positionsData) => (
          <div>
            {positionsData.map((position) => (
              <PositionCard key={position.id} position={position} />
            ))}
          </div>
        )}
      </LastPositions>
      <div>
        <button onClick={handlePreviousClick}>{t('previous')}</button>
        <button onClick={handleNextClick}>{t('next')}</button>
      </div>
    </div>
  );
};

export default Positions;
