import { useState,useRef,useEffect } from 'react'
import Post from '../components/Post'


const postdata = [
  { title: "Hiring Designers", content: "This is the first post.", name: "FunWorld", position: "designer" },
  { title: "Hiring Designers", content: "Yet another post!", name: "FunWorld", position: "designer" },
  { title: "Hiring Designers", content: "And one more for good measure.", name: "FunWorld", position: "designer" },
  { title: "Hiring Designers", content: "This is the first post.", name: "FunWorld", position: "designer" }
];


const Jobs = () => {
  const [clicked, setClicked] = useState(false)
  const postref = useRef()

  useEffect(() => {
    if (clicked) {
      postref.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [clicked])
  return (
    <>
    {postdata.map((post,index)=>{ 
      return <Post key={index} ref={postref} title={post.title} content={post.content} name={post.name} position={post.position}/>
    })}
       </>
  )
}

export default Jobs