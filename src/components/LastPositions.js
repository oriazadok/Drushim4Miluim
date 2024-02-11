import React, { useState, useEffect } from 'react';
import PositionCard from './PositionCard';
import Position from './Position';




import "../style/LastPositions.css"

const LastPositions = ({ positions }) => {
    
    const [positionsData, setPositionsData] = useState([]);
    const [selectedPosition, setSelectedPosition] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("cosomo poss: ", positions)
                const response = await fetch('http://localhost:3001/api/getUserPositionsData', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(positions),
                });

                // console.log("response: ", response);

                if (response.ok) {
                    const responseData = await response.text(); // Get the raw response data

                    if (responseData === null || responseData.trim() === "") {
                        setPositionsData([]);
                        return;
                    } else {
                        const positionsDatalist = JSON.parse(responseData);
                        // console.log("positionsDatalist: ", positionsDatalist);

                        setPositionsData(positionsDatalist);
                    }
                    
                    
                } else {
                    console.error(`HTTP error! Status: ${response.status}`);
                    setPositionsData([]); // Set positionsData to an empty array in case of error
                }
            } catch (error) {
                console.error('Error:', error);
                setPositionsData([]); // Set positionsData to an empty array in case of error
            }
        };

        fetchData();
    }, [positions]);

    const handlePositionClick = (position) => {
        setSelectedPosition(position);
    };

    const closeModal = () => {
        setSelectedPosition(null);
    };

    // console.log("positionsData: ", positionsData);

    if (positionsData.length === 0) {
        return <div>No positions available.</div>; // or handle the empty state
    }

    return (
        <div className="positions-container">
            <div className="position-list">
            {positionsData.map((position) => (
                <div
                    key={position._id}
                    className='position-list-item'
                    onClick={() => handlePositionClick(position)}
                >
                    <PositionCard {...position} />
                </div>
            ))}
            </div>

            {/* Modal for detailed view */}
            {selectedPosition && (
                <div className="modal" onClick={closeModal}>
                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    <Position {...selectedPosition} />
                </div>
                </div>
            )}
        </div>
    );
}

export default LastPositions;
