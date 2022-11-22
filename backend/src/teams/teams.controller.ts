import {
  Controller,
  Get,
  Param,
  Header,
  UseInterceptors,
  CacheInterceptor,
} from '@nestjs/common';
import { ApiNotFoundResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TeamsService } from './teams.service';
import { TeamResponse } from './team.response';

@ApiTags('teams')
@Controller('teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}

  @Get()
  @ApiOkResponse({ type: TeamResponse })
  @UseInterceptors(CacheInterceptor)
  @Header('Cache-Control', 'public, max-age=3600') // 1 hour
  findAll() {
    return this.teamsService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: TeamResponse })
  @ApiNotFoundResponse()
  @UseInterceptors(CacheInterceptor)
  @Header('Cache-Control', 'public, max-age=3600') // 1 hour
  findOne(@Param('id') id: string) {
    return this.teamsService.findOne(id);
  }
}
