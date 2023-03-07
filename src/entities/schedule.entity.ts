import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
    ManyToOne
} from "typeorm";
import { RealEstate } from "./realEstate.entity";
import { User } from "./user.entity";

@Entity("schedules_users_properties")
export class Schedule {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "date" })
    date: string | Date;

    @Column({ type: "time" })
    hour: string;

    @ManyToOne(() => RealEstate, (realEstate) => realEstate.schedules)
    realEstate: RealEstate;

    @ManyToOne(() => User)
    @JoinTable()
    user: User;

}