"use strict";
exports.__esModule = true;
var express_1 = require("express");
var todoController_1 = require("../controllers/todoController");
var router = (0, express_1.Router)();
router.route('/').get(todoController_1.getAllTodos).post(todoController_1.createNewTodo);
router.route('/:id').patch(todoController_1.updateTodo)["delete"](todoController_1.deleteTodo);
exports["default"] = router;
