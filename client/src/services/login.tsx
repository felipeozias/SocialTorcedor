/// Lembrar de fazer alguma pagina de erro

export default async function loginService(formData: any) {
    try {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        };

        const url: string = process.env.REACT_APP_LOGIN as string;
        const res = await fetch(url, options);

        if (!res.ok) {
            if (res.status === 404)
                return { auth: false, isNoAuth: true, status: res.status };

            console.error("Erro ao fazer requisição", await res.json());
            return { auth: false, isNoAuth: false, status: res.status };
        }

        const data = await res.json();
        console.log(data);

        return { auth: true, status: res.status, data: data };
    } catch (err) {
        /// Lembrar de fazer alguma pagina de erro
        alert("Houve um erro ao entrar. Tente novamente!");
        console.error(err);
    }
}
