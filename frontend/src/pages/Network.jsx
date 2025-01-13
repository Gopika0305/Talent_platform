
import React from 'react'

import NetworkCard from '../components/NetworkCard'


const Network = () => {
  const networkData = [
    { name: "Bonnie Jenson", domain: "Visual designer" },
    { name: "John Doe", domain: "Frontend developer" },
    { name: "Jane Doe", domain: "Backend developer" },
    { name: "John Smith", domain: "Fullstack developer" },
    { name: "Jane Smith", domain: "Data scientist" },
    { name: "John Doe", domain: "Frontend developer" },
    
  ];

  return (
    <>
    
      <div className="container mx-16 px-16 flex gap-5 flex-wrap justify-evenly">
       
        {networkData.map((person, index) => (
          <NetworkCard
            key={index}
            name={person.name}
            domain={person.domain}
            className="w-full m-2 md:w-1/2 lg:w-1/4 p-4"/>
        ))}
      </div>
    
    </>
  );
}

export default Network