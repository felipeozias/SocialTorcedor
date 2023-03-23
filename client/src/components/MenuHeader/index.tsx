import React from "react";

import { MenuHeaderUser, TextList } from "./style";
import { Link } from "react-router-dom";
import exit from "../../services/exit";

export default function MenuHeader(): JSX.Element {
    return (
        <MenuHeaderUser>
            <Link to="/update-user" className="link-style">
                <TextList>Atualizar Perfil</TextList>
            </Link>
            <Link to="/login" className="link-style" onClick={exit}>
                <TextList>Sair</TextList>
            </Link>
        </MenuHeaderUser>
    );
}
