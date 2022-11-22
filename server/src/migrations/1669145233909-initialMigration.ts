import { MigrationInterface, QueryRunner } from "typeorm";

export class initialMigration1669145233909 implements MigrationInterface {
    name = 'initialMigration1669145233909'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "users" ("id" uuid NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vehicles" ("id" uuid NOT NULL, "name" character varying(50) NOT NULL, "brand" character varying(50) NOT NULL, "model" character varying(50) NOT NULL, "year" character varying(4), "km" integer, "color" character varying(20), "city" character varying(50), "state" character varying(50), "value" integer, "imageLink" character varying NOT NULL, CONSTRAINT "PK_18d8646b59304dce4af3a9e35b6" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "vehicles"`);
        await queryRunner.query(`DROP TABLE "users"`);
    }

}
