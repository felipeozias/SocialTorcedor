import { redirect } from "react-router";
import { inputIsEmpty } from "../utils/validations";

export default async function loginService(
    e: React.FormEvent<HTMLFormElement>
) {
    e.preventDefault();
    const inputs = e.target as HTMLFormElement;
    const formData = new FormData(inputs);
    const reqBody = Object.fromEntries(formData.entries());

    for (const input in reqBody) {
        if (!inputIsEmpty(reqBody[input])) {
            alert(`Preencha o campo ${input === "nick" ? "Apelido" : "Senha"}`);
            return;
        }
    }

    redirect("/home");

    try {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(reqBody),
        };

        const res = await fetch(
            `http://localhost:8000/user/exists/${reqBody.nick}`,
            options
        );

        if (!res.ok) {
            alert("Usuário ou senha inválidos");
            return console.error("Erro na requisição", await res.json());
        }

        const data = await res.json();
        console.log(data);
        redirect("/home");
    } catch (err) {
        console.error(err);
    }
}
