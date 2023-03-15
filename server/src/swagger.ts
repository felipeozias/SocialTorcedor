import swaggerAutogen from "swagger-autogen";

const outputFile = "./config/swagger.json";
const endpointsFiles = ["./src/server.ts", "./src/validators/handle-validation.ts"];

const swagger = swaggerAutogen({ language: "pt-BR" });

const doc = {
    info: {
        version: "1.0.0",
        title: "Social Torcedor API",
        language: "pt-BR",
        description: "Documentation automatically generated by the <b>swagger-autogen</b> module.",
    },
    host: "api.socialtorcedor.shop",
    basePath: "/",
    schemes: ["http", "https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [
        {
            name: "User",
            description: "Endpoints to manage users",
        },
        {
            name: "Post",
            description: "Endpoints to manage posts",
        },
    ],
    definitions: {
        User: {
            _id: "640f6af6ad964b6d45a13c35",
            nickname: "zoro_oliveira",
            name: "Zoro Oliveira",
            team: "são paulo",
            createdAt: "2023-03-13T18:27:02.427Z",
            updatedAt: "2023-03-13T18:27:02.427Z",
            __v: 0,
        },
        AddUser: {
            $nickname: "zoro_oliveira",
            $name: "Zoro Oliveira",
            $password: "123456",
            $team: "São Paulo",
        },
        UpdateUser: {
            $nickname: "zoro_oliveira",
            $name: "Zoro Oliveira",
            $team: "São Paulo",
        },
        Post: {
            _id: "6410b677f77571f9f323740d",
            pathImage: "/img/6410b677f77571f9f323740d.png",
            content: "Esse Ano seremos campeão!!!",
            author: {
                _id: "640f6af6ad964b6d45a13c35",
                nickname: "zoro_oliveira",
                name: "Zoro Oliveira",
                team: "são paulo",
            },
            likes: ["640ab68a27fea004b4b9ce05"],
            comments: [
                {
                    content: "Perdemos de novo. Rumo a lanterna",
                    author: {
                        _id: "640f6af6ad964b6d45a13c35",
                        nickname: "zoro_oliveira",
                        name: "Zoro Oliveira",
                    },
                    _id: "6410bf1dace5da35c401601c",
                    createdAt: "2023-03-14T18:38:21.739Z",
                    updatedAt: "2023-03-14T18:38:21.739Z",
                },
            ],
        },
        AddPost: {
            content: "Esse Ano seremos campeão!!!",
            author: "640f6af6ad964b6d45a13c35",
        },
        AddComment: {
            content: "Perdemos de novo. Rumo à lanterna =(",
            author: "640f6af6ad964b6d45a13c35",
        },
        IResult: {
            errors: ["aconteceu um erro"],
            data: {},
            status: 200,
        },
        Error500: {
            errors: ["aconteceu um erro interno"],
        },
        UserAddValidator: {
            errors: [
                "[nickname]: O apelido deve ter entre 5 e 25 caracteres",
                "[nickname]: O apelido deve começar com letra pode conter números e não pode terminar com caracteres especiais.",
                "[name]: O nome deve ter entre 5 e 30 caracteres.",
                "[name]: O nome deve conter apenas letras.",
                "[password]: A senha deve ter entre 3 e 15 caracteres.",
                "[team]: O time é obrigatório.",
            ],
        },
        UserUpdateValidator: {
            errors: [
                "[id]: O id deve ser um ObjectId válido.",
                "[nickname]: O apelido deve ter entre 5 e 25 caracteres",
                "[nickname]: O apelido deve começar com letra pode conter números e não pode terminar com caracteres especiais.",
                "[name]: O nome deve ter entre 5 e 30 caracteres.",
                "[name]: O nome deve conter apenas letras.",
                "[team]: O time é obrigatório.",
            ],
        },
        IdValidator: {
            errors: ["[id]: O id deve ser um ObjectId válido."],
        },
        PostValidator: {
            errors: ["[author]: O código do autor deve ser um ObjectId válido.", "[content]: O conteúdo deve ter no máximo 2500 caracteres."],
        },
    },
};

swagger(outputFile, endpointsFiles, doc);