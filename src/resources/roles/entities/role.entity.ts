import { User } from '../../users/entities/user.entity';

export class Role {
  id: number;
  role: string;
  users: User[];
}
