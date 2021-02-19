const fastify = require('fastify')({ logger: true })

// Declare a route
fastify.get('/', async (request, reply) => {
  return { hello: 'king' }
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(8080)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
