export interface IUser {
    _id: string;
    name: string;
}

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
