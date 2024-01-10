import React from 'react'

const FilteredData = ({ data }) => {
  return (
    <div>
      FilteredData
      {/* Display selected filter data */}
      {Object.keys(data).length > 0 && (
        <div>
          <h3>Selected Filter Data:</h3>
          <ul>
            {Object.entries(data).map(([filter, value]) => (
              <li key={filter}>{`${filter}: ${value}`}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default FilteredData;