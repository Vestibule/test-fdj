import { ApiProperty } from '@nestjs/swagger';
import { PlayerResponse } from '../players/player.response';

export class TeamResponse {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  thumbnail: string;

  @ApiProperty({ type: PlayerResponse })
  players: PlayerResponse[];
}
