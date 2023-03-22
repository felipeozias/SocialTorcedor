import Footer from "../../components/Footer";
import BackgroundFan from "../../components/BackgroundFan";
import FormUpdate from "../../components/FormUpdate";
import updateUser from "../../services/update";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TemplateUpdate from "../../components/TemplateUpdate";

interface User {
    id: string;
    name: string;
    team: number;
    password: string;
    photo?: File;
}

export default function Update(): JSX.Element {
    const navigate = useNavigate();
    const [ok, setOk] = useState(false);

    useEffect(() => {
        if (ok) navigate("/home");
    }, [ok, navigate]);

    const submitUpdate = async (userData: User) => {
        try {
            const response = await updateUser(userData);
            setOk(response.ok);
            if (!response.ok) alert("Houve um erro interno com o servidor");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <>
            <BackgroundFan />
            <TemplateUpdate smallLogo={true}>
                <FormUpdate submit={(e: any) => submitUpdate(e)} />
            </TemplateUpdate>
            <Footer />
        </>
    );
}
