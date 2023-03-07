import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { iUserRepo } from "../../interfaces";

export async function remove(id: number): Promise<void> {
    const userRepository: iUserRepo = AppDataSource.getRepository(User);

    const user: User | null = await userRepository.findOneBy({ id });
    
    await userRepository.softRemove(user!);
}
