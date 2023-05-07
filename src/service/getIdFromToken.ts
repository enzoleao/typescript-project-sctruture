import { AppError } from "../err/AppError";

export const getIdFromToken = async (authorization: string) => {
    const token = authorization?.split(' ')[1]

    if (!token) {
        throw new AppError("Token missing.");
    }
    const base64Token = token.split('.')[1];
    const payload = Buffer.from(String(base64Token), 'base64').toString();
    const id = JSON.parse(payload).sub;

    return id
}