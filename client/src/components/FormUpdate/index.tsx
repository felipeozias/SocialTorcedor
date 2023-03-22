import Button from "../Button";
import InputUser from "../InputUser";
import SelectType from "../SelectType";
import {
    BoxInputs,
    Form,
    DivWrap,
    Message,
    ErrorMessage,
    DivImage,
} from "./style";
import { useState } from "react";
import imageUpload from "../../assets/icon_user_update.png";

import InputImg from "../inputImg";
import { StyledUpdateImg } from "../IconUpdateImage/style";
import { useForm } from "react-hook-form";

interface IProps {
    submit: (e: any) => void;
    noAuth?: boolean;
}

const FormUpdate = (props: IProps) => {
    const MAX_SIZE = 5000000; // 5 MB
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [selectedTimeId, setSelectedTimeId] = useState<number | string>("");
    function handleTimeChange(timeId: number) {
        setSelectedTimeId(timeId);
    }

    const [error, setError] = useState("");
    const [image, setImage] = useState<File | null>(null);
    function handleImageChange(event: React.ChangeEvent<HTMLInputElement>) {
        const file = event.target.files?.[0];
        if (!file) return;

        if (!isValidExtension(file.name)) {
            setError("Por favor, selecione um arquivo com formato JPG ou PNG.");
            setImage(null);
        } else if (!isValidSize(file.size)) {
            setError(
                "Por favor, selecione um arquivo com tamanho menor que 5 MB."
            );
            setImage(null);
        } else {
            setImage(file);
            setError("");
        }
    }

    const allowedExtensions = [".jpg", ".jpeg", ".png"];

    const isValidExtension = (fileName: string) => {
        const extension = fileName
            .substring(fileName.lastIndexOf("."))
            .toLowerCase();
        return allowedExtensions.includes(extension);
    };

    const isValidSize = (size: number) => {
        return size <= MAX_SIZE;
    };

    return (
        <Form
            onSubmit={handleSubmit(props.submit)}
            className="form-update-user"
        >
            <DivWrap>
                {image ? (
                    <DivImage path={URL.createObjectURL(image)} />
                ) : (
                    <DivImage path={imageUpload}></DivImage>
                )}
                <InputImg
                    change={handleImageChange}
                    validates={{
                        ...register("photo", {
                            required: false,
                        }),
                    }}
                />
                {error && <ErrorMessage>{error}</ErrorMessage>}
            </DivWrap>

            <BoxInputs>
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
                    Nome completo:
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

                <Message>Time do coração:</Message>
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
                    <ErrorMessage>Preencha o campo time</ErrorMessage>
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
                    name="confirm-password"
                    password={true}
                    validates={{
                        ...register("confirm-password", {
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

            <Button disabled={!image}>ATUALIZAR</Button>
        </Form>
    );
};

export default FormUpdate;
