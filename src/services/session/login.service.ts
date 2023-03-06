import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { AppDataSource } from "../../data-source";
import { User } from "../../entities";
import { AppError } from "../../errors";
import { iLogin, iToken, iUserRepo } from "../../interfaces";

export async function login(payload: iLogin): Promise<iToken> {
    const userRepository: iUserRepo = AppDataSource.getRepository(User);

    const findUser: User | null = await userRepository.findOneBy({ email: payload.email });
    //Ficar esperto com o usuário deletado
    if(!findUser) throw new AppError(`Invalid credentials`, 401);

    const pwdMatch: boolean = await compare(payload.password, findUser.password);
    
    if (!pwdMatch) throw new AppError(`Invalid credentials`, 401);
    
    const token: string = sign(
        { admin: findUser.admin },
        String(process.env.SECRET_KEY),
        { expiresIn: "24H", subject: String(findUser.id) }
    );

    return { token };
}