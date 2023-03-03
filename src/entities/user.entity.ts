import { getRounds, hashSync } from "bcryptjs";
import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    DeleteDateColumn,
    BeforeInsert,
    BeforeUpdate
} from "typeorm";

@Entity("users")
export class User {

    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({ type: "varchar", length: 45 })
    name: string;

    @Column({ type: "varchar", length: 45, unique: true })
    email: string;

    @Column({ type: "boolean", default: false })
    admin: boolean;

    @Column({ type: "varchar", length: 120 })
    password: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;

    @DeleteDateColumn()
    deletedAt: string;

    
    @BeforeUpdate()
    @BeforeInsert()
    hashPassword() {
        const isEncrypted: number = getRounds(this.password);
        if (!isEncrypted) this.password = hashSync(this.password, 10);
    }


}


