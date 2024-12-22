import { useState } from 'react'

const Button = () => { 
    const [value,setValue] = useState('Click Me');

    return (
        <>
        <button className='bg-green-400 m-4 p-2 rounded 'onClick={()=>setValue("Clicked")}>{value}</button>
        </>
    )
}


export default Button;
