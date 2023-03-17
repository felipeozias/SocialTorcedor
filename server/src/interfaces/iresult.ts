export default interface IResult<T> {
    data?: T;
    errors?: string[];
    status?: number;
    token?: string | null;
}
