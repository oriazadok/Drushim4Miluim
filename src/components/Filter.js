import React, { useState } from 'react';
import PropTypes from 'prop-types';

import '../style/Filter.css';

const Filter = ({ onFilterChange }) => {

  const [filter1Value, setFilter1Value] = useState('');
  const [filter2Value, setFilter2Value] = useState('');

  const handleFilter1Change = (event) => {
    setFilter1Value(event.target.value);
    onFilterChange('filter1', event.target.value); // Invoke the onFilterChange prop
  };

  const handleFilter2Change = (event) => {
    setFilter2Value(event.target.value);
    onFilterChange('filter2', event.target.value); // Invoke the onFilterChange prop
  };


  return (
    <div className="filter-container">
      <h2>Filter</h2>

      {/* Filter 1 */}
      <div className="filter-section">
        <label className="filter-label" htmlFor="filter1">
          Filter 1
        </label>
        <select
          className="filter-select"
          id="filter1"
          name="filter1"
          value={filter1Value}
          onChange={handleFilter1Change}
        >
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      {/* Filter 2 */}
      <div className="filter-section">
        <label className="filter-label" htmlFor="filter2">
          Filter 2
        </label>
        <select
          className="filter-select"
          id="filter2"
          name="filter2"
          value={filter2Value}
          onChange={handleFilter2Change}
        >
          <option value="optionA">Option A</option>
          <option value="optionB">Option B</option>
          <option value="optionC">Option C</option>
        </select>
      </div>

      {/* Add more filters as needed */}
    </div>

  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};

export default Filter;
