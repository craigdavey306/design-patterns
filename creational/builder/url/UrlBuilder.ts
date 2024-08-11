import { Url, UrlParams, Protocol } from './Url.js';

export class UrlBuilder {
  private protocol: Protocol = 'http';
  private hostname: string = '';
  private path: string = '';
  private username: string | undefined;
  private password: string | undefined;
  private port: number | undefined;
  private query: string | undefined;
  private fragment: string | undefined;

  setProtocol(protocol: Protocol) {
    this.protocol = protocol;
    return this;
  }

  setAuthentication(username: string, password: string) {
    this.username = username;
    this.password = password;
    return this;
  }

  setFragment(fragment: string) {
    this.fragment = fragment;
  }

  setHostname(hostname: string) {
    this.hostname = hostname;
    return this;
  }

  setPath(path: string) {
    this.path = path;
    return this;
  }

  setPort(port: number) {
    this.port = port;
    return this;
  }

  setQuery(query: string) {
    this.query = query;
    return this;
  }

  build() {
    const params: UrlParams = {
      protocol: this.protocol,
      hostname: this.hostname,
      path: this.path,
      username: this.username,
      password: this.password,
      port: this.port,
      query: this.query,
      fragment: this.fragment,
    };

    return new Url(params);
  }
}
