import { Injectable } from '@nestjs/common';
import tracer, { Tracer } from 'dd-trace';

@Injectable()
export class TracerService {
  public tracer: Tracer = tracer;

  init() {
    console.log('starting tracer service');
    this.tracer.init({
      logInjection: true,
    });
    console.log('tracer service started');
  }
}
