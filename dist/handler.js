"use strict";
// src/handler.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.userService = void 0;
const userController_1 = require("./controller/userController");
const userService = async (event, context) => {
    return (0, userController_1.userController)(event, context);
};
exports.userService = userService;
