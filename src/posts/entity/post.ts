import { BaseEntity } from 'src/commons/entity/base';
import { User } from 'src/users/entity/user';
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

@Entity()
export class Post extends BaseEntity {
  @Column({ length: 240 })
  text: string;

  @Column('json', { default: [] })
  images: string[];

  @Column({ name: 'like_count', default: 0 })
  likeCount: number;

  @Column({ name: 'repost_count', default: 0 })
  repostCount: number;

  @OneToOne(() => Post)
  @JoinColumn({ name: 'reply_to_id' })
  replyToId: Post;

  @Column('json', { default: [] })
  hastags: string[];

  @Column('json', { default: [] })
  mentions: Mention[];

  @OneToOne(() => Post)
  @JoinColumn({ name: 'orignal_post_id' })
  origPost: Post;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'author_id' })
  author: User;
}

class Mention {
  name: string;
  id: string;
}
