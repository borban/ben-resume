import React, { useEffect, useState } from 'react';
import '../App.css';

import { generateClient } from 'aws-amplify/api';
import { getEmployer } from '../graphql/queries';

function Employer(props) {
    const client = generateClient();

    const [employer, setEmployer] = useState({});

    useEffect(() => {
        const fetchEmployer = async () => {
            try {
                const response = await client.graphql({
                    query: getEmployer,
                    variables: { id: props.id }
                });
                setEmployer(response.data.getEmployer);
            } catch (error) {
                console.error('Error fetching employer:', error);
            }
        };

        fetchEmployer();
    }, [props.id]); // Add props.id to the dependency array

    return (
        <>
            {employer && (
                <div key={employer.id}>
                    <h2>{employer.name}</h2>
                    <h4>{employer.location}</h4>
                </div>
            )}
        </>
    );
}

export default Employer;
