// authorUtils.ts

import { UserProps } from '../../../types';
import { usersData } from '../UsersData.json';

export const getAuthor = (userId: number): UserProps | undefined => {
  return usersData.find(u => u.userId === userId);
};
