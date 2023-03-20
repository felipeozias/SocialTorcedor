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

// cookie
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuaWNrbmFtZSI6IjY0MGFiNjhhMjdmZWEwMDRiNGI5Y2UwNSIsImlhdCI6MTY3OTMxODk3NiwiZXhwIjoxNjc5MzIyNTc2fQ.u9KEGeNnwyGNlog3qxFXrst1gG49U43jyiqkP3Qz0xc


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


