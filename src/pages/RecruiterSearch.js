import React, { useState, useEffect } from 'react';

// Translation
import { useTranslation } from 'react-i18next';

// Navigation bar Component
import Navigator from '../components/Navigator';

// Volunteers Search handling components
import VolunteersFilter from '../components/VolunteersFilter';
import FilterData from '../components/FilterData';
import Volunteers from '../components/Volunteers';
import '../style/RecruiterSearch.css';
import '../style/Volunteers.css';



const RecruiterSearch = () => {
  const { t } = useTranslation(); // translation

  const [showFilter, setShowFilter] = useState(false); // Manage Filter visibility
  const [filterData, setFilterData] = useState({
    // Manage FilterData's data
    region: '',
    service: '',
    // releaseDate: '',
    rovai: '',
    profile: '',
    ageFrom: '',
    ageTo: '',
  });
  const [volunteersData, setVolunteersData] = useState([]);

  // Memoize the filter function
  const filter = async () => {
    try {
      const filteredData = Object.fromEntries(
        Object.entries(filterData).filter(([key, value]) => value !== '')
      );

      const response = await fetch('http://localhost:3001/api/volunteers', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Send cookies (credentials) with the request
        body: JSON.stringify(filteredData),
      });

      if (response.ok) {
        const data = await response.json();
        setVolunteersData(data);
      } else {
        console.error(`HTTP error! Status: ${response.status}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }; // Dependency on filterData

  useEffect(() => {
    
    filter();
    
    // eslint-disable-next-line
}, []);

  

  //////////////////////////////////////////////////////////
  // Functions related to the VolunteersFilter component
  //////////////////////////////////////////////////////////

  // Function to toggle filter visibility
  const filterView = () => {
    setShowFilter(!showFilter);
  };

  // Function to handle changes in filter data
  const handleFilterChange = (filterName, value) => {
    setFilterData((prevData) => ({ ...prevData, [filterName]: value }));
  };

  // Function to handle filter action
  const handleFilter = () => {
    filterView();
    filter(); // Apply the filter
  };

  // Function to cancel the filter
  const cancelFilter = () => {
    setShowFilter(false);
  };

  // Determine if filter data should be shown
  const shouldShowFilterData = Object.values(filterData).some((value) => value !== '');

  return (
    <div className="recruiter-profile-container">
      <Navigator />
      <h1 className="profile-heading">{t("search")}</h1>

      <div className="button-container">
        {!showFilter && (
          <button className="toggle-button" onClick={filterView}>
            {t('filter')}
          </button>
        )}
        {showFilter && (
          <VolunteersFilter
            onFilterChange={handleFilterChange}
            handleFilter={handleFilter}
            onCancel={cancelFilter}
            initialFilters={filterData}
          />
        )}
      </div>

      {!showFilter && shouldShowFilterData && <FilterData data={filterData} />}

      <Volunteers volunteersData={volunteersData} />
    </div>
  );
};

export default RecruiterSearch;
