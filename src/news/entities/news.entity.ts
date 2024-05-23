import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'news' })
export class News {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  title: string;

  @Column({type: "text", nullable: true})
  description: string;

  @Column({type: "text", nullable: true})
  text: string;

  @Column({type: "text", nullable: true})
  img: string;
}
