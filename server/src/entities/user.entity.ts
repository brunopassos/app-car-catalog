import { Entity, Column, PrimaryColumn, OneToMany } from "typeorm";
import {v4 as uuid} from "uuid";
import { Vehicle } from "./vehicle.entity";

import { Exclude } from "class-transformer";

@Entity("users")
export class User{
    @PrimaryColumn("uuid")
    readonly id: string

    @Column()
    email: string

    @Column()
    @Exclude()
    password: string

    @OneToMany(() => Vehicle, vehicle => vehicle.user)
    vehicle: Vehicle[]

    constructor(){
        if(!this.id){
            this.id = uuid()
        }
    }
}