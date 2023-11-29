import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config/dist';
import { UserModule } from '../user/user.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// https://www.youtube.com/watch?v=3gcGfJ4hUBQ&list=PLco1IpJXladbmW9c5Ge1w6oXH2XBaE4XO&index=4
