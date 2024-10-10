import { Hono } from "hono"

const app = new Hono();

app.get('/',(c) => {
	return c.json({hello : "Mahathi"});
})
const server = Bun.serve({
	port: 3001,
	fetch: app.fetch
})
console.log(`Running on port ${server.port}`)
