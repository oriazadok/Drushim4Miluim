import React from 'react'


import "../style/FilterData.css"

const FilteredData = ({ data }) => {

  return (
    <div className="filtered-data-container">
      <h2>סינונים:</h2>
      {/* Display selected filter data in a row */}
      {Object.keys(data).length > 0 && (
        <div className="filtered-row">
          {Object.entries(data)
            .filter(([filter, value]) => value !== '') // Exclude rows with empty values
            .map(([filter, value]) => (
              <div key={filter} className="filtered-item">
                <span className="filter-label">{filter}:</span>
                <span className="filter-value">{value}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};


export default FilteredData;