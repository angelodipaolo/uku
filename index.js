const pkg = require('./package.json');
const server = require('./lib/server');

server.start(printStatus);

function printStatus() {
  console.log(`${pkg.name} running at: ${server.info.uri}`);
}
