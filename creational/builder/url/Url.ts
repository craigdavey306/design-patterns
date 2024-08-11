export type Protocol = 'http' | 'https' | 'ftp' | 'udp' | 'pop' | 'smtp';

export interface UrlParams {
  protocol: Protocol;
  hostname: string;
  path: string;
  username?: string;
  password?: string;
  port?: number;
  query?: string;
  fragment?: string;
}

export class Url {
  private protocol: string;
  private hostname: string;
  private path: string;
  private username: string | null;
  private password: string | null;
  private port: number | null;
  private query: string | null;
  private fragment: string | null;

  constructor(params: UrlParams) {
    this.protocol = params.protocol;
    this.hostname = params.hostname;
    this.path = params.path;

    this.username = params.username ? params.username : null;
    this.password = params.password ? params.password : null;
    this.port = params.port ? params.port : null;
    this.query = params.query ? params.query : null;
    this.fragment = params.fragment ? params.fragment : null;

    this.validate();
  }

  private validate() {
    if (!this.protocol || !this.hostname) {
      throw new Error('Must specify at least a protocol and hosthame');
    }
  }

  toString() {
    let url = `${this.protocol}://`;

    if (this.username && this.password) {
      url += `${this.username}:${this.password}@`;
    }

    url += this.hostname;
    if (this.port) {
      url += this.port;
    }
    if (this.path) {
      url += this.path;
    }
    if (this.query) {
      url += `?${this.query}`;
    }
    if (this.fragment) {
      url += `#${this.fragment}`;
    }

    return url;
  }
}
