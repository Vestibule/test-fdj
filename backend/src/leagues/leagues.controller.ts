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
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { LeaguesService } from './leagues.service';
import { LeagueResponse } from './responses/league';

@ApiTags('leagues')
@Controller('leagues')
export class LeaguesController {
  constructor(private readonly leaguesService: LeaguesService) {}

  @Get()
  @ApiOkResponse({ type: LeagueResponse })
  @UseInterceptors(CacheInterceptor)
  @Header('Cache-Control', 'public, max-age=3600') // 1 hour
  findAll() {
    return this.leaguesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: LeagueResponse })
  @ApiNotFoundResponse()
  @UseInterceptors(CacheInterceptor)
  @Header('Cache-Control', 'public, max-age=3600') // 1 hour
  findOne(@Param('id') id: string) {
    return this.leaguesService.findOne(id);
  }

  @Post('search')
  @ApiOkResponse({ type: LeagueResponse })
  @UseInterceptors(CacheInterceptor)
  @Header('Cache-Control', 'public, max-age=3600') // 1 hour
  search(@Body('search') search: string) {
    return this.leaguesService.search(search);
  }
}
