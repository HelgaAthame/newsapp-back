import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NewsModule } from './news/news.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true, //'schema.gql',
      sortSchema: true,
      playground: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        // type: 'postgres',
        // host: configService.get('DB_HOST'),
        // port: +configService.get('DB_PORT'),
        // username: configService.get('DB_USERNAME'),
        // password: configService.get('DB_PASSWORD'),
        // database: configService.get('DB_NAME'),
        // entities: [__dirname + 'dist/**/*.entity{.js,.ts}'],
        // // do NOT use syncronize: true in real projeacts
        // synchronize: true,
        // autoLoadEntities: true,
        // logging: true,
        type: 'postgres',
        url: configService.get('DATABASE_URL'), // Строка подключения из .env
        synchronize: true, // Только для разработки!
        autoLoadEntities: true,
        logging: true,
        ssl: { rejectUnauthorized: false }, // Настройка SSL для Supabase
      }),
    }),
    NewsModule,
  ],
})
export class AppModule {}
