import { useEffect, useState } from 'react'
import ReactLoading from  'react-loading'

const Loading = ({type,color}) =>{ 
    const [loading,setLoading] = useState(false);
    
     useEffect(
        () => { 
            setLoading(true)
        }
     ,[])

    return ( 
        <>
       {/*  {loading && <ReactLoading type={type} color={color}/>} */}
       <ReactLoading type={type} color={color}/>
        </>
    )
}

export default Loading;