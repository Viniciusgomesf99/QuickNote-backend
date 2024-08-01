# QuickNotes API

QuickNotes API é uma API Node.js CRUD para um sistema de notas rápidas, utilizando ORM Prisma e MongoDB.

## Funcionalidades

- Criação de Notas
- Leitura de Notas
- Atualização de Notas
- Exclusão de Notas

## Tecnologias Utilizadas

- Node.js
- Express
- Prisma
- MongoDB

## Instalação

1. Clone o repositório:
    ```bash
    git clone https://github.com/Viniciusgomesf99/QuickNoteAPI.git
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd QuickNoteAPI
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Configure o arquivo `.env` com sua string de conexão do MongoDB:
    ```env
    DATABASE_URL="mongodb+srv://<username>:<password>@<cluster-url>/<database-name>?retryWrites=true&w=majority"
    ```
5. Execute as migrações do Prisma:
    ```bash
    npx prisma db push
    ```
6. Inicie a API:
    ```bash
    npm start
    ```

## Uso

### Criar uma Nota
```bash
POST /notes
```
Exemplo de corpo da requisição:
```json
{
  "date": "2024-07-31",
  "title": "Minha Primeira Nota",
  "content": "Conteúdo da nota",
  "fav": true
}
```

### Ler Todas as Notas

```bash
GET /notes
```
Retorna uma lista de todas as notas armazenadas.

### Atualizar uma Nota

```bash
PUT /notes/:id
```
Envie um JSON no corpo da requisição com os campos a serem atualizados.
Exemplo de corpo da requisição:
```json
{
  "date": "2024-07-31",
  "title": "Título Atualizado",
  "content": "Conteúdo atualizado da nota",
  "fav": false
}
```

### Deletar uma Nota

```bash
DELETE /notes/:id
```
Deleta a nota correspondente ao id fornecido.
