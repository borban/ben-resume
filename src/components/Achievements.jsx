import React, { useEffect, useState } from 'react';
import '../App.css';

import { generateClient } from 'aws-amplify/api';
import { listAchievements } from '../graphql/queries';

function Achievements() {
    const client = generateClient();

    const [allAchievements, setAchievements] = useState({});
    const [isLoading, setIsLoading] = useState(true); // State to track loading status

    useEffect(() => {
        const fetchAchievements = async () => {
            try {
                const response = await client.graphql({
                    query: listAchievements,
                });
                setAchievements(response.data.listAchievements);
                setIsLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching Achievements:', error);
            }
        };

        fetchAchievements();
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className='Achievements-container'>
            <h2>Achievements</h2>
            {isLoading ? ( // Display loading indicator while isLoading is true
                <div className="loading"></div>
            ) : (
                allAchievements.items &&
                allAchievements.items.map((achievement, index) => (
                    <div key={achievement.id} className='Achievments-item'>
                        <h4>{achievement.name}</h4>
                        {achievement.location}
                        <div>{achievement.valid_start}</div>
                        <div>{achievement.verification_url}</div>
                        <div>{achievement.verification_code}</div>
                        <br/>
                    </div>
                ))
            )}
        </div>

    );
}

export default Achievements;
