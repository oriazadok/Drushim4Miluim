// Filter.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../style/Filter.css';

const Filter = ({ onFilterChange, handleFilter, onCancel, initialFilters }) => {
  const [filter1Value, setFilter1Value] = useState(initialFilters.filter1 || '');
  const [filter2Value, setFilter2Value] = useState(initialFilters.filter2 || '');
  const [filter3Value, setFilter3Value] = useState(initialFilters.filter3 || '');
  const [filter4Value, setFilter4Value] = useState(initialFilters.filter4 || '');

  const handleFilter1Change = (event) => {
    setFilter1Value(event.target.value);
    onFilterChange('filter1', event.target.value); // Invoke the onFilterChange prop
  };

  const handleFilter2Change = (event) => {
    setFilter2Value(event.target.value);
    onFilterChange('filter2', event.target.value); // Invoke the onFilterChange prop
  };

  const handleFilter3Change = (event) => {
    setFilter3Value(event.target.value);
    onFilterChange('filter3', event.target.value); // Invoke the onFilterChange prop
  };

  const handleFilter4Change = (event) => {
    setFilter4Value(event.target.value);
    onFilterChange('filter4', event.target.value); // Invoke the onFilterChange prop
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
          <option value=""></option>
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
          <option value=""></option>
          <option value="optionA">Option A</option>
          <option value="optionB">Option B</option>
          <option value="optionC">Option C</option>
        </select>
      </div>

      {/* Filter 3 */}
      <div className="filter-section">
        <label className="filter-label" htmlFor="filter3">
          Filter 3
        </label>
        <select
          className="filter-select"
          id="filter3"
          name="filter3"
          value={filter3Value}
          onChange={handleFilter3Change}
        >
          <option value=""></option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>

      {/* Filter 4 */}
      <div className="filter-section">
        <label className="filter-label" htmlFor="filter4">
          Filter 4
        </label>
        <select
          className="filter-select"
          id="filter4"
          name="filter4"
          value={filter4Value}
          onChange={handleFilter4Change}
        >
          <option value=""></option>
          <option value="optionA">Option A</option>
          <option value="optionB">Option B</option>
          <option value="optionC">Option C</option>
        </select>
      </div>

      <button onClick={handleFilter}>Filter</button>
      {/* "Cancel" button */}
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
  initialFilters: PropTypes.object.isRequired,
};

export default Filter;
