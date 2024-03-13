import React, { useEffect, useState } from 'react';
import '../App.css';

import { generateClient } from 'aws-amplify/api';
import { listClearances } from '../graphql/queries';

function Clearances() {
    const client = generateClient();

    const [allClearances, setClearances] = useState({});
    const [isLoading, setIsLoading] = useState(true); // State to track loading status

    useEffect(() => {
        const fetchClearances = async () => {
            try {
                const response = await client.graphql({
                    query: listClearances,
                });
                setClearances(response.data.listClearances);
                setIsLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching Clearances:', error);
            }
        };

        fetchClearances();
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className='Clearances-container'>
            <h2>Clearances</h2>
            {isLoading ? ( // Display loading indicator while isLoading is true
                <div className="loading"></div>
            ) : (
                allClearances.items &&
                allClearances.items.map((clearance, index) => (
                    <div key={clearance.id} >
                        <p className='Clearances-item'>{clearance.status} {clearance.type} </p>
                    </div>
                ))
            )}
        </div>

    );
}

export default Clearances;
