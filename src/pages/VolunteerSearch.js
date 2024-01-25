import React ,{useState} from 'react';
import '../style/VolunterSearchProfile.css'; // Import the CSS file
import Filter from '../components/Filter';


const BluePage = () => {
  const [showFilters, setShowFilters] = useState(false);
  const handleFilterClick = () => {
    setShowFilters(!showFilters);
  };
  return (
    <div className="blue-page">
      <h1 onClick={handleFilterClick}>חיפוש משרות</h1>
      <input
        type="text"
        placeholder="חיפוש חופשי"
        className="search-bar"
      />
     <button className="filter-button" onClick={handleFilterClick}>
        Filter
      </button>
      {showFilters && (
        <Filter/>
      )}
    </div>
  );
};


export default BluePage;
