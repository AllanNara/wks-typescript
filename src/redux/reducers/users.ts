import {User} from '../actions/index';
import { ActionTypes, Action } from '../actions/types';

export const usersReducer = (
  state: User[] = [], 
  action: Action
  ) => {
 switch (action.type) {
  case ActionTypes.fetchUsers:
   return action.payload;
  case ActionTypes.deleteUsers:
   return state // ----> FALTA A DESARROLLAR
  default:
   return state;
 }
};