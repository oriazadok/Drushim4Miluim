import React ,{useState} from 'react';
import '../style/VolunterSearchProfile.css'; // Import the CSS file

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
        <div className="filter-options">
          {/* Add your filter components for different categories here */}
          <FilterComponent category="Category 1" />
          <FilterComponent category="Category 2" />
          <FilterComponent category="Category 3" />
          {/* Add more as needed */}
        </div>
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
