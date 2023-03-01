import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUserRepo, iUserWithoutPwd } from "../../interfaces";
import schemas from "../../schemas";

export async function read(): Promise<iUserWithoutPwd[]> {
    const userRepository: iUserRepo = AppDataSource.getRepository(User);

    const users: User[] = await userRepository.find();

    return schemas.user.removePwd.array().parse(users);
}