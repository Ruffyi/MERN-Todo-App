"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.deleteTodo = exports.updateTodo = exports.createNewTodo = exports.getAllTodos = void 0;
var todoModel_1 = require("../models/todoModel/todoModel");
var express_async_handler_1 = require("express-async-handler");
// @desc Get all todos
// @route GET /todos
// @access Public
var getAllTodos = (0, express_async_handler_1["default"])(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var todos;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, todoModel_1["default"].find({})];
            case 1:
                todos = _a.sent();
                res.status(200).send({
                    status: 'success',
                    data: {
                        todos: todos
                    }
                });
                return [2 /*return*/];
        }
    });
}); });
exports.getAllTodos = getAllTodos;
// @desc Create new todo
// @route POST /todos
// @access Public
var createNewTodo = (0, express_async_handler_1["default"])(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, name, status, newTodo;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _a = req.body, name = _a.name, status = _a.status;
                return [4 /*yield*/, todoModel_1["default"].create({ name: name, status: status })];
            case 1:
                newTodo = _b.sent();
                res.status(201).send({
                    status: 'success',
                    data: {
                        newTodo: newTodo
                    }
                });
                return [2 /*return*/];
        }
    });
}); });
exports.createNewTodo = createNewTodo;
// @desc Update todo
// @route POST /todos/:id
// @access Public
var updateTodo = (0, express_async_handler_1["default"])(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, updatedTodo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, todoModel_1["default"].findByIdAndUpdate(id, req.body, {
                        "new": true,
                        runValidators: true
                    })];
            case 1:
                updatedTodo = _a.sent();
                res.status(201).send({
                    status: 'success',
                    data: {
                        updatedTodo: updatedTodo
                    }
                });
                return [2 /*return*/];
        }
    });
}); });
exports.updateTodo = updateTodo;
// @desc Delete todo
// @route POST /todos/:id
// @access Public
var deleteTodo = (0, express_async_handler_1["default"])(function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {
    var id, deletedTodo;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                id = req.params.id;
                return [4 /*yield*/, todoModel_1["default"].findByIdAndDelete(id)];
            case 1:
                deletedTodo = _a.sent();
                res.status(201).send({
                    status: 'success',
                    data: {
                        deletedTodo: deletedTodo
                    }
                });
                return [2 /*return*/];
        }
    });
}); });
exports.deleteTodo = deleteTodo;
