import { ListStrategy } from './ListStrategy';

const INDENT_SPACES = 3;

export class HtmlListStrategy implements ListStrategy {
  constructor() {}

  start(buffer: Array<string>): void {
    buffer.push(`<ul>`);
  }

  end(buffer: Array<string>): void {
    buffer.push('</ul>');
  }

  addListItem(buffer: Array<string>, item: string): void {
    const line = `<li>${item}</li>`;
    buffer.push(line.padStart(line.length + INDENT_SPACES, ' '));
  }
}
