import { useState } from 'react';

import AddPosition from '../components/AddPosition';
import Filter from '../components/Filter';
import FilterData from '../components/FilterData';
import Volunteers from '../components/Volunteers';

// import '../style/Recruiter.css';

const Recruiter = () => {
  const [showAddPosition, setShowAddPosition] = useState(false);
  const [positionAdded, setPositionAdded] = useState(false);
  const [showFilter, setShowFilter] = useState(false);
  const [filterData, setFilterData] = useState({
    filter1: '',
    filter2: '',
    filter3: '',
    filter4: '',
  });


  const toggleAddPosition = () => {
    setShowAddPosition(!showAddPosition);
    setPositionAdded(false);
  };

  const handlePositionAdded = () => {
    setShowAddPosition(!showAddPosition);
    setPositionAdded(true);
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
          <Filter
            onFilterChange={handleFilterChange}
            handleFilter={toggleFilter}
            initialFilters={filterData}
          />
        ) : (
          Object.values(filterData).some((value) => value !== '') && (
            <FilterData data={filterData} />
          )
        )}
      </div>

      <Volunteers />
    </div>
  );
};

export default Recruiter;
