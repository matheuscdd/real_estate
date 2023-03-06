import { AppDataSource } from "../../data-source";
import { RealEstate, Schedule, User } from "../../entities";
import { AppError } from "../../errors";
import { iRealEstateRepo, iScheduleCreate, iScheduleRepo, iUserRepo, iScheduleSuccess } from "../../interfaces";

export async function create(payload: iScheduleCreate, userId: number): Promise<iScheduleSuccess> {
    let [hours, minutes]: string[] | number[] = payload.hour.split(":");
    hours = Number(hours);
    minutes = Number(minutes);
    
    if (isNaN(hours) || isNaN(minutes) || hours >= 24 && minutes >= 60) throw new AppError(`Invalid hour, available times are 8AM to 18PM`, 400);
    
    const [year, day, month] = payload.date.split("/");
    const date: Date = new Date(Number(year), Number(month) - 1, Number(day));
    
    if (date.getDay() === 0 || date.getDay() === 6) throw new AppError(`Invalid date, work days are monday to friday`, 400);
    if (hours < 8 || hours > 18) throw new AppError(`Invalid hour, available times are 8AM to 18PM`, 400);
    
    const hour: string = payload.hour;

    const scheduleRepository: iScheduleRepo = AppDataSource.getRepository(Schedule);
    const userRepository: iUserRepo = AppDataSource.getRepository(User);
    const realEstateRepository: iRealEstateRepo = AppDataSource.getRepository(RealEstate);

    const user = await userRepository.findOneBy({ id: userId });
    
    const realEstate = await realEstateRepository.findOneBy({ id: payload.realEstateId });
    if (!realEstate) throw new AppError(`RealEstate not found`, 404);
    
    const findRealEstateSchedules = await scheduleRepository.createQueryBuilder("schedule")
        .select()
        .where("schedule.realEstateId = :realEstate", { realEstate: payload.realEstateId })
        .andWhere("schedule.date = :date", { date })
        .andWhere("schedule.hour = :hour", { hour })
        .getOne()

    // save(findRealEstateSchedules)    
    console.log(findRealEstateSchedules)
    if (findRealEstateSchedules) throw new AppError(`Schedule to this real estate at this date and time already exists`, 409);
        

    const findUserSchedules = await scheduleRepository.createQueryBuilder("schedule")
        .select()
        .where("schedule.userId = :user", { user: userId })
        .andWhere("schedule.date = :date", { date })
        .andWhere("schedule.hour = :hour", { hour })
        .getOne()
    
    
    // save(findUserSchedules)
    if (findUserSchedules !== null) throw new AppError(`User schedule to this real estate at this date and time already exists`, 409);
    const schedule = await scheduleRepository.createQueryBuilder()
        .insert()
        .into(Schedule)
        .values({
            date,
            hour,
            user: user!,
            realEstate: realEstate
        })
        .execute()

    save(schedule)
    const success: iScheduleSuccess = { message: 'Schedule created' };
    return success;
}

function save(data: any) {
    const fs = require("fs");
    const time = new Date();
    fs.writeFile("test.json", JSON.stringify({
        time: time.getHours() + ":" + time.getMinutes(),
        data
    }), { flag: "a+" }, (err: any) => {
        if (err) {
          console.error(err)
          return
        }
      } );
}