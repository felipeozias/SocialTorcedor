import Button from "../Button";
import InputUser from "../InputUser";
import { BoxInputs, Form, Link, Message } from "./style";

export default function FormLogin(): JSX.Element {
    return (
        <Form>
            <BoxInputs>
                <InputUser type="text">Apelido:</InputUser>
                <InputUser type="password">Senha:</InputUser>
            </BoxInputs>

            <Button>ENTRAR</Button>
            <Message>
                Ainda não possúi conta? <Link href="/">CADASTRE-SE AQUI</Link>
            </Message>
        </Form>
    );
}
