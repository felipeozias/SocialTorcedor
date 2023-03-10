import { Link } from "react-router-dom";
import Button from "../Button";
import InputUser from "../InputUser";
import SelectType from "../SelectType";
import { BoxInputs, Form, Message } from "./style";

export default function FormRegister(): JSX.Element {
    return (
        <Form>
            <BoxInputs>
                <InputUser type="text">Apelido:</InputUser>
                <InputUser type="text">Nome:</InputUser>
                <SelectType></SelectType>
                <InputUser type="password">Senha:</InputUser>
                <InputUser type="password">Confimar Senha:</InputUser>
            </BoxInputs>

            <Button>CADASTRAR</Button>
            <Message>
                Já possui conta?{" "}
                <Link to={"/login"} className="link-style">
                    CADASTRE-SE AQUI
                </Link>
            </Message>
        </Form>
    );
}
