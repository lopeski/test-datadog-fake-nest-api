import { createLogger, format, transports } from 'winston';

const httpTransportOptions = {
  host: process.env.DATADOG_HOST,
  path: process.env.DATADOG_URL,
  ssl: true,
};

const logger = createLogger({
  level: 'info',
  exitOnError: false,
  format: format.json(),
  transports: [new transports.Http(httpTransportOptions)],
});

export { logger };
