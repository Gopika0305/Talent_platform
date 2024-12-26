import FormLogin from "../components/FormLogin";
import FormRegister from "../components/FormRegister";

const Login = () => {
    return (
        <FormLogin children={<FormRegister/>}/>
    );
};

export default Login;
