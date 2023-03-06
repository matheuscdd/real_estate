import { AppDataSource } from "../../data-source";
import { Address, Category, RealEstate } from "../../entities";
import { AppError } from "../../errors";
import { iAddressRepo, iCategoryRepo, iRealEstateCreate, iRealEstateRepo } from "../../interfaces"; 

export async function create(payload: iRealEstateCreate): Promise<RealEstate> {
    const addressRepository: iAddressRepo = AppDataSource.getRepository(Address);
    const realEstateRepository: iRealEstateRepo = AppDataSource.getRepository(RealEstate);
    const categoryRepository: iCategoryRepo = AppDataSource.getRepository(Category);

    const { number, ...rest } = payload.address;
    
    const findAddress = await addressRepository.findOneBy({
      number: number!,
      ...rest
    });
    
    if (findAddress) throw new AppError(`Address already exists`, 409);
    
    const address: Address = addressRepository.create(payload.address);
    await addressRepository.save(address);
    
    const category: Category | null = await categoryRepository.findOneBy({ id: payload.categoryId });
    
    const realEstate: RealEstate = realEstateRepository.create(payload)
    realEstate.category = category!;
    realEstate.address = address;
    await realEstateRepository.save(realEstate);

    return realEstate; //Talvez precise tratar o retorno
}