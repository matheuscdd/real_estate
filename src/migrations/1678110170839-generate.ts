import { MigrationInterface, QueryRunner } from "typeorm";

export class generate1678110170839 implements MigrationInterface {
    name = 'generate1678110170839'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "realEstateId" integer`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD "userId" integer`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_9ea44d2d89def175ed9db8ccf3f" FOREIGN KEY ("realEstateId") REFERENCES "real_estate"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" ADD CONSTRAINT "FK_6b07764ec82685efb66e5629845" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_6b07764ec82685efb66e5629845"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP CONSTRAINT "FK_9ea44d2d89def175ed9db8ccf3f"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "userId"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties" DROP COLUMN "realEstateId"`);
    }

}
