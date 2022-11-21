import {
  Body,
  CacheInterceptor,
  Controller,
  Get,
  Header,
  Param,
  Post,
  UseInterceptors,
} from '@nestjs/common';
import { LeaguesService } from './leagues.service';

@Controller('leagues')
export class LeaguesController {
  constructor(private readonly leaguesService: LeaguesService) {}

  @UseInterceptors(CacheInterceptor)
  @Header('Cache-Control', 'public, max-age=604800') // 7 days
  @Get()
  findAll() {
    return this.leaguesService.findAll();
  }

  @UseInterceptors(CacheInterceptor)
  @Header('Cache-Control', 'public, max-age=604800') // 7 days
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.leaguesService.findOne(id);
  }

  @UseInterceptors(CacheInterceptor)
  @Header('Cache-Control', 'public, max-age=604800') // 7 days
  @Post('search')
  search(@Body('search') search: string) {
    return this.leaguesService.search(search);
  }
}
