import { Module } from '@nestjs/common';
import { StepsController } from './steps.controller';

@Module({
  controllers: [StepsController],
})
export class StepsModule {}
