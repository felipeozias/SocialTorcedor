import { StyledHeader } from "./styles";
import LogoComplete from "../LogoComplete";
import UserPerfil from "../UserPerfil";
import React from "react";

export default function HeaderComplete() {
    return (
        <StyledHeader>
            <LogoComplete />
            <UserPerfil />
        </StyledHeader>
    );
}
