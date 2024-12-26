import FormLogin from "../components/FormLogin";
import Register from "../components/Register";

const Login = () => {
    return (
        <FormLogin children={<Register/>}/>
    );
};

export default Login;
