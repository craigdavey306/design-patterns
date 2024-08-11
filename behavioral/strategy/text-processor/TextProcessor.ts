import { OutputFormat } from './OutputFormat';
import { MarkdownListStrategy } from './MarkdownListStrategy';
import { HtmlListStrategy } from './HtmlListStrategy';
import { ListStrategy } from './ListStrategy';

export class TextProcessor {
  private buffer: Array<string>;
  private listStrategy: ListStrategy;

  constructor(outputFormat: OutputFormat) {
    this.buffer = [];
    this.listStrategy =
      outputFormat === 'html'
        ? new HtmlListStrategy()
        : new MarkdownListStrategy();
  }

  setOutputFormat(format: OutputFormat) {
    switch (format) {
      case 'html':
        this.listStrategy = new HtmlListStrategy();
        break;
      default:
        this.listStrategy = new MarkdownListStrategy();
    }
  }

  appendList(items: Array<string>) {
    if (this.listStrategy.start) {
      this.listStrategy.start(this.buffer);
    }

    items.forEach((item) => this.listStrategy.addListItem(this.buffer, item));

    if (this.listStrategy.end) {
      this.listStrategy.end(this.buffer);
    }
  }

  clear() {
    this.buffer = [];
  }

  toString() {
    return this.buffer.join('\n');
  }
}
