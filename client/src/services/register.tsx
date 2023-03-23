/// Lembrar de fazer alguma pagina de erro

export default async function registerService(userData: any) {
    
    if(userData.password !== userData.password2){
        return {auth: false, isNoAuth: true, status: 400, password: false}
    }

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
        document.cookie =
            "token=; expires=" + new Date(2010, 0, 1) + "; path=/";

        document.cookie = `token=${data.token}; expires=${new Date(
            new Date().getTime() + 24 * 60 * 60 * 1000
        )}; path=/;`;

        return { auth: true, status: res.status, data: data };
    } catch (err) {
        alert(
            "Houve um erro ao realizar o cadastro. Por favor tente novamente!"
        );
        console.error(err);
        return { auth: false, status: 500, data: [] };
    }
}
