import {MigrationInterface, QueryRunner, Table} from "typeorm";

// Classe que configura a tabela orphanages atraves do typeorm
export class createOrphanages1602613688376 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Realizar alterações no bando de dados
        // Ex: Criar tabela, criar um novo campo, deletar algum campo
        await queryRunner.createTable(new Table({
            name: "orphanages",
            columns:[{
                name: 'id',
                type: 'integer',
                unsigned:true,
                isPrimary:true,
                isGenerated: true,
                generationStrategy: 'increment'

            },{
                name:'name',
                type: 'varchar'
            },{
                name:'latitude',
                type:'decimal',
                scale: 10,
                precision: 2
            },{
                name:'longitude',
                type:'decimal',
                scale:10,
                precision:2
            },{
                name:'about',
                type:'text'
            },{
                name: 'instructions',
                type:'text'
            },{
                name:'opening_hours',
                type:'varchar'
            },{
                name:'open_on_weekends',
                type:'boolean',
                default: false
            }]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Desfazer o que foi feito no up
        await queryRunner.dropTable('orphanages')
    }

}


/*
Cada objeto é uma coluna
name é o nome
type é o tipo ex: integer, string
unsigned diz que a coluna nunca vai ser negativa
isPramary é equivalente ao PRIMARY KEY
isGenerated diz que o valor vai ser gerado pela tabela
generationStrategy: increment é eqivalente ao AUTOINCREMENT
type varchar é uma string curta
decimal = float
scale é os numeros depois da virgula
precision numeros antes da virgula
*/