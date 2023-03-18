export interface IGetFeed {
    pathImage?: String,
    content?: String,
    _id: String,
    createdAt: String,
    updatedAt?: String,
    comments?: ICommentFeed[],
    likes?: String[],
    author: {
        pathImage?: String,
        _id: String | undefined,
        nickname: String,
        name: String,
    },
}

export interface ICommentFeed {
    content: String,
    _id: String,
    createdAt: String,
    updatedAt: String,
    author: {
        _id: String,
        nickname: String,
        name: String,
    },
}
