import { MigrationInterface, QueryRunner } from "typeorm";

export class generate1678108595497 implements MigrationInterface {
    name = 'generate1678108595497'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "schedules_users_properties_real_estate_real_estate" ("schedulesUsersPropertiesId" integer NOT NULL, "realEstateId" integer NOT NULL, CONSTRAINT "PK_5e62e9d96518fbb6c4cb729a2a6" PRIMARY KEY ("schedulesUsersPropertiesId", "realEstateId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_ba239913db0876efe4654bb67f" ON "schedules_users_properties_real_estate_real_estate" ("schedulesUsersPropertiesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_0cfc0ef476df1c3feec00d4253" ON "schedules_users_properties_real_estate_real_estate" ("realEstateId") `);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_real_estate_real_estate" ADD CONSTRAINT "FK_ba239913db0876efe4654bb67f8" FOREIGN KEY ("schedulesUsersPropertiesId") REFERENCES "schedules_users_properties"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_real_estate_real_estate" ADD CONSTRAINT "FK_0cfc0ef476df1c3feec00d42532" FOREIGN KEY ("realEstateId") REFERENCES "real_estate"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_real_estate_real_estate" DROP CONSTRAINT "FK_0cfc0ef476df1c3feec00d42532"`);
        await queryRunner.query(`ALTER TABLE "schedules_users_properties_real_estate_real_estate" DROP CONSTRAINT "FK_ba239913db0876efe4654bb67f8"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_0cfc0ef476df1c3feec00d4253"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_ba239913db0876efe4654bb67f"`);
        await queryRunner.query(`DROP TABLE "schedules_users_properties_real_estate_real_estate"`);
    }

}
