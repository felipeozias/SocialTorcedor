export interface IRegisterGroup {
    title: string, // Titulo do grupo
    admin: string, // ID do usuário que criar o grupo
    members: string[], // ID dos membros do grupo
    photo: any
}

export interface IUpdateGroup {
    admin: string | undefined
    groupId: string | undefined
    title: string | undefined,
    members: string[]
}

export interface IUsersGroup {
    name: string, // Nome do usuário dentro do grupo
    nickname: string, // Apelido do usuário dentro do grupo
    _id: string // Id do usuário dentro do grupo
}

export interface IAdminGroup {
    name: string,
    nickname: string,
    team: string,
    _id: string
}

export interface IGetGroups {
    admin: IAdminGroup, // Id do admin
    chat: [],
    members: IUsersGroup[], // Array com ids dos membros
    title: string, // Nome do grupo
    _id: string, // Id do grupo
    pathImage: string
}

// 640f6af6ad964b6d45a13c35 Id para simular um usuário logado