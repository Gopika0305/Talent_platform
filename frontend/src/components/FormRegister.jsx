import { Link , useNavigate} from 'react-router-dom';

const FormRegister = () => { 
     const navigate  = useNavigate();
    return ( 
        <>
         <button className="bg-blue-500 text-white p-2 mt-2 rounded w-full hover:bg-blue-600" 
           onClick={() => {
           <Link to="/register" />
           navigate("/register")}
           }>
           SignUp
         </button>
        </>
    )
}

export default FormRegister;