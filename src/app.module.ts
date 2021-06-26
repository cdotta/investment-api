import { HttpModule, Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChartsModule } from './charts/charts.module';
import { InvestmentsModule } from './investments/investments.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      formatError: (error: GraphQLError) => {
        try {
          const graphQLFormattedError: GraphQLFormattedError = {
            message:
              error.extensions.exception.response.message || error.message,
          };
          return graphQLFormattedError;
        } catch (_) {
          return error;
        }
      },
    }),
    TypeOrmModule.forRoot(),
    HttpModule,
    ChartsModule,
    InvestmentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
