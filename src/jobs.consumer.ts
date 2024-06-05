import { Processor, Process } from '@nestjs/bull';
import { QUEUE_NAME } from './utils/constants';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor(QUEUE_NAME)
export class JobsConsumer {
  private readonly logger = new Logger(JobsConsumer.name);

  @Process()
  async exampleJob(job: Job<unknown>) {
    this.logger.log(`Job start: ${job.id}`);
    this.logger.debug('Data:', JSON.stringify(job.data));
    await new Promise<void>((resolve) => setTimeout(() => resolve(), 3000));
    this.logger.log(`Job complete: ${job.id}`);
  }
}
