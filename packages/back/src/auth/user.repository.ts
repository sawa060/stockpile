import { User } from 'src/entities/user.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CreateUserDto } from './create-user.dto';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async createUser(createUserDto: CreateUserDto) {
    const { name, password, email } = createUserDto;
    const user = this.create({ name, password, email });

    await this.save(user);
    return user;
  }
}
