import { connect } from "./socket";

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
        const data = await res.json();

        if (!res.ok) {         
            return { auth: false, isNoAuth: true, status: res.status, password: true, error:data.errors[0]};
        }

        
        document.cookie =
            "token=; expires=" + new Date(2010, 0, 1) + "; path=/";

        document.cookie = `token=${data.token}; expires=${new Date(
            new Date().getTime() + 24 * 60 * 60 * 1000
        )}; path=/;`;

        return { auth: true, status: res.status, data: data, password: true, error: ""};
    } catch (err) {
        // alert(
        //     "Houve um erro ao realizar o cadastro. Por favor tente novamente!"
        // );
        return { auth: false, status: 500, data: [], password: true,  error: ""};
    }
}
