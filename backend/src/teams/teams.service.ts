import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Team, TeamDocument } from './schemas/team.schema';

@Injectable()
export class TeamsService {
  constructor(@InjectModel(Team.name) private teamModel: Model<TeamDocument>) {}

  async findAll() {
    const teams = await this.teamModel.find().populate('players').exec();
    return teams;
  }

  findOne(id: string) {
    return this.teamModel.findOne({ _id: id }).populate('players').exec();
  }
}
