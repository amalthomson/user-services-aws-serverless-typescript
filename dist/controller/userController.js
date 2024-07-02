"use strict";
// controller/userController.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const userService_1 = require("../service/userService");
const userService = new userService_1.UserService();
const userController = async (event, context) => {
    const { httpMethod, pathParameters, body } = event;
    if (httpMethod === 'GET' && !pathParameters) {
        // GET /users - get all users
        const users = userService.getAllUsers();
        return {
            statusCode: 200,
            body: JSON.stringify(users),
        };
    }
    if (httpMethod === 'GET' && pathParameters) {
        // GET /users/{id} - get user by id
        const id = parseInt(pathParameters.id || "0", 10);
        const user = userService.getUserById(id);
        if (user) {
            return {
                statusCode: 200,
                body: JSON.stringify(user),
            };
        }
        else {
            return {
                statusCode: 404,
                body: "User not found",
            };
        }
    }
    if (httpMethod === 'POST' && !pathParameters) {
        // POST /users - add new user
        const user = JSON.parse(body || "{}");
        const newUser = userService.addUser(user);
        // Fetch all users again after adding the new user
        const users = userService.getAllUsers();
        return {
            statusCode: 201,
            body: JSON.stringify(users),
        };
    }
    if (httpMethod === 'PATCH' && pathParameters) {
        // PATCH /users/{id} - update user by id
        const id = parseInt(pathParameters.id || "0", 10);
        const user = JSON.parse(body || "{}");
        const updatedUsers = userService.updateUserById(id, user);
        console.log("Updated Users:", updatedUsers);
        return {
            statusCode: 200,
            body: JSON.stringify(updatedUsers),
        };
    }
    return {
        statusCode: 405,
        body: "Method Not Allowed",
    };
};
exports.userController = userController;
