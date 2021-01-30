const { sdk } = require('@cto.ai/sdk')
const http = require('http')

async function main() {
  const requestListener = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.write('Hello World!')
    res.end()
  }

  const server = http.createServer(requestListener)
  server.listen(8080, function () {
    sdk.log('server started!')
  })
}
main()
