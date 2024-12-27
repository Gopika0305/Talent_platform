import React from 'react'
import Post from '../components/Post'


const postdata = [
  { title: "Hiring Designers", content: "This is the first post.", name: "FunWorld", position: "designer" },
  { title: "Hiring Designers", content: "Yet another post!", name: "FunWorld", position: "designer" },
  { title: "Hiring Designers", content: "And one more for good measure.", name: "FunWorld", position: "designer" },
  { title: "Hiring Designers", content: "This is the first post.", name: "FunWorld", position: "designer" }
];
const Jobs = () => {
  return (
    <>
    {postdata.map((post,index)=>{ 
      return <Post key={index} title={post.title} content={post.content} name={post.name} position={post.position}/>
    })}
       </>
  )
}

export default Jobs