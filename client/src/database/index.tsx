export interface IUser {
    _id: string;
    name: string;
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

function apiRequestUsers() {
    fetch(`http://api.socialtorcedor.shop/users`)
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            usersDb = data["data"];
        });
}

export let usersDb: IUser[] = [];
//apiRequestUsers();
