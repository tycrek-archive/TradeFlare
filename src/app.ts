import { Hono } from 'hono';
import SpaceTraders from './st';

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

// Routes
const API_VERSION = 'v1';
app.get(`/api/${API_VERSION}/hello`, (ctx) => ctx.json({ hello: 'world' }));

// * Pre-game
// Agent registration
app.get(`/api/${API_VERSION}/register/:symbol/:faction`, (ctx) => {
	const symbol = ctx.req.param('symbol');
	const faction = ctx.req.param('faction');
	return SpaceTraders.register(symbol, faction)
		.then((data) => ctx.json(data))
		.catch((err) => ctx.json({ success: false, message: err.message }, 400));
});

// * Other
// Unknown API route
app.get('/api/*', (ctx) => ctx.json({ success: false, message: 'Unknown API route' }, 404));

// Assets
app.get('/*', (ctx) => (ctx.env.ASSETS).fetch(ctx.req.raw));

export default app;