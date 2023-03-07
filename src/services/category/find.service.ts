import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { iCategoryRepo } from "../../interfaces";

export async function find(id: number): Promise<Category | null> {
    const categoryRepository: iCategoryRepo = AppDataSource.getRepository(Category);

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