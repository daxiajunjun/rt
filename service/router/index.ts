import Router from 'koa-router';
import render from '../middleware/ssrRender';

const router = new Router();

router.get('/', (ctx) => {
  ctx.body = 'hello';
})

router.get('/ssr', (ctx) => {
  ctx.body = render()
})

export default router;