
import React, { useState } from 'react'

// Translation
import { useTranslation } from 'react-i18next';


import PropTypes from 'prop-types';
import '../style/Filter.css';

const VolunteersFilter = ({ onFilterChange, handleFilter, onCancel, initialFilters }) => {

  const { t } = useTranslation();

  const [location, setLocation] = useState(initialFilters.location || '');
  const [service, setService] = useState(initialFilters.service || '');
  const [releaseDate, setReleaseDate] = useState(initialFilters.releaseDate || '');
  const [rovai, setRovai] = useState(initialFilters.rovai || '');
  const [profile, setProfile] = useState(initialFilters.profile || '');
  const [ageFrom, setAgeFrom] = useState(initialFilters.ageFrom || '');
  const [ageTo, setAgeTo] = useState(initialFilters.ageTo || '');

  const handleLocation = (event) => {
    setLocation(event.target.value);
    onFilterChange("location", event.target.value);
  };

  const handleService = (event) => {
    setService(event.target.value);
    onFilterChange('service', event.target.value);
  };

  const handleReleaseDate = (event) => {
    setReleaseDate(event.target.value);
    onFilterChange('releaseDate', event.target.value);
  };

  const handleRovai = (event) => {
    setRovai(event.target.value);
    onFilterChange('rovai', event.target.value);
  };

  const handleProfile = (event) => {
    setProfile(event.target.value);
    onFilterChange('profile', event.target.value);
  };

  const handleAgeFrom = (event) => {
    setAgeFrom(event.target.value);
    onFilterChange('ageFrom', event.target.value);
  };

  const handleAgeTo = (event) => {
    setAgeTo(event.target.value);
    onFilterChange('ageTo', event.target.value);
  };

  const ageOptions = [<option key="" value=""></option>];
  for (let age = 20; age <= 60; age++) {
    ageOptions.push(
      <option key={age} value={age}>
        {age}
      </option>
    );
  }


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

      {/* release date */}
      <div className="filter-section">
        <label className="filter-label" htmlFor="releaseDate">
          תאריך שחרור
        </label>
        <input 
          type="date" 
          id="releaseDate" 
          name="releaseDate" 
          value={releaseDate} 
          onChange={handleReleaseDate} />

      </div>

      {/* Rovai */}
      <div className="filter-section">
        <label className="filter-label" htmlFor="rovai">
          רובאי
        </label>
        <select
          className="filter-select"
          id="rovai"
          name="rovai"
          value={rovai}
          onChange={handleRovai}
        >
          <option value=""></option>
          <option value="02">02</option>
          <option value="03">03</option>
          <option value="05">05</option>
          <option value="07">07</option>
          <option value="08">08</option>
          <option value="09">09</option>
          <option value="10">10</option>
          <option value="12">12</option>
        </select>
      </div>

      {/* Profile */}
      <div className="filter-section">
        <label className="filter-label" htmlFor="profile">
          פרופיל
        </label>
        <select
          className="filter-select"
          id="profile"
          name="profile"
          value={profile}
          onChange={handleProfile}
        >
          <option value=""></option>
          <option value="21">21</option>
          <option value="45">45</option>
          <option value="64">64</option>
          <option value="72">72</option>
          <option value="82">82</option>
          <option value="97">97</option>
          <option value="100">100</option>
          <option value="101">101</option>
        </select>
      </div>

      {/* age */}
      <div className="filter-section">
        <label className="filter-label" htmlFor="age">גיל</label>
        <label htmlFor="from">מ</label>
        <select className="select-input" id="age" name="age" value={ageFrom} onChange={handleAgeFrom} >
          {ageOptions}
        </select>

        <label htmlFor="to">עד</label>
        <select className="select-input" id="age" name="age" value={ageTo} onChange={handleAgeTo} >
          {ageOptions}
        </select>
      </div>

      <button onClick={handleFilter}>סנן</button>
      <button onClick={onCancel}>בטל</button>

    </div>

  );
};

VolunteersFilter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  handleFilter: PropTypes.func.isRequired,
  initialFilters: PropTypes.object.isRequired,
};


export default VolunteersFilter;