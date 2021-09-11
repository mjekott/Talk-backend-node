import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('posts')
@Controller('posts')
export class PostsController {
  @Get('/')
  getAllPost(): string {
    return 'get all posts';
  }

  @Get(':/postid')
  getPostDetails(@Param('postid') postid: string): string {
    return 'get post details' + postid;
  }

  @Post('/')
  createNewPost(): string {
    return `new post was created `;
  }

  @Delete('/:postid')
  deletePost(@Param('postid') postid: string): string {
    return 'delete postid';
  }

  @Put('/:postid/like')
  likePost(@Param('postid') postid: string): string {
    return 'liked post';
  }

  @Delete('/:postid/like')
  unlikePost(@Param('postid') postid: string): string {
    return 'unliked a post';
  }
}
