import Footer from "../../components/Footer";
import TemplateMain from "../../components/TemplateMain";
import BackgroundFan from "../../components/BackgroundFan";
import FormLogin from "../../components/FormLogin";

export default function Login(): JSX.Element {
    return (
        <>
            <BackgroundFan />
            <TemplateMain>
                <FormLogin />
            </TemplateMain>
            <Footer />
        </>
    );
}
