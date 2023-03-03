import { AppDataSource } from "../../data-source";
import { Address, RealEstate } from "../../entities";
import { iAddressRepo, iRealEstateCreate, iRealEstateRepo } from "../../interfaces"; 

export async function create(payload: iRealEstateCreate): Promise<RealEstate> {
    const addressRepository: iAddressRepo = AppDataSource.getRepository(Address);
    const realEstateRepository: iRealEstateRepo = AppDataSource.getRepository(RealEstate);

    const address: Address = addressRepository.create(payload.address);

    await addressRepository.save(address);
    

    const realEstate: RealEstate = realEstateRepository.create(payload)
    
    realEstate.address = address;

    await realEstateRepository.save(realEstate);

    return realEstate
}