import { users } from "../Api";

export const getUserInformation = ({ userid }) => {
  return users.find( user => user.id === userid );
}