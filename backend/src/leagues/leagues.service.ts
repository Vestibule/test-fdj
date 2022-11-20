import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { League, LeagueDocument } from './schemas/league.schema';

@Injectable()
export class LeaguesService {
  constructor(
    @InjectModel(League.name) private leagueModel: Model<LeagueDocument>,
  ) {}

  async findAll() {
    const leagues = await this.leagueModel.find().populate('teams').exec();
    return leagues;
  }

  findOne(id: number) {
    return `This action returns a #${id} league`;
  }
}
