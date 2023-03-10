import Button from "../Button";
import InputUser from "../InputUser";
import { BoxInputs, Form, Link as LinkS, Message } from "./style";
import { Link } from "react-router-dom";

export default function FormLogin(): JSX.Element {
    return (
        <Form>
            <BoxInputs>
                <InputUser type="text">Apelido:</InputUser>
                <InputUser type="password" password={true}>
                    Senha:
                </InputUser>
            </BoxInputs>

            <Link to="/home">
                <Button>ENTRAR</Button>
            </Link>
            <Message>
                Ainda não possúi conta? <LinkS href="/">CADASTRE-SE AQUI</LinkS>
            </Message>
        </Form>
    );
}
