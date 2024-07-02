// src/handler.ts

import { APIGatewayEvent, Context, APIGatewayProxyResult } from "aws-lambda";
import { userController } from './controller/userController';

export const userService = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  return userController(event, context);
};
