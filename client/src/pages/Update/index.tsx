import Footer from "../../components/Footer";
import TemplateMain from "../../components/TemplateMain";
import BackgroundFan from "../../components/BackgroundFan";
import FormUpdate from "../../components/FormUpdate";
import updateUser from "../../services/update"


interface User {
    id:string;
    name: string;
    team: number;
    password: string;
    photo?: File;
}


export default function Update(): JSX.Element {

    const submitUpdate = async (userData: User) => {
        try {
        const response = await updateUser(userData);
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      };
   
    return (
        <>
            <BackgroundFan />
            <TemplateMain smallLogo={true}>
                <FormUpdate                     
                    submit={(e: any) => submitUpdate(e)}
                />
            </TemplateMain>
            <Footer />
        </>
    );
}


