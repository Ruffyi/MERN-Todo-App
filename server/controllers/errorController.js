"use strict";
exports.__esModule = true;
exports.NotFoundPage = void 0;
var CustomError_1 = require("./../utils/CustomError");
var dotenv_1 = require("dotenv");
dotenv_1["default"].config({ path: './../config/.env' });
var NotFoundPage = function (req, res, next) {
    var errorMessage = "Can't find ".concat(req.originalUrl, " on server");
    next(new CustomError_1["default"](errorMessage, 404));
};
exports.NotFoundPage = NotFoundPage;
var sendErrorDev = function (res, err) {
    var message = err.message, _a = err.httpStatus, httpStatus = _a === void 0 ? 500 : _a, _b = err.status, status = _b === void 0 ? 'error' : _b, stack = err.stack;
    res.status(httpStatus).send({
        error: {
            message: message,
            httpStatus: httpStatus,
            status: status
        },
        stack: stack
    });
};
var sendErrorProd = function (res, err) {
    var message = err.message, _a = err.httpStatus, httpStatus = _a === void 0 ? 500 : _a, _b = err.status, status = _b === void 0 ? 'error' : _b;
    res.status(httpStatus).send({
        message: 'Something went wrong :(',
        status: status
    });
};
var globalErrorMiddleware = function (err, req, res, next) {
    if (process.env.PROJECT_MODE === 'development') {
        sendErrorDev(res, err);
    }
    else if (process.env.PROJECT_MODE === 'production') {
        sendErrorProd(res, err);
    }
};
exports["default"] = globalErrorMiddleware;
