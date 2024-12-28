

const Button = ({title,onClick}) => { 
   

    return (
        <>
        <button className='bg-blue-400 m-4 p-2 px-4 rounded-full aleo-regular text-normal' onClick={onClick}>{title}</button>
        </>
    )
}


export default Button;
