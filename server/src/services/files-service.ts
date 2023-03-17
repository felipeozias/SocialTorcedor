export default class FileService {
    async getFile(path: IUser): Promise<IResult<IUser>> {
        let result: IResult<IUser> = { errors: [] };
        try {
            if ((await this.exists(data.nickname)).data) {
                result.errors?.push("[nickname]: O apelido já existe");
                result.status = 400;
                return result;
            }

            data.password = CryptoJS.SHA256(data.password).toString();
            const user = await User.create(data);
            result.data = user;
            result.status = 201;
        } catch (error: any) {
            result.errors?.push(error.message);
            result.status = 500;
        }

        return result;
    }
}
