import React, { useEffect, useState } from 'react';
import '../App.css';

import { generateClient } from 'aws-amplify/api';
import { getEmployer } from '../graphql/queries';

function Employer(props) {
    const client = generateClient();

    const [employer, setEmployer] = useState({});
    const [isLoading, setIsLoading] = useState(true); // State to track loading status

    useEffect(() => {
        const fetchEmployer = async () => {
            try {
                const response = await client.graphql({
                    query: getEmployer,
                    variables: { id: props.id }
                });
                setEmployer(response.data.getEmployer);
                setIsLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching employer:', error);
            }
        };

        fetchEmployer();
    }, [props.id]); // Add props.id to the dependency array

    return (
        <div>
            {isLoading ? ( // Display loading indicator while isLoading is true
                <div className="loading"></div>
            ) : (
                <div>
                    {employer && (
                        <div key={employer.id}>
                            <h2>{employer.name}</h2>
                            <h4>{employer.location}</h4>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Employer;
