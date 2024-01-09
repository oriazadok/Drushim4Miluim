import React, { useState } from 'react';

import AddPosition from '../components/AddPosition';
import Filter from '../components/Filter';
import Volunteers from '../components/Volunteers';

const RecruiterProfile = () => {

  const [showAddPosition, setShowAddPosition] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  const toggleAddPosition = () => {
      setShowAddPosition(!showAddPosition);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
};

  return (
    <div>
      RecruiterProfile
      <br/>

      {/* This is a toggle button for the add position component */}
      <button onClick={toggleAddPosition}>Add Position</button>
      {showAddPosition && <AddPosition />}
      <br/>

      <button onClick={toggleFilter}>filter</button>
      {showFilter && <Filter />}

      <Volunteers />



      
     
    </div>
  )
}

export default RecruiterProfile;