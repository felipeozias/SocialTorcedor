import { createContext } from "react";

const DataUserForHeader = createContext({
    logo: String,
    alt: String,
    name: String,
    nickname: String,
    team: String,
    id: String
});

export default DataUserForHeader;
