import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import {v4 as uuid} from "uuid";
import { User } from "./user.entity";

@Entity("vehicles")
export class Vehicle{
    @PrimaryColumn("uuid")
    readonly id: string

    @Column({ length: 50 })
    name: string

    @Column({ length: 50 })
    brand: string

    @Column({ length: 50 })
    model: string

    @Column({length: 4, nullable: true})
    year: string

    @Column({nullable: true})
    km: number

    @Column({length: 20, nullable: true})
    color: string

    @Column({length: 50,nullable: true})
    city: string

    @Column({length: 2,nullable: true})
    state: string

    @Column({nullable: true})
    value: number

    @Column()
    imageLink: string

    @ManyToOne(() => User, { eager: true })
    @JoinColumn()
    user: User

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}