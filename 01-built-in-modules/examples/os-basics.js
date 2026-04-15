const os = require('os');

// Platform info
console.log('Platform:', os.platform());   // 'darwin', 'win32', 'linux'
console.log('Architecture:', os.arch());   // 'x64', 'arm64'
console.log('Node version:', process.version);

// User info
console.log('Home directory:', os.homedir());
console.log('Username:', os.userInfo().username);
console.log('Temp directory:', os.tmpdir());

// System memory
const totalMem = os.totalmem();
const freeMem = os.freemem();
console.log(`Memory: ${(freeMem / 1e9).toFixed(2)} GB free / ${(totalMem / 1e9).toFixed(2)} GB total`);

// CPU info
const cpus = os.cpus();
console.log(`CPUs: ${cpus.length} cores (${cpus[0].model})`);

// Network interfaces
const nets = os.networkInterfaces();
for (const [name, interfaces] of Object.entries(nets)) {
  for (const net of interfaces) {
    if (net.family === 'IPv4') {
      console.log(`Network ${name}: ${net.address}`);
    }
  }
}
