import { useState } from 'react'
import Jobskeleton from '../components/Jobskeleton';
import SideBar from '../components/Sidebar';


const postdata = [
  { title: "Hiring Designers", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam quas, enim asperiores esse est impedit nihil nulla neque, magnam libero debitis eligendi corrupti porro ab officiis similique dolores sapiente!", position: "Web Developers",organization:"Boring company"},
  { title: "Hiring Designers", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam quas, enim asperiores esse est impedit nihil nulla neque, magnam libero debitis eligendi corrupti porro ab officiis similique dolores sapiente!", position: "Data Analyst",organization:"Boring company" },
  { title: "Hiring Designers", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam quas, enim asperiores esse est impedit nihil nulla neque, magnam libero debitis eligendi corrupti porro ab officiis similique dolores sapiente!", position: "Python Developer",organization:"Boring company" },
  { title: "Hiring Designers", content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione quam quas, enim asperiores esse est impedit nihil nulla neque, magnam libero debitis eligendi corrupti porro ab officiis similique dolores sapiente!", position: "Content Writer",organization:"Boring company" },
];


const Jobs = () => {
  const [clicked, setClicked] = useState(false)

  const handleJobClick = (index) => {
    setClicked((prevClicked) => ({
      ...prevClicked,
      [index]: !prevClicked[index],
    }));
  };



  return (
    <>
    <div>

    {postdata.map((post,index)=>{ 
      return(
        <button onClick={handleJobClick} >
         
       {clicked ? <SideBar/>:<Jobskeleton key={index}  title={post.title} content={post.content} position={post.position} organization={post.organization}/> }
  
       </button>
    )})}
    </div>
       </>
  )
}

export default Jobs

