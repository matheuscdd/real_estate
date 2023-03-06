import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn,
    OneToMany,
    ManyToOne
} from "typeorm";
import { boolean } from "zod";
import { Address } from "./address.entity";
import { Category } from "./category.entity";
import { Schedule } from "./schedule.entity";

@Entity("real_estate")
export class RealEstate {

    @PrimaryGeneratedColumn("increment") 
    id: number;

    @Column({ type: "boolean", default: false, nullable: true })
    sold: boolean;

    @Column({ type: "decimal", precision: 12, scale: 2, default: 0 })
    value: number | string;

    @Column({ type: "int" })
    size: number;

    @CreateDateColumn({ type: "date" })
    createdAt: string;

    @UpdateDateColumn({ type: "date" })
    updatedAt: string;

    @OneToOne(() => Address)
    @JoinColumn() 
    address: Address 
    
    @ManyToOne(() => Category, (category) => category.realEstate)
    category: Category;
    
    @OneToMany(() => Schedule, (schedule) => schedule.realEstate)
    schedules: Schedule[];

}

