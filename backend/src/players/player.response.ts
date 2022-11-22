import { ApiProperty } from '@nestjs/swagger';

class Signin {
  @ApiProperty()
  currency: 'eur' | 'gpp';

  @ApiProperty()
  amount: number;
}

export class PlayerResponse {
  @ApiProperty()
  _id: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  position: string;

  @ApiProperty()
  thumbnail: string;

  @ApiProperty({ type: Signin })
  signin: Signin;

  @ApiProperty()
  born: string;
}