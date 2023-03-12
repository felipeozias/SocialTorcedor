import Footer from "../../components/Footer";
import TemplateMain from "../../components/TemplateMain";
import BackgroundFan from "../../components/BackgroundFan";
import FormLogin from "../../components/FormLogin";
import loginService from "../../services/login";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Login(): JSX.Element {
    const navigate = useNavigate();
    const [auth, setAuth] = useState(false);
    const [authError, setAuthError] = useState(false);

    useEffect(() => {
        if (auth) navigate("/home");
    }, [auth, navigate]);

    async function login(e: any) {
        const req = await loginService(e);
        setAuthError(req?.isNoAuth === true);

        if (req?.auth) {
            setAuth(true);
            return;
        }
    }

    return (
        <>
            <BackgroundFan />
            <TemplateMain>
                <FormLogin submit={(e: any) => login(e)} noAuth={authError} />
            </TemplateMain>
            <Footer />
        </>
    );
}
