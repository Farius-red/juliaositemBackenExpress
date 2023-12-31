import * as express from 'express';
import { Request,Response } from 'express';
const app = express();
const port = 3000;

app.get('/', (req:Request, res: Response) => res.json({ name:"hola"}));
app.get('/books/:bookId', (req:Request, res:Response) => {
  res.send(req.params.bookId)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
