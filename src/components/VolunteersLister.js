import React, {useEffect, useState} from 'react'

import Volunteers from './Volunteers';

const VolunteersLister = ({ positionsIds }) => {

    

    const[volunteersData, setVolunteersData] = useState([]);

   

    const getData = async () => {
        try {
     
            console.log("positionsIds: ", positionsIds);
          const response = await fetch('http://localhost:3001/api/getVolunteersbyId', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(positionsIds),
          });
    
          if (response.ok) {
            const responseBody = await response.text();
            if (responseBody.trim() === '') {
              return;
            }
    
            const responseData = JSON.parse(responseBody);
            setVolunteersData(responseData);

            console.log("responseData: ", responseData);
            
          } else {
            console.error(`HTTP error! Status: ${response.status}`);
          }
        } catch (error) {
          console.error('Error:', error);
        }
      }
     
    
    useEffect(() => {
        getData();
      
    }, []); 

    
  return (
    <div>
        <Volunteers volunteersData={volunteersData} />
    </div>
  )
}

export default VolunteersLister;