import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { iRealEstateRepo } from "../../interfaces";

export async function find(id: number) {
    const realEstateRepository: iRealEstateRepo = AppDataSource.getRepository(RealEstate);

    const realEstate = realEstateRepository.findOne({
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

    return realEstate
}