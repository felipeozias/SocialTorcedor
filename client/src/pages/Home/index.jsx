import Header from "../../components/Header";
import Main from "../../components/Main/Main";
import Footer from "../../components/Footer";
//import GroupModal from "../../components/modals/GroupModal";

//------ Declared context ------
import DataUserForHeader from "../../components/contexts/DataUserForHeader";
// import useModal from "../../hooks/useModal";

export default function Name() {
    // const { isOpen, toggle } = useModal();
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
            {/* <button onClick={toggle}> Open Modal</button> */}
            {/* <GroupModal isOpen={isOpen} toggle={toggle} /> */}
            <Footer />
        </DataUserForHeader.Provider>
    );
}
