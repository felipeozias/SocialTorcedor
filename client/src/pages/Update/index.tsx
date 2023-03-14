import Footer from "../../components/Footer";
import TemplateMain from "../../components/TemplateMain";
import BackgroundFan from "../../components/BackgroundFan";
import FormUpdate from "../../components/FormUpdate";

export default function Login(): JSX.Element {
    return (
        <>
            <BackgroundFan />
            <TemplateMain>
                <FormUpdate />
            </TemplateMain>
            <Footer />
        </>
    );
}
