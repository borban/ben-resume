import React, { useEffect, useState } from 'react';
import '../App.css';

import { generateClient } from 'aws-amplify/api';
import { listEmployeeSkills } from '../graphql/queries';

function Skills() {
  const client = generateClient();

  const [allEmployeeSkills, setEmployeeSkills] = useState({});

  useEffect(() => {
    const fetchEmployeeSkills = async () => {
      try {
        const response = await client.graphql({
          query: listEmployeeSkills,
        });
        setEmployeeSkills(response.data.listEmployeeSkills);
      } catch (error) {
        console.error('Error fetching employee skills:', error);
      }
    };

    fetchEmployeeSkills();
  }, []); // Empty dependency array to run the effect only once

  const skillsPerColumn = 5;

  return (
    <>
      <div className="skills-container">
        {allEmployeeSkills.items &&
          allEmployeeSkills.items.map((employeeSkill, index) => (
            <div key={employeeSkill.id} className={`column-${Math.floor(index / skillsPerColumn) + 1}`}>
              <li>{employeeSkill.name}</li>
            </div>
          ))}
      </div>
    </>
  );
}

export default Skills;
