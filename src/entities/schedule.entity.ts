import {
    Entity,
    Column,
    PrimaryGeneratedColumn
} from "typeorm";

@Entity("schedules_users_properties")
export class Schedule {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: "date" })
    date: string;

    @Column({ type: "time" })
    hour: string;

    //Faltou as fks

}