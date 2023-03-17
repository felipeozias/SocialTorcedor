import Footer from "../../components/Footer";
import TemplateMain from "../../components/TemplateMain";
import BackgroundFan from "../../components/BackgroundFan";
import FormUpdate from "../../components/FormUpdate";

export default function Update(): JSX.Element {
    return (
        <>
            <BackgroundFan />
            <TemplateMain smallLogo={true}>
                <FormUpdate />
            </TemplateMain>
            <Footer />
        </>
    );
}
