import { User } from '../users.model';

export abstract class Creator {
  public abstract CreateUser(): User;
}
