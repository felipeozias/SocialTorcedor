import Header from "../../components/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer";

//------ Declared context ------
import DataUserForHeader from "../../components/contexts/DataUserForHeader";

export default function Home() {
    return (
        <DataUserForHeader.Provider
            value={{
                logo: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
                alt: "Usuário",
                name: "Torcedor",
                email: "torcedor@mail.com",
            }}
        >
            <Header complete={true} />
            <Main />
            <Footer />
        </DataUserForHeader.Provider>
    );
}
