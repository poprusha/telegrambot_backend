import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'example@example.com', description: 'User email' })
  readonly email: string;

  @ApiProperty({ example: 'ExamplePassword', description: 'User password' })
  readonly password: string;
}
