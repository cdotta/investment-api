import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateInvestments1623260661044 implements MigrationInterface {
  name = 'CreateInvestments1623260661044';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "investment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "destination" character varying NOT NULL, "amount" integer NOT NULL, "externalFees" integer NOT NULL DEFAULT '0', "internalFees" integer NOT NULL DEFAULT '0', "createdDate" TIMESTAMP NOT NULL DEFAULT now(), "updatedDate" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_ad085a94bd56e031136925f681b" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "investment"`);
  }
}
