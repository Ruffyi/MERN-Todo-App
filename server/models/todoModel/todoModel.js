"use strict";
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var todoSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: [true, 'You must specify name']
    },
    status: {
        type: String,
        "enum": {
            values: ['complete', 'progress']
        },
        "default": 'progress'
    }
});
var Todo = (0, mongoose_1.model)('Todo', todoSchema);
exports["default"] = Todo;
