import React from 'react'

// Translation
import { useTranslation } from 'react-i18next';


import "../style/FilterData.css"

const FilteredData = ({ data }) => {

  const { t } = useTranslation();

  return (
    <div className="filtered-data-container">
      <h2>{t("filters")}</h2>
      {/* Display selected filter data in a row */}
      {Object.keys(data).length > 0 && (
        <div className="filtered-row">
          {Object.entries(data)
            .filter(([filter, value]) => value !== '') // Exclude rows with empty values
            .map(([filter, value]) => (
              <div key={filter} className="filtered-item">
                <span className="filter-label">{t(filter)}:</span>
                <span className="filter-value">{value}</span>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};


export default FilteredData;