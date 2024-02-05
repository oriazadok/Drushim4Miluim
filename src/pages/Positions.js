import React, { useState } from 'react';
import LastPositions from '../components/LastPositions';
// import for translation
import { useTranslation } from 'react-i18next';
import PositionCard from '../components/PositionCard';
// Navigation bar Component
import Navigator from '../components/Navigator';
import Filter from '../components/Filter';
import FilterData from '../components/FilterData';

const Positions = () => {
  const [page, setPage] = useState(0);
  // const [filter, setFilter] = useState('');
  const { t } = useTranslation();   // translation
  const [showFilter, setShowFilter] = useState(false);             // Manage Filter visibility
  const [filterData, setFilterData] = useState({                   // Manage FilterData's data
    מיקום: '',
    שירות: '',
    שחרור: '',
    רובאי: '',
    פרופיל: '',
    מגיל: '',
    עד: '',
  });
  

  const handlePreviousClick = () => {
    setPage(page - 1);
  };

  const handleNextClick = () => {
    setPage(page + 1);
  };

    // This function transferred to the Filter to save the filter's data
    const handleFilterChange = (filterName, value) => {
      setFilterData((prevData) => ({ ...prevData, [filterName]: value }));
    };
  
    // This function transferred to the Filter to handle filtering
    const filter = () => {
      setShowFilter(!showFilter);
    };
  
    // This function transferred to the Filter to cancel the filter
    const cancelFilter = () => {
      setShowFilter(false);
    };
  
    // for case that there is no filtering to show
    const shouldShowFilterData = Object.values(filterData).some((value) => value !== '');

  const resultPos =  [
    {
      publisherId: '65bb5ee27b3ea5d2bc287443',
      type: 'recruiters',
      positionTitle: 'first',
      unitName: 'ef2f2',
      service: '',
      availability: '',
      jobType: '',
      location: '',
      jobDescription: 'f22c22vf2'
    },
    {
      publisherId: '65bb5ee27b3ea5d2bc287443',
      type: 'recruiters',
      positionTitle: 'second',
      unitName: 'ewf2e',
      service: '',
      availability: '',
      jobType: '',
      location: '',
      jobDescription: 've2vev2'
    },
    {
      publisherId: '65bb5ee27b3ea5d2bc287443',
      type: 'recruiters',
      positionTitle: 'third',
      unitName: 'fewef2q',
      service: '',
      availability: '',
      jobType: '',
      location: '',
      jobDescription: 'wev'
    },
    {
      publisherId: '65bb5ee27b3ea5d2bc287443',
      type: 'recruiters',
      positionTitle: 'cewfcwe',
      unitName: 'cvwecv',
      service: '',
      availability: '',
      jobType: '',
      location: '',
      jobDescription: 'cewcfv2we'
    },
    {
      publisherId: '65bb5ee27b3ea5d2bc287443',
      type: 'recruiters',
      positionTitle: 'fewfce',
      unitName: 'vwrvr',
      service: '',
      availability: '',
      jobType: '',
      location: '',
      jobDescription: 'vrv3wv'
    },
    {
      publisherId: '65bb5ee27b3ea5d2bc287443',
      type: 'recruiters',
      positionTitle: 'dqeq',
      unitName: 'cqwecv',
      service: '',
      availability: '',
      jobType: '',
      location: '',
      jobDescription: 'vcewqvw'
    }
  ]
  
  return (
    <div>
      <Navigator/>
      <h1>My Positions</h1>
      {/* <div>
        <input
          type="text"
          value={filter}
          onChange={handleFilterChange}
          placeholder="חיפוש מודעה"
        />
      </div> */}
      <div className="button-container">
        {/* Visibility of "Filter" button */}
        {!showFilter && (
          <button className="toggle-button" onClick={filter}>סנן</button>
        )}

        {/* Visibility of "Filter" */}
        {showFilter && (
            <Filter
              onFilterChange={handleFilterChange}
              handleFilter={filter}
              onCancel={cancelFilter}
              initialFilters={filterData}
            />
        )}
      </div>
      
      {/* Visibility of "FilterData" */}
      {!showFilter && shouldShowFilterData && (
        <FilterData data={filterData} />
      )}

      <LastPositions page={page} filter={filter}>
        {(positionsData) => (
          <div>
            {positionsData.map((position) => (
              <PositionCard key={position.id} position={position} />
            ))}
          </div>
        )}
      </LastPositions>
      <div>
        <button onClick={handlePreviousClick}>{t('previous')}</button>
        <button onClick={handleNextClick}>{t('next')}</button>
      </div>
    </div>
  );
};

export default Positions;
