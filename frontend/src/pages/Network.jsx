
import React from 'react'
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
    <NetworkCard /> 
    <NetworkCard /> 
    <NetworkCard /> 
    <NetworkCard /> 

    <NetworkCard /> 
    <NetworkCard /> 
    <NetworkCard /> 
    <NetworkCard /> 

    <NetworkCard /> 
    <NetworkCard /> 
    <NetworkCard /> 
    <NetworkCard /> 
    </div>
    </>
  )
}

export default Network