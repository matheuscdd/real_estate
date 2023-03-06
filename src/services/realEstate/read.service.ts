import { AppDataSource } from "../../data-source";
import { RealEstate } from "../../entities";
import { iRealEstateRepo } from "../../interfaces";

export async function read(): Promise<RealEstate[]> {
    const realEstateRepository: iRealEstateRepo = AppDataSource.getRepository(RealEstate);

    const realEstates: RealEstate[] = await realEstateRepository.createQueryBuilder("realEstate")
    .innerJoinAndSelect("realEstate.address", "address")
    .getMany();

    return realEstates;
}