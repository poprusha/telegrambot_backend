import { Creator } from './creator';
import { User } from '../users.model';
//Example using Factory Method pattern
class UserCreator extends Creator {
  public CreateUser(): User {
    return new User();
  }
}
