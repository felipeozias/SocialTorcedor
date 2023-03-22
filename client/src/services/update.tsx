import { getCookie } from "../utils/cookies";

const updateUser = async (userData: any): Promise<any> => {
    const forms = document.querySelector(
        ".form-update-user"
    ) as HTMLFormElement;
    const formData = new FormData(forms);
    const url: string = process.env.REACT_APP_UPDATE as string;

    try {
        const res = await fetch(process.env.REACT_APP_USER_ME as string, {
            headers: { authorization: getCookie("token") as string },
        });
        if (!res.ok) {
            console.error(res.json());
        }

        const user = await res.json();
        const id = user._id;

        const response = await fetch(`${url}${id}`, {
            method: "PATCH",
            headers: {
                authorization: getCookie("token") as string,
            },
            body: formData,
        });

        const data = await response.json();

        if (!response.ok) {
            console.error(data);
            return { ok: false, data };
        }

        return { ok: true, data };
    } catch (error) {
        console.log(error);
        return { ok: false, data: [] };
    }
};

export default updateUser;
