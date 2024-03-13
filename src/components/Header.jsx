import React, { useEffect, useState } from 'react';
import '../App.css';

import { generateClient } from 'aws-amplify/api';
import { getHeader } from '../graphql/queries';

function Header() {
  const client = generateClient();

  const [header, setHeader] = useState({});

  useEffect(() => {
    const fetchHeaders = async () => {
      try {
        const response = await client.graphql({
          query: getHeader,
          variables: { id: '4d486b6d-f2bf-4c35-aa40-1342b07d93e2' },
        });
        setHeader(response.data.getHeader);
      } catch (error) {
        console.error('Error fetching headers:', error);
      }
    };

    fetchHeaders();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className='Header'>
      <h1>{header.title}</h1>
      <h2>{header.location} | {header.phone} | {header.email}</h2>
      <h2><a href={header.custom_url2} target='_blank'>GitHub</a> | <a href={header.custom_url3} target='_blank'>LinkedIn</a></h2>
      <p>{header.summary}</p>
    </div>
  );
}

export default Header;
