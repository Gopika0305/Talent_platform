import React from 'react'
import NetworkCard from '../components/NetworkCard'

const Network = () => {
  return (
    <>
    <div className="container mt-44 ml-4 flex flex-wrap space-y-6 justify-around ">
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