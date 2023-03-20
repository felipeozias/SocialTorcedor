import { createContext } from "react";
import { string } from "yargs";

const DataUserForHeader = createContext({
    logo: String,
    alt: String,
    name: String,
    nickname: String,
});

export default DataUserForHeader;
