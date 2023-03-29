import { User } from '../../users/entities/user.entity';
export declare class Role {
    id: number;
    role: string;
    users: User[];
}
