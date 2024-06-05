import { Injectable } from '@nestjs/common';
import { QUEUE_NAME } from './utils/constants';
import { Queue } from 'bull';
import { InjectQueue } from '@nestjs/bull';

@Injectable()
export class AppService {
  constructor(@InjectQueue(QUEUE_NAME) private readonly jobsQueue: Queue) {}

  async addJob() {
    await this.jobsQueue.add({ key: 'value' });
  }
}
