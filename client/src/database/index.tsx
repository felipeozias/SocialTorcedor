import { getCookie } from "../utils/cookies";

export async function apiRequestUsers() {
    try {
        const header = {
            headers: {
                authorization: getCookie("token") as string,
            },
        };
        const url = process.env.REACT_APP_USERS_LOCAL as string;

        const request = await fetch(url, header);
        if (!request.ok) {
            console.error(request.json());
            return {
                status: request.status,
                succesfull: false,
                error: await request.json(),
            };
        }
        const res = await request.json();

        return {
            status: request.status,
            succesfull: true,
            data: res["data"],
        };
    } catch (error) {
        console.error(error);
        return {
            succesfull: false,
            error: error,
        };
    }
}

export async function apiRequestGroups() {
    try {
        const url = process.env.REACT_APP_GROUP_LOCAL as string;
        const options = {
            method: "GET",
            headers: {
                authorization: getCookie("token") as string
            }
        }
        
        const request = await fetch(url, options);
        if (!request.ok) {
            console.error(request.json());
            return {
                status: request.status,
                succesfull: false,
                error: await request.json(),
            };
        }
        const res = await request.json();
        console.log(res);
        return {
            status: request.status,
            succesfull: true,
            data: res["data"],
        };
    } catch (error) {
        console.error(error);
        return {
            succesfull: false,
            error: error,
        };
    }
}
