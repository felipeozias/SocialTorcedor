

export default async function editGroupService(userData: {groupId: string}) {
    // console.log(userData);
    try {

        const url: string = `${process.env.REACT_APP_GROUP_LOCAL}/${userData.groupId}` as string;
        const res = await fetch(url);

        if (!res.ok) {
            console.error("Erro ao fazer requisição", await res.json());
            return { status: res.status };
        }

        const data = await res.json();
        console.log(data);

        return { status: res.status, data: data };
    } catch (err) {
        alert(
            "Houve um erro ao tentar buscar o grupo desejado. Por favor tente novamente!"
        );
        console.error(err);
    }
}