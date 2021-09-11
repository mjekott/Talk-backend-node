import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get('/')
  getAllPost(): string {
    return 'get all posts';
  }

  @Get(':/postid')
  getPostDetails(@Param() param): string {
    return 'get post details' + param.postid;
  }

  @Post('/')
  createNewPost(): string {
    return `new post was created `;
  }

  @Delete('/:postid')
  deletePost(@Param() param): string {
    return 'delete postid';
  }

  @Put('/:postid/like')
  likePost(@Param() param): string {
    return 'liked post';
  }

  @Delete('/:postid/like')
  unlikePost(@Param() param): string {
    return 'unliked a post';
  }
}
