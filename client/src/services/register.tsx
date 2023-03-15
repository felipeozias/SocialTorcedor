/// Lembrar de fazer alguma pagina de erro

export default async function registerService(userData: any) {
    try {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(userData),
        };

        const url: string = process.env.REACT_APP_REGISTER as string;
        const res = await fetch(url, options);

        if (!res.ok) {
            console.error("Erro ao fazer requisição", await res.json());
            return { auth: false, isNoAuth: true, status: res.status };
        }

        const data = await res.json();
        console.log(data);

        return { auth: true, status: res.status, data: data };
    } catch (err) {
        /// Lembrar de fazer alguma pagina de erro
        alert(
            "Houve um erro ao realizar o cadastro. Por favor tente novamente!"
        );
        console.error(err);
    }
}
