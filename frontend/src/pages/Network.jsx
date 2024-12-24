
import React from 'react'
import Search from '../components/Search'
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
  return (
    <>
      <div className="container mt-40 ml-4 flex flex-wrap justify-around">
        <div className="w-full mb-6">
          <Search className="w-full" />
        </div>
        <NetworkCard name="Bonnie Jenson" domain="Visual designer" className="w-full md:w-1/2 lg:w-1/3 p-4" />
        <NetworkCard name="John Doe" domain="Frontend developer" className="w-full md:w-1/2 lg:w-1/3 p-4" />
        <NetworkCard name="Jane Doe" domain="Backend developer" className="w-full md:w-1/2 lg:w-1/3 p-4" />
        <NetworkCard name="John Smith" domain="Fullstack developer" className="w-full md:w-1/2 lg:w-1/3 p-4" />
        <NetworkCard name="Jane Smith" domain="Data scientist" className="w-full md:w-1/2 lg:w-1/3 p-4" />
        <NetworkCard name="John Doe" domain="Frontend developer" className="w-full md:w-1/2 lg:w-1/3 p-4" />
      </div>
    </>
  )
}

export default Network