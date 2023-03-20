import React from "react";

import { MenuHeaderUser, TextList } from "./style";
import { Link } from "react-router-dom";

export default function MenuHeader(): JSX.Element {
    return (
        <MenuHeaderUser>
            <Link to="/update-user" className="link-style">
                <TextList>Atualizar Perfil</TextList>
            </Link>
            <Link to="/login" className="link-style">
                <TextList>Sair</TextList>
            </Link>
        </MenuHeaderUser>
    );
}
