import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        TypeOrmModule.forRoot({
          type: 'sqlite',
          database: ':memory:', // Banco de dados em memória
          entities: [__dirname + '/**/*.entity{.ts,.js}'], // Localize suas entidades
          synchronize: true, // Sincroniza o banco com as entidades automaticamente
          logging: true, // Opcional: log para depuração
        }),
      ]
})
export class DatabaseModule {}
