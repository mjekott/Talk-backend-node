import { Controller, Get } from '@nestjs/common';

@Controller('posts')
export class PostsController {
  @Get('/')
  getAll(): string {
    return 'get all posts';
  }
}
