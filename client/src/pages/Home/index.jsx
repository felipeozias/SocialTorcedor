import Header from "../../components/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer";

//------ Declared context ------
import DataUserForHeader from "../../components/contexts/DataUserForHeader";

export default function Home() {
    return (
        <DataUserForHeader.Provider
            value={{
                logo: "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG-High-Quality-Image.png",
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
