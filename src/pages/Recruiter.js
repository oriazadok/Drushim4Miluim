import React, { useState } from 'react';
import AddPosition from '../components/AddPosition';
import Filter from '../components/Filter';
import FilteredData from '../components/FilterData';
import Volunteers from '../components/Volunteers';
// import '../style/Recruiter.css';

const Recruiter = () => {
  const [showAddPosition, setShowAddPosition] = useState(false);
  const [positionAdded, setPositionAdded] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filterData, setFilterData] = useState({});

  const toggleAddPosition = () => {
    setShowAddPosition(!showAddPosition);
    setPositionAdded(false);
  };

  const handlePositionAdded = () => {
    setShowAddPosition(!showAddPosition);
    setPositionAdded(true); // Set the state when the position is added
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleFilterChange = (filterName, value) => {
    setFilterData((prevData) => ({ ...prevData, [filterName]: value }));
  };

  return (
    <div className="recruiter-profile-container">
      <h1 className="profile-heading">Hello Recruiter</h1>
      <div className="button-container">
        <button className="toggle-button" onClick={toggleAddPosition}>
          Add Position
        </button>
        {showAddPosition && !positionAdded && (
          <AddPosition onPositionAdded={handlePositionAdded} />
        )}
      </div>

      <div className="button-container">
        {/* Toggle button for filter */}
        <button className="toggle-button" onClick={toggleFilter}>
          Toggle Filter
        </button>

        {/* Render either Filter or FilteredData based on showFilter state */}
        {showFilter ? (
          <Filter onFilterChange={handleFilterChange} />
        ) : (
          <FilteredData data={filterData} />
        )}
      </div>

      <Volunteers />
    </div>
  );
};

export default Recruiter;
