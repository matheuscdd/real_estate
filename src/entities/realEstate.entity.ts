import {
    Entity,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
    PrimaryGeneratedColumn,
    OneToOne,
    JoinColumn
} from "typeorm";
import { boolean } from "zod";
import { Address } from "./address.entity";

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
    updatedAt: string;

    @OneToOne(() => Address) //Aqui indico de quem receberá a chave estrangeira
    @JoinColumn() //Aqui deixo claro que a relação é unidirecional
    address: Address //Não é preciso passar o sufixo id, pois ele coloca sozinho
    //Tipo com a própria entidade dona dele

}

