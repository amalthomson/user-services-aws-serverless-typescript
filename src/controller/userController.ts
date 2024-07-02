// controller/userController.ts

import { APIGatewayEvent, Context, APIGatewayProxyResult } from "aws-lambda";
import { UserService } from "../service/userService";
import { UserDTO } from "../dto/userDto";

const userService = new UserService();

export const userController = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const { httpMethod, pathParameters, body } = event;

  if (httpMethod === 'GET' && !pathParameters) {
    const users: UserDTO[] = userService.getAllUsers();
    return {
      statusCode: 200,
      body: JSON.stringify(users),
    };
  }

  if (httpMethod === 'GET' && pathParameters) {
    const id = parseInt(pathParameters.id || "0", 10);
    const user: UserDTO | undefined = userService.getUserById(id);
    if (user) {
      return {
        statusCode: 200,
        body: JSON.stringify(user),
      };
    } else {
      return {
        statusCode: 404,
        body: "User not found",
      };
    }
  }

  if (httpMethod === 'POST' && !pathParameters) {
    const user: UserDTO = JSON.parse(body || "{}");
    const newUser = userService.addUser(user);
    const users: UserDTO[] = userService.getAllUsers();
    return {
      statusCode: 201,
      body: JSON.stringify(users),
    };
  }

  if (httpMethod === 'PATCH' && pathParameters) {
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
