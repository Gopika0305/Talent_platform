import { useState } from 'react'

const Button = ({props,onClick}) => { 
    const [value,setValue] = useState(false);

    return (
        <>
        <button className='bg-green-400 m-4 p-2 rounded 'onClick={()=>setValue(true)}>{props}</button>
        </>
    )
}


export default Button;
