import { WriteStream } from 'node:fs';

/**
 * Creates a proxy for a Writable stream (WriteStream), intercepts all calls to the write()
 * method, and logs a message to the console every time the method is called.
 * @param writable WriteStream object that will be wrapped by Proxy
 * @returns
 */
export function createLoggingWritable(writable: WriteStream): WriteStream {
  return new Proxy<WriteStream>(writable, {
    get(target, property: keyof WriteStream) {
      if (property === 'write') {
        return function (...args: Parameters<typeof writable.write>) {
          const [chunk] = args;
          console.log(`Writing ${chunk}`);
          return writable.write(...args);
        };
      }

      // Return any other property for the target object.
      return target[property];
    },
  });
}
