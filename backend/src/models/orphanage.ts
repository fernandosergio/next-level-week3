import { Entity, Column, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm'

import Image from './images'

// Faz a formatação em js da tabela orphanages
@Entity('orphanages')
export default class Orphanage {
    @PrimaryGeneratedColumn('increment')
    id:number;
    
    @Column()
    name:string;
 
    @Column()
    latitude:number;
    
    @Column()
    longitude:number;
    
    @Column()
    about:string;
    
    @Column()
    instructions:string;
    
    @Column()
    opening_hours:string;
    
    @Column()
    open_on_weekends:string;

    @OneToMany(() => Image, image => image.orphanage, {
        cascade: ['insert','update']
    })
    @JoinColumn({name :'orphanage_id'})
    images: Image[]
}

// Chamou o entity pra relacionar a tabela, o column pra dizer que e coluna e primary para autoincrement

// Coloca na classe as colunas e os tipos delas, serve pra mexer nelas