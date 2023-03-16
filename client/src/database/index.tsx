export interface IUser {
    _id: string,
    name: string
}
interface IGroupUser {
    user: string
}

export interface IGroup {
    _id: string,
    name: string,
    owner: string,
    image: string,
    users: IGroupUser[]
}

export const simulateLogin = 
    {
        _id: "hee1nn2nudnuniunnd2",
        name: "Rodrigo tebas"
    }

export const simulateDbGroups: IGroup[] = [
    {
        _id: "eueu2e2uuddddd",
        name: "Grupo foda",
        owner: "Rodrigo tebas",
        image: "bola",
        users: [
            {user: "Xandy aviao"},
            {user: "Rodolfo"},
            {user: "Milena"}
        ]
    },
    {
        _id: "eueu494094dddd",
        name: "Flamenguistas Mengo",
        owner: "Fla bnobmed",
        image: "escudo",
        users: [
            {user: "Rodrigo tebas"},
            {user: "Chaves"},
            {user: "Adilson nunes"}
        ]
    },
    {
        _id: "eueu2e2uudff3f333333d",
        name: "Os fodas",
        owner: "tebas",
        image: "campo",
        users: [
            {user: "Xandy aviao"},
            {user: "Rodol aha"},
        ]
    },
    {
        _id: "eueu2e2uudddddji3jj34j3uh43",
        name: "Grupo fodaastico",
        owner: "Marina Rodrigo alves",
        image: "passaro de fogo",
        users: [
            {user: "Xandy aviao"},
            {user: "Rodolfo"},
            {user: "Rodrigo tebas"},
            {user: "Milena"},
            {user: "Chhhha"},
            {user: "Titio"},
        ]
    },
    {
        _id: "eueu2e2uudddddji3jj34j3uh43",
        name: "Grupo de teste",
        owner: "Rodrigo tebas",
        image: "passarinho",
        users: [
            {user: "Xandy aviao"},
            {user: "Rodolfoss"},
            {user: "Cha"},
            {user: "Titios"},
        ]
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