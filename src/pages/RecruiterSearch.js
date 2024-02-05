import React, { useState } from 'react';

// Translation
import { useTranslation } from 'react-i18next';

// Navigation bar Component
import Navigator from '../components/Navigator';


// Volunteers Search handling components
import Filter from '../components/Filter';
import FilterData from '../components/FilterData';
import Volunteers from '../components/Volunteers';

// import css file
// import '../style/RecruiterSearch.css';

const RecruiterSearch = () => {

  const { t } = useTranslation();   // translation
  
  const [showFilter, setShowFilter] = useState(false);             // Manage Filter visibility
  const [filterData, setFilterData] = useState({                   // Manage FilterData's data
    location: '',
    service: '',
    releaseDate: '',
    rovai: '',
    profile: '',
    fromAge: '',
    untilAge: '',
  });

  // This function transferred to the Filter to save the filter's data
  const handleFilterChange = (filterName, value) => {
    setFilterData((prevData) => ({ ...prevData, [filterName]: value }));
  };

  // This function transferred to the Filter to handle buton view
  const filterView = () => {
    setShowFilter(!showFilter);
  };

  // This function transferred to the Filter to cancel the filter
  const cancelFilter = () => {
    setShowFilter(false);
  };

  // for case that there is no filtering to show
  const shouldShowFilterData = Object.values(filterData).some((value) => value !== '');

  return (
    <div className="recruiter-profile-container">
      <Navigator />
      <h1 className="profile-heading">שלום כבוד המגייס</h1>
      

      <div className="button-container">

        {/* Visibility of "Filter" button */}
        {!showFilter && (
          <button className="toggle-button" onClick={filterView}>{t("filter")}</button>
        )}

        {/* Visibility of "Filter" */}
        {showFilter && (
            <Filter
              onFilterChange={handleFilterChange}
              handleFilter={filterView}
              onCancel={cancelFilter}
              initialFilters={filterData}
            />
        )}
      </div>
      
      {/* Visibility of "FilterData" */}
      {!showFilter && shouldShowFilterData && (
        <FilterData data={filterData} />
      )}

      {/* Filtered voluntters */}
      <Volunteers />
    </div>
  );
};

export default RecruiterSearch;
