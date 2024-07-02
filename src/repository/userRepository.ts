// repository/userRepository.ts

import { UserDTO } from "../dto/userDto";

export class UserRepository {
  private users: UserDTO[] = [
    {
      id: 1,
      firstName: "Amal",
      lastName: "Thomson",
      email: "amalthomson@icloud.com",
      phone: "9469664422",
      gender: "Male",
    },
    {
      id: 2,
      firstName: "Jenny",
      lastName: "Johnson",
      email: "jennyjohnson@gmail.com",
      phone: "9018226718",
      gender: "Female",
    },
    {
      id: 3,
      firstName: "Don",
      lastName: "Benny",
      email: "donbenny@gmail.com",
      phone: "9797571920",
      gender: "Male",
    },
    {
      id: 4,
      firstName: "Stephin",
      lastName: "Johnson",
      email: "stephinjohnson@gmail.com",
      phone: "7006370763",
      gender: "Male",
    },
    {
      id: 5,
      firstName: "Vikas",
      lastName: "Wilson",
      email: "vikaswilson@gmail.com",
      phone: "9061704045",
      gender: "Male",
    },
  ];

  getAllUsers(): UserDTO[] {
    return this.users;
  }

  getUserById(id: number): UserDTO | undefined {
    return this.users.find((user) => user.id === id);
  }

  addUser(user: UserDTO): UserDTO {
    const newUser = { ...user, id: this.users.length + 1 };
    this.users.push(newUser);
    return newUser;
  }

  updateUserById(id: number, user: Partial<UserDTO>): UserDTO[] {
    const index = this.users.findIndex((u) => u.id === id);
    if (index !== -1) {
      this.users[index] = { ...this.users[index], ...user };
    }
    return this.getAllUsers();
  }
}
