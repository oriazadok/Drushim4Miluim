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
const FilterComponent = ({ category }) => {
  // Implement your filtering options for each category here
  return (
    <div className="filter-component">
      <h3>{category}</h3>
      {/* Add your scrollable options for this category */}
      <ul>
        <li>Option 1</li>
        <li>Option 2</li>
        <li>Option 3</li>
        {/* Add more options as needed */}
      </ul>
    </div>
  );
};

export default BluePage;
