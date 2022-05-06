import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUser1651847437785 implements MigrationInterface {
    name = 'CreateUser1651847437785'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), UNIQUE INDEX \`IDX_065d4d8f3b5adb4a08841eae3c\` (\`name\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`item\` ADD \`createdAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`item\` ADD \`updatedAt\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`updatedAt\``);
        await queryRunner.query(`ALTER TABLE \`item\` ADD \`updatedAt\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`item\` DROP COLUMN \`createdAt\``);
        await queryRunner.query(`ALTER TABLE \`item\` ADD \`createdAt\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP INDEX \`IDX_065d4d8f3b5adb4a08841eae3c\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
    }

}
