export interface IUser {
    _id: string,
    name: string
}

export interface IGroup {
    _id: string,
    name: string,
    owner: string,
    image: string
}

export const simulateDbGroups = [
    {
        _id: "eueu2e2uuddddd",
        name: "Grupo foda",
        owner: "Rodrigo tebas",
    },
    {
        _id: "eueu494094dddd",
        name: "Flamenguistas Mengo",
        owner: "Fla bnobmed",
    },
    {
        _id: "eueu2e2uudff3f333333d",
        name: "Os fodas",
        owner: "tebas",
    },
    {
        _id: "eueu2e2uudddddji3jj34j3uh43",
        name: "Grupo fodaastico",
        owner: "Marina alves",
    },
    {
        _id: "eueu2ç2ç2ç2ç2e2uuddddd",
        name: "Mancos de boia",
        owner: "Teobaldo",
    }
]

export async function apiRequestUsers() {

    try {
        const url = process.env.REACT_APP_USERS_LOCAL as string
        console.log(url)
        const request = await fetch(url);
        if ( !request.ok ) {
        console.error(request.json())
        return {
            status: request.status,
            succesfull: false,
            error: await request.json()
        }
    }
        const res = await request.json();

        return {
            status: request.status,
            succesfull: true,
            data: res["data"]
        }

    } catch (error) {
        console.error(error)
        return {
            succesfull: false,
            error: error
        }
    }
}