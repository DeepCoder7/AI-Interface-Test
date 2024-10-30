const winston = require('winston');
require('winston-daily-rotate-file');
const { combine, timestamp, json, label, printf, colorize } = winston.format;

const fileRotateTransport = new winston.transports.DailyRotateFile({
    filename: 'log/ai-interface-%DATE%.log',
    datePattern: 'YYYY-MM-DD',
    maxFiles: '14d',
    level: 'error'
});

const logger = winston.createLogger({
    level: 'info',
    format: combine(timestamp(), json()),
    transports: [fileRotateTransport,new winston.transports.Console({
        level: 'debug',
        format: combine(
            label({
                label: "🏷️",
            }),
            timestamp({
                format: "MMM-DD-YYYY HH:mm:ss",
            }),
            printf((info) => `[${info.timestamp}] ${info.level}: ${info.message}`),
            json(),
            colorize({
                all: true
            })
        )
    })],
});

module.exports = {
    logger
}