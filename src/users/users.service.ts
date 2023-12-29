import { Injectable, NotFoundException } from '@nestjs/common';

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

  async findOne(username: string): Promise<any> {
    if (!username) {
      throw new Error('Se debe proporcionar un nombre de usuario');
    }

    const user = this.users.find((user) => user.username === username);

    if (!user) {
      throw new NotFoundException(`Usuario no encontrado: ${username}`);
    }

    return user;
  }
}
