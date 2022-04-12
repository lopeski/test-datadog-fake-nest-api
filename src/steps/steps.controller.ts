import { Controller, Get } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { logger } from 'src/config/datadog';

@Controller('steps')
export class StepsController {
  @Get()
  async stepsWithLogger() {
    const uniqueLogId = randomUUID();
    const response = { statusCode: 200, body: { message: 'success' } };
    const logObjectSend = {
      logId: uniqueLogId,
      response,
    };
    logger.info('[INFO] Running logger into steps router', logObjectSend);
    logger.info('[INFO] Second logger into steps router', logObjectSend);
    logger.warn('[WARN] These logs are static!!', logObjectSend);
    logger.info('[OK] All proccess are ok. sending response...', logObjectSend);
    return Promise.resolve(response);
  }

  @Get('/withError')
  async stepsWithErrorLogger() {
    const uniqueLogId = randomUUID();
    const response = { statusCode: 500, body: { message: 'error' } };
    const logObjectSend = {
      logId: uniqueLogId,
      response,
    };
    logger.info('[INFO] Running logger into error steps router', logObjectSend);
    logger.info('[INFO] Second logger into error steps router', logObjectSend);
    logger.warn('[WARN] These logs are static!!', logObjectSend);
    logger.error(
      '[ERROR] Simulating error on proccess. sending response...',
      logObjectSend,
    );
    return Promise.resolve(response);
  }
}
