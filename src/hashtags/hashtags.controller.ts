import { Controller, Get, Param } from '@nestjs/common';

@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getHashtags(): string {
    return ' all hash tags';
  }

  @Get('/:tag/posts')
  getPostFromHashtag(@Param() param: any): string {
    return `show all posts with hashtag ${param.tag}`;
  }
}
