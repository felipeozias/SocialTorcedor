import Footer from "../../components/Footer";
import BackgroundFan from "../../components/BackgroundFan";
import FormUpdate from "../../components/FormUpdate";
import updateUser from "../../services/update";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TemplateUpdate from "../../components/TemplateUpdate";
import ModalAlert from "../../components/ModalAlert";

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
    const [password, setPassword] = useState(true);
    const [modalAlert, setModalAlert] = useState({ content: ``, color: "", times: 2, });

    useEffect(() => {
        if (ok) navigate("/home");
    }, [ok, navigate]);

    const submitUpdate = async (userData: User) => {

        try {
            const response = await updateUser(userData);

            setPassword(response.password);

            setOk(response.ok);
            if (!response.ok) alert("Houve um erro interno com o servidor");
        } catch (error) {
            setModalAlert({
                content: `Houve um erro interno com o servidor: ${error}`, color: "red", times: 2,
            });
        }
    };

    return (
        <>
            <BackgroundFan />
            <TemplateUpdate smallLogo={true}>
                <FormUpdate
                    submit={(e: any) => submitUpdate(e)}
                    password={password}
                />
            </TemplateUpdate>
            <ModalAlert>{modalAlert}</ModalAlert>
            <Footer />
        </>
    );
}
