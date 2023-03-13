import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../Button";
import InputUser from "../InputUser";
import SelectType from "../SelectType";
import { BoxInputs, ErrorMessage, Form, Message } from "./style";

export default function FormRegister(): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const submit = (data: any) => {
        console.log(data);
    };

    return (
        <Form onSubmit={handleSubmit(submit)}>
            <BoxInputs>
                <InputUser
                    type="text"
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
                    validates={{
                        ...register("name", {
                            required: true,
                            pattern:
                                /^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]+$/,
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
                <SelectType></SelectType>
                <InputUser
                    type="password"
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
