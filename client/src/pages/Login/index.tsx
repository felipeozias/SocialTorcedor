import HeaderReduced from "../../components/HeaderReduced";
import Footer from "../../components/Footer";
import TemplateLogin from "../../components/TemplateMain";
import BackgroundFan from "../../components/BackgroundFan";
import FormLogin from "../../components/FormLogin";

export default function Login(): JSX.Element {
    return (
        <>
            {/*  <HeaderReduced /> */}
            <BackgroundFan />
            <TemplateLogin title="ENTRAR">
                <FormLogin />
            </TemplateLogin>
            <Footer />
        </>
    );
}
