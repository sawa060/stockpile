import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateItemFix1651822137889 implements MigrationInterface {
    name = 'CreateItemFix1651822137889'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`note\` \`note\` varchar(255) NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`item\` CHANGE \`note\` \`note\` varchar(255) NOT NULL`);
    }

}
