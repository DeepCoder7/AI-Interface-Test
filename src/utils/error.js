export class BaseError extends Error {
    code;
    message;
    type;
    constructor(statusCode, message, type = '') {
        super();
        this.code = statusCode;
        this.message = message;
        this.type = type;
    }
}

export class BadRequestError extends BaseError {
    constructor(message, type) {
        super(400, message, type);
    }
}

export class DuplicateRecordError extends BaseError {
    constructor(message) {
        super(409, message);
    }
}

export class UnauthorizedError extends BaseError {
    constructor(message) {
        super(401, message);
    }
}