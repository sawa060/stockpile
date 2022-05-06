import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateItem1651767093182 implements MigrationInterface {
    name = 'CreateItem1651767093182'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`item\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`status\` varchar(255) NOT NULL, \`kind\` varchar(255) NOT NULL, \`note\` varchar(255) NOT NULL, \`quantity\` int NOT NULL, \`createdAt\` varchar(255) NOT NULL, \`updatedAt\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`item\``);
    }

}
