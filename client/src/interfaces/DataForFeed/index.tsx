export interface IGetFeed {
    pathImage?: string,
    content?: string,
    _id: string,
    createdAt: string,
    updatedAt?: string,
    comments: ICommentFeed[],
    likes?: string[],
    author: {
        pathImage?: string,
        _id: string | undefined,
        nickname: string,
        name: string,
    },
}

export interface ICommentFeed {
    _id: string,
    content: string,
    createdAt: string,
    updatedAt: string,
    author: {
        _id: string,
        nickname: string,
        name: string,
        pathImage: string
    },
}
