import Button from "../Button";
import InputUser from "../InputUser";
import { BoxInputs, Form, Message } from "./style";
import { Link } from "react-router-dom";

interface IProps {
    submit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export default function FormLogin(props: IProps): JSX.Element {
    return (
        <Form onSubmit={props.submit}>
            <BoxInputs>
                <InputUser type="text" name="nick">
                    Apelido:
                </InputUser>
                <InputUser type="password" password={true} name="password">
                    Senha:
                </InputUser>
            </BoxInputs>

            {/* <Link to="/home"> */}
            <Button type="submit">ENTRAR</Button>
            {/* </Link> */}
            <Message>
                Ainda não possúi conta?{" "}
                <Link to={"/register"} className="link-style">
                    CADASTRE-SE AQUI
                </Link>
            </Message>
        </Form>
    );
}
