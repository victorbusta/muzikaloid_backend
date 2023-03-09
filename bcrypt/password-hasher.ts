import { genSaltSync, hashSync, compareSync } from 'bcrypt';

export const hashPassword = (password: string): string =>
  hashSync(password, genSaltSync(10));

export const validatePassword = (
  password: string,
  hashedPassword: string,
): boolean => compareSync(password, hashedPassword);
