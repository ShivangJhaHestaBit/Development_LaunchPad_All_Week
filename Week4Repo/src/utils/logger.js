import winston from "winston";
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.printf(({ level, message }) => {
        return `✓ ${message}`;
    }),
    transports :[
        new winston.transports.Console(),
        new winston.transports.File({filename: `./src/logs/combined.log`})
    ]
});
export default logger;