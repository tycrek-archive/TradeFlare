import { Hono } from 'hono';

/**
 * Bindings introduced for Hono v3.0.0
 */
type Bindings = {
	ASSETS: Fetcher;
}

/**
 * Create a new Hono app
 */
const app = new Hono<{ Bindings: Bindings }>();

// 404 handler
app.notFound((ctx) => ctx.text('Not found', 404));

// Error handler
app.onError((err: any, ctx) => (console.log(err), ctx.text(`${err}`, err.res?.status || err.status || 500)));

// Assets
app.get('/*', (ctx) => (ctx.env.ASSETS).fetch(ctx.req.raw));

export default app;