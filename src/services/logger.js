import { createLogger, format, transports } from 'winston';
const { combine, label, printf } = format;

const logger = createLogger({
  format: combine(
    label({ label: process.env.npm_package_name }),
    printf(({ level, message, label }) => {
      return `[${label}] ${level}: ${message}`;
    })
  ),
  transports: [new transports.Console()],
});

export default logger;
