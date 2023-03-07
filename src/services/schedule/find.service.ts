import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule } from "../../entities";
import { AppError } from "../../errors";
import { iRealEstateRepo } from "../../interfaces";
import schemas from "../../schemas";

export async function find(id: number): Promise<RealEstate> {
    const realEstateRepository: iRealEstateRepo = AppDataSource.getRepository(RealEstate);

    const realEstate = await realEstateRepository.findOne({
        where: {
            id
        },
        relations: {
            schedules: {
                user: true
            },
            address: true,
            category: true
        }
    });

    
    if (!realEstate) throw new AppError(`RealEstate not found`, 404);

    return realEstate;
}