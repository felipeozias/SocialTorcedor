export const simulateLogin = {
    _id: "640f6af6ad964b6d45a13c35",
    name: "Zoro Oliveira",
    nickname: "zoro_oliveira",
    team: "são paulo",
};

export const simulateLogin2 = {
    _id: "640ff195438d50338971dec8",
    name: "Shinobu Sensui",
    nickname: "sensui123",
    team: "Outro",
};

export async function apiRequestUsers() {
    try {
        const url = process.env.REACT_APP_USERS_LOCAL as string;

        const request = await fetch(url);
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

        const request = await fetch(url);
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
