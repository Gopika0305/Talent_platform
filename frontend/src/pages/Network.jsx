
import React from 'react'
import Layout from '../wrappers/Layout'
import NetworkCard from '../components/NetworkCard'

// Commented below is Example using of network card without repeating the code

// const Network = () => {
//   const cards = Array(12).fill(null).map((_, index) => (
//     <NetworkCard key={index} />
//   ))

//   return (
//     <div className="container mt-44 ml-4 flex flex-wrap space-y-6 justify-around">
//       {cards}
//     </div>
//   )
// }


const Network = () => {
  const networkData = [
    { name: "Bonnie Jenson", domain: "Visual designer" },
    { name: "John Doe", domain: "Frontend developer" },
    { name: "Jane Doe", domain: "Backend developer" },
    { name: "John Smith", domain: "Fullstack developer" },
    { name: "Jane Smith", domain: "Data scientist" },
    { name: "John Doe", domain: "Frontend developer" }
  ];

  return (
    <>
    
      <div className="container m-4 ml-4 flex flex-wrap justify-around">
        <div className="w-full mb-6">
        </div>
        {networkData.map((person, index) => (
          <NetworkCard
            key={index}
            name={person.name}
            domain={person.domain}
            className="w-full md:w-1/2 lg:w-1/3 p-4"
          />
        ))}
      </div>
    
    </>
  );
}

export default Network