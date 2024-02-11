
import React, { useState } from 'react'

// Translation
import { useTranslation } from 'react-i18next';


import PropTypes from 'prop-types';
import '../style/Filter.css';

const PositionsFilter = ({ onFilterChange, handleFilter, onCancel, initialFilters }) => {

  const { t } = useTranslation();

  const [service, setService] = useState(initialFilters.service || '');
  const [availability, setAvilability] = useState(initialFilters.availability || '');
  const [location, setLocation] = useState(initialFilters.location || '');


  const handlesetAvailability = (event) => {
    setAvilability(event.target.value);
    onFilterChange('availability', event.target.value);
  };

  const handleService = (event) => {
    setService(event.target.value);
    onFilterChange('service', event.target.value);
  };



  const handleLocation = (event) => {
    setLocation(event.target.value);
    onFilterChange("location", event.target.value);
  };



  return (
    <div className="filter-container">
      <h2>סנן</h2>

      {/* Location */}
      <div className="filter-section">
        <label className="filter-label" htmlFor="location">
        {t('region')}
        </label>

        <select
          className="filter-select"
          id="location"
          name="location"
          value={location}
          onChange={handleLocation}
        >
          <option value=""></option>
          <option value="צפון">צפון</option>
          <option value="מרכז">מרכז</option>
          <option value="דרום">דרום</option>
        </select>
      </div>

      {/* Service */}
      <div className="filter-section">
        <label className="filter-label" htmlFor="service">
          סוג שירות
        </label>
        <select
          className="filter-select"
          id="service"
          name="service"
          value={service}
          onChange={handleService}
        >
          <option value=""></option>
          <option value="לוחם">לוחם</option>
          <option value="תומך">תומך</option>
          <option value="ג'וב">ג'וב</option>
        </select>
      </div>

      {/* Avilability */}
      <div className="filter-section">
         <label className="filter-label" htmlFor="availability">
          זמינות
        </label>
        <select
          className="filter-select"
          id="availability"
          name="availability"
          value={availability}
          onChange={handlesetAvailability}
        >
          <option value=""></option>
          <option value="מיידי">מיידי</option>
          <option value="לא מיידי">לא מיידי</option>
        </select>
      </div>






      <button onClick={handleFilter}>סנן</button>
      <button onClick={onCancel}>בטל</button>

    </div>

  );
};

PositionsFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  initialFilters: PropTypes.object.isRequired,
};


export default PositionsFilter;
