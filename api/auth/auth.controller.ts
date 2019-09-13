import { Controller, Get, Request, Post, Body, UseGuards, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { Response } from 'express';

const days = 365;
const time = (days * 86400000);

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  public async login(@Body() body, @Res() response: Response) {
    const { token, serialized_user } = await this.authService.login(body.email, body.password);
    response.cookie('token', token, { expires: new Date(Date.now() + time), path: '/' });
    response.send({
      user: serialized_user,
      token,
    });
  }

  @Post('logout')
  public async logout(@Res() response: Response) {
    response.cookie('token', '', { expires: new Date(Date.now() - time), path: '/' });
    response.send();
  }

  @Get('user')
  @UseGuards(AuthGuard())
  public async user(@Request() req) {
    return req.user;
  }

  @Post('register')
  public async register(@Body() body) {
    throw new Error('The regisration is not working now');
  }

}
