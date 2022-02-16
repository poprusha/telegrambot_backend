import { EntityRepository, Repository } from 'typeorm';
import { User } from '../users/users.model';

@EntityRepository(User)
export class AuthorRepository extends Repository<User> {
  //Example using Query Builder pattern
  public findUserByStatusAndRegisterDate(registerDate: Date): User | null {
    this.createQueryBuilder('u')
      .innerJoin('u.status', 's')
      .where('s.handle', 'active')
      .andWhere('u.registerDate', registerDate);
  }
}
