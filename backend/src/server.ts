import express from 'express'
import routes from './routes'
import path from 'path'
import 'express-async-errors'
import errorHandler from './errors/handlers'
import cors from 'cors'

// chama o arquivo que cria a conexão do banco de dados
import './database/connection'

const api = express()
/* 
MVC

Model
Representividade de uma entidade, um dado, um usuario

View
É como as coisas são visualizadas

Controllers
É onde fica a logica vai ficar
*/


// Diz pro express que vai usar json, como nos arquivos estaticos
api.use(cors())
api.use(express.json())
api.use(routes)
api.use('/uploads', express.static(path.join(__dirname, '..','uploads')))
api.use(errorHandler)

// GET = Buscar uma informação
// POST = Criando uma informação
// PUT = Editar uma informação
// DELETE = Deletar uma informação

// Query Params= http://localhost:3000/users?name=taana&del=tanana
// É o query que fica na url, req.query

// Route Params = http://localhost:3000/users/1 (identificar um recurso)
// É pra usar com post por exemplo, identifica algo na rota /users/1
// req.params
// pra setar um parametro na rota usa : e o nome do parametro por ex /:id

// Body = http://localhost:3000/users/i (identificar um rescurso)
// Serve pra enviar dados que não cabem no route e query vindo de formularios por ex, vem informações com bastante dados
// req.body


api.listen(5000,()=>{console.log('Api is running at localhost:5000')})

// Existe 3 formas de lidar com banco de dados no backend
// Driver nativo, Qery Builder e ORM

// Driver nativo é instalar o sqlite3 e fazer igual no save notes : SELECT * FROM unit

// Query builder usa um framework pra escrever como javascript, um exemplo é o knex
// knex(''users).select('*').where('tanana','tanana')

// ORM usa classes pra representar cade tabela, cada linha da tabela é uma instância na classe
// Object Relational Maping

// Quando usa Query builder ou ORM consegue troca de banco de dados sem usar nada