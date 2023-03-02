import { AppDataSource } from "../../data-source";
import { Category } from "../../entities";

export async function read(): Promise<Category[]> {
    const categoryRepository = AppDataSource.getRepository(Category);

    const categories: Category[] = await categoryRepository.find();

    return categories;
}