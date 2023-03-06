import { AppDataSource } from "../../data-source";
import { Category, RealEstate } from "../../entities";
import { iCategoryRepo, iRealEstateRepo } from "../../interfaces";

export async function find(id: number)/*: Promise<RealEstate[]> */{
    const categoryRepository: iCategoryRepo = AppDataSource.getRepository(Category);
    // const realEstate: iRealEstateRepo = AppDataSource.getRepository(RealEstate);

    const results = categoryRepository.findOne({
        where: {
            id
        },
        relations: {
            realEstate: true
        }
    });

    return results;
}