import Footer from "../../components/Footer";
import TemplateMain from "../../components/TemplateMain";
import BackgroundFan from "../../components/BackgroundFan";
import FormRegister from "../../components/FormRegister";

export default function Login(): JSX.Element {
    return (
        <>
            <BackgroundFan />
            <TemplateMain>
                <FormRegister />
            </TemplateMain>
            <Footer />
        </>
    );
}
