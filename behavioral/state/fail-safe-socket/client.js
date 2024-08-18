import { FailsafeSocket } from './failsafeSocket.js';

const port = 5001;

const failsafeSocket = new FailsafeSocket({ port });

setInterval(() => {
  // send current memory usage
  failsafeSocket.send(process.memoryUsage());
}, 1000);
