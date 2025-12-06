import winston from "winston";
const requestlogger = winston.createLogger({
    level: 'info',
    format: winston.format.printf(({ level, message }) => {
        return `✓ ${message}`;
    }),
    transports :[
        new winston.transports.Console(),
        new winston.transports.File({filename: `./src/logs/requestlog.log`})
    ]
});
export default requestlogger;