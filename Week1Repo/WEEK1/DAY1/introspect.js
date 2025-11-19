const os = require('os');
const process = require('process');

console.log(`OS: ${os.type()} ${os.release()}`);
console.log(`Architecture: ${os.arch()}`);
console.log(`CPU Cores: ${os.availableParallelism()}`);
console.log(`Total Memory: ${(os.totalmem())} bytes`);
console.log(`System Uptime: ${(os.uptime())} seconds`);
console.log(`Current Logged User: ${os.userInfo().username}`);
console.log(`Node Path: ${process.execPath}`);
