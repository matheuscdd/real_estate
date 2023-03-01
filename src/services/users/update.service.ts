import { User } from "../../entities";
import { AppDataSource } from "../../data-source";
import { iUserRepo, iUserUpdate, iUserWithoutPwd } from "../../interfaces";
import { AppError } from "../../errors";
import schemas from "../../schemas";

export async function update(id: number, userToken: iUserWithoutPwd, newUserData: iUserUpdate): Promise<iUserWithoutPwd> {
    if (!userToken.admin && userToken.id !== id) throw new AppError(`Insufficient Permission`, 403);
    
    const userRepository: iUserRepo = AppDataSource.getRepository(User);
    
    const oldUserData: User | null = await userRepository.findOneBy({ id });

    const user: User = userRepository.create({
        ...oldUserData,
        ...newUserData
    }); 

    await userRepository.save(user);

    return schemas.user.removePwd.parse(user);
}