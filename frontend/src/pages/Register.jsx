import Button from "../components/Button";

const Register =() =>{ 
    return ( 
        <>
        <h1 className="text-2xl aleo-regular text-center">Register</h1>
        <div className="flex flex-col items-center  mt-10 pl-16 p-5 border ">
        <input className='m-4 rounded' type="text" placeholder="firstname"/>
        <input className='m-2 rounded' type="text" placeholder="lastname"/>
        <input className='m-2 rounded' type="text" placeholder="username"/>
        <input className='m-2 rounded' type="password" placeholder="password"/>
        <Button title="Register" />
        </div>
        </>
    )

}


export default Register;