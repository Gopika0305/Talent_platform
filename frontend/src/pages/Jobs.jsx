import { useState,useRef,useEffect } from 'react'
import Jobskeleton from '../components/Jobskeleton';


const postdata = [
  { title: "Hiring Designers", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam quas, enim asperiores esse est impedit nihil nulla neque, magnam libero debitis eligendi corrupti porro ab officiis similique dolores sapiente!", position: "Web Developers",organization:"Boring company"},
  { title: "Hiring Designers", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam quas, enim asperiores esse est impedit nihil nulla neque, magnam libero debitis eligendi corrupti porro ab officiis similique dolores sapiente!", position: "Data Analyst",organization:"Boring company" },
  { title: "Hiring Designers", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam quas, enim asperiores esse est impedit nihil nulla neque, magnam libero debitis eligendi corrupti porro ab officiis similique dolores sapiente!", position: "Python Developer",organization:"Boring company" },
  { title: "Hiring Designers", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam quas, enim asperiores esse est impedit nihil nulla neque, magnam libero debitis eligendi corrupti porro ab officiis similique dolores sapiente!", position: "Content Writer",organization:"Boring company" },
];


const Jobs = () => {
  const [clicked, setClicked] = useState(false)
  const postref = useRef()

const handleJobClick = () => {
  setClicked(true);
  
}

  useEffect(() => {
    if (clicked) {
      postref.current.scrollIntoView({ behavior: "smooth" })
    }
  }, [clicked])
  return (
    <>
    <div>

    {postdata.map((post,index)=>{ 
      return(
        <button onClick={handleJobClick} >
       <Jobskeleton key={index} ref={postref} title={post.title} content={post.content} position={post.position} organization={post.organization}/> </button>
    )})}
    </div>
       </>
  )
}

export default Jobs