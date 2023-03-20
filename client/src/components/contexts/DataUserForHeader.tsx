import { createContext } from "react";
import { string } from "yargs";

interface IUserContext {
    logo: string;
    aly: string;
    name: string;
    nickname: string;
}

/* const DataUserForHeader = createContext({
    logo: String,
    alt: String,
    name: String,
    nickname: String,
}); */

const DataUserForHeader = createContext({
    logo: "",
    alt: "",
    name: "",
    nickname: "",
    id: "",
    team: "",
});

export default DataUserForHeader;
