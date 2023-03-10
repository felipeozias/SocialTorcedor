import Footer from "../../components/Footer";
import TemplateMain from "../../components/TemplateMain";
import BackgroundFan from "../../components/BackgroundFan";
import FormLogin from "../../components/FormLogin";
import loginService from "../../services/login";

export default function Login(): JSX.Element {
    return (
        <>
            <BackgroundFan />
            <TemplateMain>
                <FormLogin
                    submit={(e: React.FormEvent<HTMLFormElement>) =>
                        loginService(e)
                    }
                />
            </TemplateMain>
            <Footer />
        </>
    );
}
