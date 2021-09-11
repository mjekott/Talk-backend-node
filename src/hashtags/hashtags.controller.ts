import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('hashtags')
@Controller('hashtags')
export class HashtagsController {
  @Get('/')
  getHashtags(): string {
    return ' all hash tags';
  }

  @Get('/:tag/posts')
  getPostFromHashtag(@Param('tag') tag: string): string {
    return `show all posts with hashtag ${tag}`;
  }
}
