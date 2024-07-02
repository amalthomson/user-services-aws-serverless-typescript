// service/userService.ts

import { UserRepository } from "../repository/userRepository";
import { UserDTO } from "../dto/userDto";

export class UserService {
  private userRepository = new UserRepository();

  getAllUsers(): UserDTO[] {
    return this.userRepository.getAllUsers();
  }

  getUserById(id: number): UserDTO | undefined {
    return this.userRepository.getUserById(id);
  }

  addUser(user: UserDTO): UserDTO {
    return this.userRepository.addUser(user);
  }

  updateUserById(id: number, user: Partial<UserDTO>): UserDTO[] {
    return this.userRepository.updateUserById(id, user);
  }
}

