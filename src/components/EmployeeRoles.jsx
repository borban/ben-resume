import React, { useEffect, useState } from 'react';
import '../App.css';

import { generateClient } from 'aws-amplify/api';
import { listEmployeeRoles } from '../graphql/queries';

import Employer from './Employer';
import TimeTracker from './TimeTracker';

function EmployeeRoles() {
    const client = generateClient();

    const [allEmployeeRoles, setEmployeeRoles] = useState({});
    const [isLoading, setIsLoading] = useState(true); // State to track loading status

    useEffect(() => {
        const fetchEmployeeRoles = async () => {
            try {
                const response = await client.graphql({
                    query: listEmployeeRoles,
                });
                // Sort the items array based on the start date in descending order
                const sortedEmployeeRoles = response.data.listEmployeeRoles.items.sort(
                    (a, b) => new Date(b.start_date) - new Date(a.start_date)
                );

                setEmployeeRoles({ items: sortedEmployeeRoles });
                setIsLoading(false); // Set loading to false after data is fetched
            } catch (error) {
                console.error('Error fetching EmployeeRoles:', error);
            }
        };

        fetchEmployeeRoles();
    }, []); // Empty dependency array to run the effect only once

    return (
        <div className='EmployeeRoles-container'>
            {isLoading ? ( // Display loading indicator while isLoading is true
                <div className="loading"></div>
            ) : (
                allEmployeeRoles.items &&
                allEmployeeRoles.items.map((employeeRole, index) => (
                    <div key={employeeRole.id} className='EmployeeRoles-item'>
                        <Employer id={employeeRole.employerID} />
                        <h4>{employeeRole.name}</h4>
                        <h4>
                            {new Date(employeeRole.start_date).toLocaleDateString('en-US', {
                                month: 'long',
                                year: 'numeric',
                            })}
                            {' - '}
                            {employeeRole.end_date ? new Date(employeeRole.end_date).toLocaleDateString('en-US', {
                                month: 'long',
                                year: 'numeric',
                            }) : 'Present'}
                        </h4>
                        <h4><TimeTracker startDate={new Date(employeeRole.start_date)} endDate={employeeRole.end_date ? new Date(employeeRole.end_date) : new Date()}/></h4>
                        <p>{employeeRole.description}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default EmployeeRoles;
