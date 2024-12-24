
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
    <div className="container mt-44 ml-4 flex flex-wrap space-y-6 justify-around ">
      <Search/>
    <NetworkCard  name="Bonnie Jenson" domain="Visual designer"/> 
    <NetworkCard  name="John Doe" domain="Frontend developer"/>
    <NetworkCard  name="Jane Doe" domain="Backend developer"/>
    <NetworkCard  name="John Smith" domain="Fullstack developer"/>
    <NetworkCard  name="Jane Smith" domain="Data scientist"/>
    <NetworkCard  name="John Doe" domain="Frontend developer"/>
    </div>
    </>
  )
}

export default Network