import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from './jwt.strategy';
import { UserQuery } from './user.query';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secretOrPrivateKey: process.env.JWT_SECRET || 'dev_key',
      signOptions: {
        expiresIn: 3600 * 24 * 30,
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UserQuery],
  exports: [AuthService, JwtStrategy, TypeOrmModule],
})
export class AuthModule {}
