import { createContext } from "react";

const DataUserForHeader = createContext({
    logo: String,
    alt: String,
    name: String,
    nickname: String,
});

export default DataUserForHeader;
