import React, { useEffect, useState } from 'react';
import '../App.css';

import { generateClient } from 'aws-amplify/api';
import { listEmployeeRoles } from '../graphql/queries';

import Employer from './Employer';

function EmployeeRoles() {
    const client = generateClient();

    const [allEmployeeRoles, setEmployeeRoles] = useState({});

    useEffect(() => {
        const fetchEmployeeRoles = async () => {
            try {
                const response = await client.graphql({
                    query: listEmployeeRoles,
                });
                setEmployeeRoles(response.data.listEmployeeRoles);
            } catch (error) {
                console.error('Error fetching EmployeeRoles:', error);
            }
        };

        fetchEmployeeRoles();
    }, []); // Empty dependency array to run the effect only once

    return (
        <>
            {allEmployeeRoles.items &&
                allEmployeeRoles.items.map((employeeRole, index) => (
                    <div key={employeeRole.id}>
                        <Employer id={employeeRole.employerID} />
                        <h4>{employeeRole.name}</h4>
                        <h4>{employeeRole.start_date} - {employeeRole.end_date}</h4>
                        <p>{employeeRole.description}</p>
                    </div>
                ))}
        </>
    );
}

export default EmployeeRoles;
