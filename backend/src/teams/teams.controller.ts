import {
  Controller,
  Get,
  Param,
  Header,
  UseInterceptors,
  CacheInterceptor,
} from '@nestjs/common';
import { TeamsService } from './teams.service';

@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @UseInterceptors(CacheInterceptor)
  @Header('Cache-Control', 'public, max-age=604800') // 7 days
  @Get()
  findAll() {
    return this.teamsService.findAll();
  }

  @UseInterceptors(CacheInterceptor)
  @Header('Cache-Control', 'public, max-age=604800') // 7 days
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.teamsService.findOne(id);
  }
}
