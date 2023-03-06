import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";
import { AppError } from "../../errors";
import { iCategoryCreate, iCategoryRepo } from "../../interfaces";

export async function create(payload: iCategoryCreate): Promise<Category> {
    const categoryRepository: iCategoryRepo = AppDataSource.getRepository(Category);

    const category: Category = await categoryRepository.save(payload);

    return category;
}