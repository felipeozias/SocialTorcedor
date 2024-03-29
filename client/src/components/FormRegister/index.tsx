import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../Button";
import InputUser from "../InputUser";
import SelectType from "../SelectType";
import { BoxInputs, ErrorMessage, ErrorServer, Form, Message } from "./style";
import { useState } from "react";

interface IProps {
    submit: (e: any) => void;
    noAuth?: boolean;
    password?: boolean; 
    error: string;
}

export default function FormRegister(props: IProps): JSX.Element {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [selectedTimeId, setSelectedTimeId] = useState<number | string>("");

    function handleTimeChange(timeId: number) {
        setSelectedTimeId(timeId);
    }

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
                            minLength: 5,
                            maxLength: 25,
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
                        O Apelido deve começar com letras, pode conter números e caracteres:
                        .-@_ e não pode finalizar com caracteres
                    </ErrorMessage>
                )}
                {errors.nickname && errors.nickname.type === "minLength" && (
                    <ErrorMessage>
                        O Apelido precisa conter no mínimo 5 letras
                    </ErrorMessage>
                )}
                {errors.nickname && errors.nickname.type === "maxLength" && (
                    <ErrorMessage>
                        O Nome precisa conter no máximo 25 letras
                    </ErrorMessage>
                )}
                 {errors.error && (
                    <ErrorMessage>
                        O apelido já existe, tente um novo
                    </ErrorMessage>
                )}

                <InputUser
                    type="text"
                    name="name"
                    validates={{
                        ...register("name", {
                            required: true,
                            pattern: /^[a-zA-Zà-úÀ-Ú ]+$/,
                            minLength: 5,
                            maxLength: 25,
                        }),
                    }}
                >
                    Nome completo:
                </InputUser>
                {errors.name && errors.name.type === "required" && (
                    <ErrorMessage>Preencha o campo Nome</ErrorMessage>
                )}
                {errors.name && errors.name.type === "pattern" && (
                    <ErrorMessage>
                        O Nome deve começar com maiúsculas{<br />} e só deve
                        conter letras
                    </ErrorMessage>
                )}
                {errors.name && errors.name.type === "minLength" && (
                    <ErrorMessage>
                        O Nome precisa conter no mínimo 5 letras
                    </ErrorMessage>
                )}
                {errors.name && errors.name.type === "maxLength" && (
                    <ErrorMessage>
                        O Nome precisa conter no máximo 25 letras
                    </ErrorMessage>
                )}

                <Message>time do coração:</Message>
                <SelectType
                    name="team"
                    selectedTimeId={selectedTimeId}
                    validates={{
                        ...register("team", {
                            required: true,
                        }),
                    }}
                />
                {errors.team && errors.team.type === "required" && (
                    <ErrorMessage>Escolha o seu time</ErrorMessage>
                )}

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
                    name="password2"
                    password={true}
                    validates={{
                        ...register("password2", {
                            required: true,
                            
                        }),
                    }}
                >
                    Confimar Senha:
                </InputUser>
                {errors.password2 && errors.password2.type === "required" && (
                    <ErrorMessage>Preencha o campo Password</ErrorMessage>
                )}
                {!props.password && (
                    <ErrorMessage>As senhas precisam ser iguais</ErrorMessage>
                )}
            </BoxInputs>
            {props.noAuth && props.password && props.error && (                
                <ErrorServer>                     
                   {props.error.replace("[nickname]: O apelido já existe","Apelido já existe, por favor tente outro ;)")}
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
