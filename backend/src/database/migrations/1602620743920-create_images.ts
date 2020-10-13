import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class createImages1602620743920 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "images",
            columns:[
                {
                    name:'id',
                    type:'integer',
                    unsigned: true,
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy:'increment'
                },{
                    name:'path',
                    type:'varchar'
                },{
                    name:'orphanage_id',
                    type:'integer'
                }
            ],
            foreignKeys: [
                {
                    name:'imageOrphanage',
                    columnNames:['orphanage_id'],
                    referencedTableName:'orphanages',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'CASCADE'

                }
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable('images')
    }

}

/* 
foreignKeys cria o relacionamento
columname é a coluna que faz o relacionamento
referencedTableName qual tabela ela ta relacionada
referencedColumnName qual a coluna que esta relacionada
onUpdate o que acontece quando atualiza o banco de dados
onDelete o que acontece quando deleta do banco de dados
CASCADE faz tudo igual pra todos os que estão relacionados

*/