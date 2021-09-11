import { BaseEntity } from 'src/commons/entity/base';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';

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
}

class Mention {
  name: string;
  id: string;
}
