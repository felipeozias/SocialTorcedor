import Footer from "../../components/Footer";
import TemplateMain from "../../components/TemplateMain";
import BackgroundFan from "../../components/BackgroundFan";
import FormRegister from "../../components/FormRegister";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import registerService from "../../services/register";

export default function Register(): JSX.Element {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(false);
    const [authError, setAuthError] = useState(false);
    const [password, setPassword] = useState(true);  
    const [error, setError] = useState("");  

    useEffect(() => {
        if (auth) navigate("/home");
    }, [auth, navigate]);

    async function register(e: any) {
        const req = await registerService(e);

        
        setError(req.error? req.error: "");
        

        if(!req.password){
            setPassword(false);
        }
        setAuthError(req?.isNoAuth === true);

        if (req?.auth) {
            setAuth(true);
            return;
        }

    }


    return (
        <>
            <BackgroundFan />
            <TemplateMain smallLogo={true}>
                <FormRegister
                    submit={(e: any) => register(e)}
                    noAuth={authError}
                    password={password}  
                    error={error}
                />
            </TemplateMain>
            <Footer />
        </>
    );
}
