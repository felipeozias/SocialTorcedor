import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../Button";
import InputUser from "../InputUser";
import SelectType from "../SelectType";
import { BoxInputs, ErrorMessage, ErrorServer, Form, Message } from "./style";

interface IProps {
    submit: (e: any) => void;
    noAuth?: boolean;
}

export default function FormRegister(props: IProps): JSX.Element {
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
                    type="text"
                    name="name"
                    validates={{
                        ...register("name", {
                            required: true,
                            pattern: /^[a-zA-Zà-úÀ-Ú ]+$/,
                        }),
                    }}
                >
                    Nome:
                </InputUser>
                {errors.name && errors.name.type === "required" && (
                    <ErrorMessage>Preencha o campo Nome</ErrorMessage>
                )}
                {errors.name && errors.name.type === "pattern" && (
                    <ErrorMessage>
                        O Nome deve começar com maiusculas{<br />} e só deve
                        conter letras
                    </ErrorMessage>
                )}
                <SelectType
                    name="team"
                    validates={{
                        ...register("team", {
                            required: true,
                        }),
                    }}
                />
                <InputUser
                    type="password"
                    name="password"
                    password={true}
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
                <InputUser
                    type="password"
                    name="confirm-password"
                    password={true}
                    validates={{
                        ...register("password", {
                            required: true,
                        }),
                    }}
                >
                    Confimar Senha:
                </InputUser>
                {errors.password && errors.password.type === "required" && (
                    <ErrorMessage>Preencha o campo Password</ErrorMessage>
                )}
            </BoxInputs>
            {props.noAuth && (
                <ErrorServer>
                    Houve um erro no servidor :({<br />} tente nvamente
                </ErrorServer>
            )}

            <Button>CADASTRAR</Button>
            <Message>
                Já possui conta?{" "}
                <Link to={"/login"} className="link-style">
                    ENTRE AQUI
                </Link>
            </Message>
        </Form>
    );
}
