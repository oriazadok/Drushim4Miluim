import React, { useState } from 'react';

import Navigator from '../components/Navigator';

import PositionFilter from '../components/PositionsFilter';
import FilterData from '../components/FilterData';
import Position from '../components/Position';


const VolunteerSearch = () => {
  const [showAddPosition, setShowAddPosition] = useState(false);   // Manage AddPosition visibility
  const [showFilter, setShowFilter] = useState(false);             // Manage Filter visibility
  const [filterData, setFilterData] = useState({                   // Manage FilterData's data
    location: '',
    service: '',
    rovai: '',
    profile: '',
    fromAge: '',
    untilAge: '',
  });

  // This fuction handle the visibility of the button and the AddPosition component
  const addPosition = () => {
    setShowAddPosition(!showAddPosition);
    setShowFilter(false); // Close filter when adding a position
  };

  // This function transferred to the AddPosition component to handle adding position
  const handlePositionAdded = () => {
    setShowAddPosition(!showAddPosition);
  };

  // This function transferred to the AddPosition component to handle cancle the adding position
  const handleCancelAddPosition = () => {
    setShowAddPosition(false);
  };

  // This function transferred to the Filter to save the filter's data
  const handleFilterChange = (filterName, value) => {
    setFilterData((prevData) => ({ ...prevData, [filterName]: value }));
  };

  // This function transferred to the Filter to handle filtering
  const filter = () => {
    setShowFilter(!showFilter);
    setShowAddPosition(false);    // Close AddPosition when showing filter
  };

  // This function transferred to the Filter to cancel the filter
  const cancelFilter = () => {
    setShowFilter(false);
  };

  // for case that there is no filtering to show
  const shouldShowFilterData = Object.values(filterData).some((value) => value !== '');

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

      <Position />
    </div>
  );
};

export default VolunteerSearch;
