import koa from 'koa';
import cors from '@koa/cors';
import serve from 'koa-static';

const port = 8888;

console.log('Starting server');
const app = new koa();
app.use(cors());
app.use(serve('build'));
app.listen(port);
console.log(`Listening on port ${port}`);
