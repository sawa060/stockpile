import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/create-user.dto';
import { CredentialsDto } from './dto/credentials.dto';
import { UserRepository } from './user.repository';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(private userRepository: UserRepository, private jwtService: JwtService) {}

  async signup(createUserDto: CreateUserDto) {
    return await this.userRepository.createUser(createUserDto);
  }

  async login(credentialsDto: CredentialsDto) {
    const { email, password } = credentialsDto;
    const user = await this.userRepository.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const payload = { id: user.id, email: user.email };
      const accessToken = await this.jwtService.sign(payload);
      return { accessToken };
    }

    throw new UnauthorizedException('メールアドレスまたはパスワードを確認してください。');
  }
}
