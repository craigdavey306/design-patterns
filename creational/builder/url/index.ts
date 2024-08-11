import { UrlBuilder } from './UrlBuilder.js';

const url = new UrlBuilder()
  .setProtocol('https')
  .setAuthentication('user', 'pass')
  .setHostname('example.com')
  .build();

console.log(url.toString());
