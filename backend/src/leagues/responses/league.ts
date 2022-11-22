import { ApiProperty } from '@nestjs/swagger';
import { TeamResponse } from '../../teams/team.response';

export class LeagueResponse {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  sport: string;

  @ApiProperty({ type: [TeamResponse] })
  teams: TeamResponse[];
}
