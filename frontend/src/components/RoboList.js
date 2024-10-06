import React, { useState } from 'react';
import '../styles/robolist.css';

const robos = [
    {
        name: "Robo 1",
        type: "ARC",
        operationStatus: "Idle",
        batteryPercentage: 80,
        damaged: "NO"
    },
    {
        name: "Robo 2",
        type: "View Point",
        operationStatus: "Charging",
        batteryPercentage: 60,
        damaged: "YES"
    },
    {
        name: "Robo 3",
        type: "Panther",
        operationStatus: "Active",
        batteryPercentage: 95,
        damaged: "NO"
    },
    {
        name: "Robo 4",
        type: "ARC",
        operationStatus: "Idle",
        batteryPercentage: 75,
        damaged: "NO"
    },
    {
        name: "Robo 5",
        type: "View Point",
        operationStatus: "Active",
        batteryPercentage: 40,
        damaged: "YES"
    },
    {
        name: "Robo 6",
        type: "Panther",
        operationStatus: "Charging",
        batteryPercentage: 85,
        damaged: "NO"
    },
    {
        name: "Robo 7",
        type: "ARC",
        operationStatus: "Active",
        batteryPercentage: 90,
        damaged: "YES"
    },
    {
        name: "Robo 8",
        type: "View Point",
        operationStatus: "Charging",
        batteryPercentage: 70,
        damaged: "NO"
    },
    {
        name: "Robo 9",
        type: "Panther",
        operationStatus: "Idle",
        batteryPercentage: 55,
        damaged: "YES"
    }
];

const RoboList = () => {
    const [selectedType, setSelectedType] = useState('all');

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    };

    // Filter robots based on selected type (case insensitive)
    const filteredRobos = selectedType === 'all' ? robos : robos.filter(robo => robo.type.toLowerCase() === selectedType.toLowerCase());

    return (
        <div className='Robot--list'>
            <div className='list--header'>
                <h2>Robots</h2>
                <select value={selectedType} onChange={handleTypeChange}>
                    <option value='all'>All</option>
                    <option value='arc'>ARC</option>
                    <option value='panther'>Panther</option>
                    <option value='viewPoint'>View Point</option>
                </select>
            </div>

            <div className='list--container'>
                {filteredRobos.map((robo, index) => (
                    <div key={index} className='list'>
                        <div className='robo--detail'>
                            <h2>{robo.name}</h2>
                        </div>
                        <span>{robo.type}</span>
                        <span>{robo.operationStatus}</span>
                        <span>{robo.batteryPercentage}%</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RoboList;