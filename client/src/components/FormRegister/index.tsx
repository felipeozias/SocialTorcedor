import Button from "../Button";
import InputUser from "../InputUser";
import { BoxInputs, Form, Link, Message } from "./style";

export default function FormRegister(): JSX.Element {
    return (
        <Form>
            <BoxInputs>
                <InputUser type="text">Apelido:</InputUser>
                <InputUser type="text">Nome:</InputUser>
                <InputUser type="select">Time do coração:</InputUser>
                <InputUser type="password">Senha:</InputUser>
                <InputUser type="password">Confimar Senha:</InputUser>
            </BoxInputs>

            <Button>CADASTRAR</Button>
            <Message>
                Já possui conta? <Link href="/">CLIQUE AQUI PARA ENTRAR</Link>
            </Message>
        </Form>
    );
}