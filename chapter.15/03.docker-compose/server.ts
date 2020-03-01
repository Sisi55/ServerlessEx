import * as express from 'express';
import * as mysql from 'sync-mysql';

const app = express()

const connection = new mysql({
    host : process.env.DB_HOST || 'localhost', //서버 로컬 IP
    port : 3306,
    user : 'root', //계정 아이디
    password : 'password', //계정 비밀번호
    database : 'test' //접속할 DB
})

app.get('/', async (req: express.Request, res: express.Response) => {
  const result = await connection.query('SELECT 1 + 1 as VALUE;');
  res.json(result);
});

app.listen(4000, function () {
  console.log('server starting with 4000')
})