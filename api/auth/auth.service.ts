import { Injectable, BadRequestException } from '@nestjs/common';
import crypto from 'crypto';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { IUserPayroll } from '../shared/auth/user-payroll.model';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    @InjectRepository(UserEntity) private readonly userRepository: Repository<UserEntity>,
  ) {}

  getPassword(password: string) {
    return crypto.createHash('md5').update(password).digest('hex');
  }

  getDevUser(email: string) {
    const user = new UserEntity();
    user.id = 0;
    user.email = email;
    user.first_name = 'Local';
    user.last_name = 'Developer';
    return user;
  }

  async login(email: string, password: string): Promise<{
    token: string;
    user: UserEntity;
    serialized_user: IUserPayroll;
  }> {
    let user: UserEntity;
    if (process.env.NODE_ENV === 'production') {
      user = await this.userRepository.findOne({
        where: {
          email,
          password: this.getPassword(password),
        },
      });
    } else {
      if (!email || !!password) {
        user = await this.userRepository.findOne({
          where: {
            email,
            password: this.getPassword(password),
          },
        });
        if (!user) {
          throw new BadRequestException('Email & password (should be empty for dev) are miss match');
        }
      }
      user = this.getDevUser(email);
    }
    if (!user) {
      throw new BadRequestException('Email & password are miss match');
    }
    const serialized_user: IUserPayroll = {
      id: user.id,
      email,
      first_name: user.first_name,
      last_name: user.last_name,
    };
    const token = await this.jwtService.signAsync(serialized_user);
    return {
      token,
      user,
      serialized_user,
    };
  }

  async logout(token: string) {
    const payroll = await this.jwtService.verifyAsync(token);
    return !!payroll;
  }

  async user(token: string): Promise<UserEntity> {
    const payroll: IUserPayroll = await this.jwtService.verifyAsync(token);
    if (!payroll) {
      throw new BadRequestException('The user session is obsolete');
    }
    const user = await this.validate(payroll);
    return user;
  }

  async validate(payroll: IUserPayroll): Promise<UserEntity> {
    let user: UserEntity;
    if (process.env.NODE_ENV === 'production') {
      user = await this.userRepository.findOne(payroll.id);
    } else {
      user = this.getDevUser(payroll.email);
    }
    return user;
  }
}
