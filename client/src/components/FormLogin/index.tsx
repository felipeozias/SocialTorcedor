import Button from "../Button";
import InputUser from "../InputUser";
import { BoxInputs, ErrorMessage, Form, Message, NoAuthMessage } from "./style";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

interface IProps {
    submit: (e: any) => void;
    noAuth?: boolean;
}

export default function FormLogin(props: IProps): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    return (
        <Form onSubmit={handleSubmit(props.submit)}>
            <BoxInputs>
                <InputUser
                    type="text"
                    name="nickname"
                    validates={{
                        ...register("nickname", {
                            required: true,
                            pattern: /^[a-z][a-z0-9-_@.]*[a-z0-9]+$/,
                        }),
                    }}
                >
                    Apelido:
                </InputUser>
                {errors.nickname && errors.nickname.type === "required" && (
                    <ErrorMessage>Preencha o campo Apelido</ErrorMessage>
                )}
                {errors.nickname && errors.nickname.type === "pattern" && (
                    <ErrorMessage>
                        O Apelido só pode conter letras,{<br />} números e os
                        caracteres: _-@
                    </ErrorMessage>
                )}
                <InputUser
                    type="password"
                    password={true}
                    name="password"
                    validates={{
                        ...register("password", {
                            required: true,
                        }),
                    }}
                >
                    Senha:
                </InputUser>
                {errors.password && errors.password.type === "required" && (
                    <ErrorMessage>Preencha o campo Password</ErrorMessage>
                )}
            </BoxInputs>
            {props.noAuth && (
                <NoAuthMessage>Apelido e senha estão incorretos</NoAuthMessage>
            )}
            
            <Button type="submit">ENTRAR</Button>
            
            

            <Message>
                Ainda não possúi conta?{" "}
                <Link to={"/register"} className="link-style">
                    CADASTRE-SE AQUI
                </Link>
            </Message>
        </Form>
    );
}

