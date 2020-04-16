import {
  Entity, PrimaryGeneratedColumn, Column
} from 'typeorm';

@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 25 })
  name: string;

  @Column()
  age: number;

  @Column()
  email: string

}
