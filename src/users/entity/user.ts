import { BaseEntity } from 'src/commons/entity/base';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends BaseEntity {
  @Column({ length: 30, nullable: false, unique: true })
  username: string;

  @Column({ length: 50 })
  name: string;

  @Column()
  avatar: string;

  @Column({ length: 256 })
  bio: string;

  @Column({ name: 'follower_count', default: 0 })
  followerCount: number;

  @Column({ name: 'followee_count', default: 0 })
  followeeCount: number;

  @Column({ default: false })
  verified: boolean;
}
