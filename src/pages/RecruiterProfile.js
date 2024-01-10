import React, { useState } from 'react';
import AddPosition from '../components/AddPosition';
import Filter from '../components/Filter';
import FilteredData from '../components/FilterData';
import Volunteers from '../components/Volunteers';

const RecruiterProfile = () => {
  const [showAddPosition, setShowAddPosition] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filterData, setFilterData] = useState({});

  const toggleAddPosition = () => {
    setShowAddPosition(!showAddPosition);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleFilterChange = (filterName, value) => {
    setFilterData((prevData) => ({ ...prevData, [filterName]: value }));
  };

  return (
    <div>
      RecruiterProfile
      <br />

      {/* This is a toggle button for the add position component */}
      <button onClick={toggleAddPosition}>Add Position</button>
      {showAddPosition && <AddPosition />}
      <br />

      {/* Toggle button for filter */}
      <button onClick={toggleFilter}>Toggle Filter</button>

      {/* Render either Filter or FilteredData based on showFilter state */}
      {showFilter ? (
        <Filter onFilterChange={handleFilterChange} />
      ) : (
        <FilteredData data={filterData} />
      )}

      <Volunteers />
    </div>
  );
};

export default RecruiterProfile;
