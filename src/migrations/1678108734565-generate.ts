import { MigrationInterface, QueryRunner } from "typeorm";

export class generate1678108734565 implements MigrationInterface {
    name = 'generate1678108734565'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules_users_properties_user_users" ("schedulesUsersPropertiesId" integer NOT NULL, "usersId" integer NOT NULL, CONSTRAINT "PK_13ba0bfb033dff05bfcb14cf0cf" PRIMARY KEY ("schedulesUsersPropertiesId", "usersId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_2c3cb02b2f0e393900ce9ae65a" ON "schedules_users_properties_user_users" ("schedulesUsersPropertiesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_2330a55d197fa9ee29c8ef00e8" ON "schedules_users_properties_user_users" ("usersId") `);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_user_users" ADD CONSTRAINT "FK_2c3cb02b2f0e393900ce9ae65ac" FOREIGN KEY ("schedulesUsersPropertiesId") REFERENCES "schedules_users_properties"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_user_users" ADD CONSTRAINT "FK_2330a55d197fa9ee29c8ef00e86" FOREIGN KEY ("usersId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_user_users" DROP CONSTRAINT "FK_2330a55d197fa9ee29c8ef00e86"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_user_users" DROP CONSTRAINT "FK_2c3cb02b2f0e393900ce9ae65ac"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2330a55d197fa9ee29c8ef00e8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_2c3cb02b2f0e393900ce9ae65a"`);
        await queryRunner.query(`DROP TABLE "schedules_users_properties_user_users"`);
    }

}
