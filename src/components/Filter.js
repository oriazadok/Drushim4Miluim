import React from 'react';
import '../style/Filter.css';

const Filter = () => {
  return (
    <div className="filter-container">
      <h2>Filter</h2>

      {/* Filter 1 */}
      <div className="filter-section">
        <label className="filter-label" htmlFor="filter1">
          Filter 1
        </label>
        <select className="filter-select" id="filter1" name="filter1">
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
        <select className="filter-select" id="filter2" name="filter2">
          <option value="optionA">Option A</option>
          <option value="optionB">Option B</option>
          <option value="optionC">Option C</option>
        </select>
      </div>

      {/* Filter 1 */}
      <div className="filter-section">
        <label className="filter-label" htmlFor="filter1">
          Filter 1
        </label>
        <select className="filter-select" id="filter1" name="filter1">
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
        <select className="filter-select" id="filter2" name="filter2">
          <option value="optionA">Option A</option>
          <option value="optionB">Option B</option>
          <option value="optionC">Option C</option>
        </select>
      </div>

      {/* Filter 1 */}
      <div className="filter-section">
        <label className="filter-label" htmlFor="filter1">
          Filter 1
        </label>
        <select className="filter-select" id="filter1" name="filter1">
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
        <select className="filter-select" id="filter2" name="filter2">
          <option value="optionA">Option A</option>
          <option value="optionB">Option B</option>
          <option value="optionC">Option C</option>
        </select>
      </div>



    </div>
  );
};

export default Filter;
