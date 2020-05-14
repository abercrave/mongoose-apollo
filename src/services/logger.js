import { name } from '../../package.json';
import { createLogger, format, transports } from 'winston';
const { combine, label, printf } = format;

const logger = createLogger({
  format: combine(
    label({ label: name }),
    printf(({ level, message, label }) => {
      return `[${label}] ${level}: ${message}`;
    })
  ),
  transports: [new transports.Console()],
});

export default logger;
