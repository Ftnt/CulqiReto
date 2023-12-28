import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'jairo',
      password: 'Culqi2024',
    },
    {
      userId: 2,
      username: 'henry',
      password: 'Culqi2024',
    },
  ];

  async findOne(username: string): Promise<any | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
