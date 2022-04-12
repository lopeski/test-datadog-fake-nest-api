import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';
import { TracerService } from './tracer/tracer.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  insert(@Body() bd: any) {
    console.log('inserting');
    console.log(bd);
    return 'Colee';
  }
}
