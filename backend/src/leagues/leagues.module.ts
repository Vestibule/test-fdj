import { Module } from '@nestjs/common';
import { LeaguesService } from './leagues.service';
import { LeaguesController } from './leagues.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { League, LeagueSchema } from './schemas/league.schema';
import { Team, TeamSchema } from 'src/teams/schemas/team.schema';

@Module({
  controllers: [LeaguesController],
  providers: [LeaguesService],
  imports: [
    MongooseModule.forFeature([
      { name: League.name, schema: LeagueSchema },
      {
        name: Team.name,
        schema: TeamSchema,
      },
    ]),
  ],
})
export class LeaguesModule {}
