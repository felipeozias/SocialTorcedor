export default async function loginService(formData: any) {
    try {
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        };

        const res = await fetch(
            `http://localhost:8000/user/authenticate`,
            options
        );

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
        console.error(err);
    }
}
