import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Profile } from './Profile';

@Entity()
export class User extends BaseEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({unique: true})
    email: string;

    @Column()
    password: string;

    @Column({type: Date, nullable: true, default: null})
    deletedAt: Date | null;

    @CreateDateColumn()
    createdAt: Date;

    @OneToOne(type => Profile)
    @JoinColumn()
    profile: Profile
}
