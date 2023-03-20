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
    console.log(user)
    useEffect(() => {
        if (!user.auth) navigate("/login");
    }, [navigate]);

    return (
        <DataUserForHeader.Provider
            value={{
                id: user.data._id || "",
                logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                alt: "Usuário",
                name: user.data.name || "Torcedor",
                nickname: user.data.nickname || "torcedor.com",
                team: user.data.team || "",
            }}
        >
            <Header complete={true} />
            <Main />
            <Footer />
        </DataUserForHeader.Provider>
    );
}
