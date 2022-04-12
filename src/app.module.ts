import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TracerModule } from './tracer/tracer.module';
import { StepsModule } from './steps/steps.module';

@Module({
  imports: [TracerModule, StepsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
