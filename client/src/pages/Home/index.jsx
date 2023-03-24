import Header from "../../components/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer";
import { homeService } from "../../services/home";
import { useLoaderData, useNavigate } from "react-router-dom";

//------ Declared context ------
import DataUserForHeader from "../../components/contexts/DataUserForHeader";
import { useEffect } from "react";

export async function homeLoader() {
    const user = await homeService();
    return { user };
}

export default function Home() {
    const { user } = useLoaderData();
    const navigate = useNavigate();

    useEffect(() => {
        if (!user.auth) navigate("/login");
    }, [navigate, user.auth]);

    return (
        <DataUserForHeader.Provider
            value={{
                id: user.data ? user.data._id : "",
                logo:
                    user.data && user.data.pathImage
                        ? `${process.env.REACT_APP_API}/assets/${user.data.pathImage}`
                        : `${process.env.REACT_APP_API}/assets/${user?.data?.team.toLocaleLowerCase().replace('-', '').replace(' ', '')}.png`,
                alt: "Usuário",
                name: user.data ? user.data.name : "",
                nickname: user.data ? user.data.nickname : "",
                team: user.data ? user?.data?.team : "",
            }}
        >
            <Header complete={true} />
            <Main />
            <Footer />
        </DataUserForHeader.Provider>
    );
}
