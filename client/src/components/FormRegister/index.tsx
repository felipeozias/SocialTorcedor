import { Link } from "react-router-dom";
import Button from "../Button";
import InputUser from "../InputUser";
import { BoxInputs, Form, Message } from "./style";

export default function FormRegister(): JSX.Element {
    return (
        <Form>
            <BoxInputs>
                <InputUser type="text">Apelido:</InputUser>
                <InputUser type="text">Nome:</InputUser>
                <InputUser type="select">Time do coração:</InputUser>
                <InputUser type="password" password={true}>
                    Senha:
                </InputUser>
                <InputUser type="password" password={true}>
                    Confimar Senha:
                </InputUser>
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
