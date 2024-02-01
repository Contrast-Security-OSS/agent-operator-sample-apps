import Fastify from 'fastify'
const fastify = Fastify({
    logger: true
})

// Declare a route
fastify.get('/', async function handler(request, reply) {
    reply.code(200)
        .type('text/html')
        .send("Hello World!")
})

// Run the server!
try {
    await fastify.listen({ port: 3000, host: "0.0.0.0" })
} catch (err) {
    fastify.log.error(err)
    process.exit(1)
}