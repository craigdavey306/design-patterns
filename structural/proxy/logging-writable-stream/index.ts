import { createWriteStream } from 'node:fs';
import { createLoggingWritable } from './logging-writable.js';

const writable = createWriteStream('test.txt'); // Create writable stream
const writableProxy = createLoggingWritable(writable); // Wrap writable stream with Proxy

writableProxy.write('First chunk');
writableProxy.write('Second chunk');
writable.write('This is not logged.');
writableProxy.end();
