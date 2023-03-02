import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUserCreate, iUserRepo, iUserWithoutPwd } from "../../interfaces";
import schemas from "../../schemas";



export async function create(payload: iUserCreate): Promise<iUserWithoutPwd> {
    const userRepository: iUserRepo = AppDataSource.getRepository(User);

    const user: User = await userRepository.save(payload);

    return schemas.user.removePwd.parse(user);
}

