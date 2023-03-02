import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn
} from "typeorm";
import { boolean } from "zod";

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

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updateAt: string;

    // faltou fazer as fks
}

