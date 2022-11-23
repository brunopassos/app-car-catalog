import { MigrationInterface, QueryRunner } from "typeorm";

export class relationship1669161477597 implements MigrationInterface {
    name = 'relationship1669161477597'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "userId" uuid`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "state" character varying(2)`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD CONSTRAINT "FK_20f139b9d79f917ef735efacb00" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "vehicles" DROP CONSTRAINT "FK_20f139b9d79f917ef735efacb00"`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "state"`);
        await queryRunner.query(`ALTER TABLE "vehicles" ADD "state" character varying(50)`);
        await queryRunner.query(`ALTER TABLE "vehicles" DROP COLUMN "userId"`);
    }

}
