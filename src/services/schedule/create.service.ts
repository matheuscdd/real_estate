import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors";
import { iRealEstateRepo, iScheduleCreate, iScheduleRepo, iUserRepo, iScheduleSuccess } from "../../interfaces";

export async function create(payload: iScheduleCreate, userId: number) {
    if (payload.date.getDay() === 0 || payload.date.getDay() === 6) throw new AppError(`Invalid date, work days are monday to friday`, 400);
    if (payload.hour[0] < 8 || payload.hour[0] > 17) throw new AppError(`Invalid hour, available times are 8AM to 18PM`, 400);
    const hour: string = payload.hour[0] + ":" + (payload.hour[1] < 10 ? payload.hour[1] + "0" : payload.hour[1]);

    const scheduleRepository: iScheduleRepo = AppDataSource.getRepository(Schedule);
    const userRepository: iUserRepo = AppDataSource.getRepository(User);
    const realEstateRepository: iRealEstateRepo = AppDataSource.getRepository(RealEstate);

    const user = await userRepository.findOneBy({ id: userId });
    const realEstate = await realEstateRepository.findOneBy({ id: payload.realEstateId });
    if (!realEstate) return 
    //preciso criar uma mensagem de erro aqui

    const findUserSchedules = scheduleRepository.createQueryBuilder("schedule")
        .where("schedule.user = :id", { id: userId })
        .andWhere("schedule.date = :date", { date: payload.date })
        .andWhere("schedule.hour = :hour", { hour: hour })
        .getOne()
    if (!findUserSchedules) throw new AppError(`Schedule to this real estate at this date and time already exists`, 409);

    const schedule = await scheduleRepository.createQueryBuilder()
        .insert()
        .into(Schedule)
        .values({
            date: payload.date,
            hour,
            user: user!,
            realEstate: realEstate
        })
        .execute()
    const success: iScheduleSuccess = { message: 'Schedule created' };
    return success;
}