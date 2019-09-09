import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressEntity } from './address.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AddressEntity]),
  ],
  // controllers: [AddressController],
  // providers: [AddressService, JwtStrategy],
  // exports: [AddressService, JwtStrategy],
})
export class AddressModule {}
