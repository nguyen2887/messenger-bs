import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './dto/signup.dto';
import { LoginDto } from './dto/login.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/signup')
  signUp(@Body() body: SignUpDto): Promise<{ token: string }> {
    return this.authService.signUp(body);
  }

  @Post('/login')
  login(@Body() body: LoginDto): Promise<{ token: string }> {
    return this.authService.login(body);
  }
}
