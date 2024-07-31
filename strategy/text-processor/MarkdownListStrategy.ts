import { ListStrategy } from './ListStrategy';

const INDENT_SPACES = 1;

export class MarkdownListStrategy implements ListStrategy {
  constructor() {}

  addListItem(buffer: Array<string>, item: string): void {
    const line = `* ${item}`;
    buffer.push(line.padStart(line.length + INDENT_SPACES, ' '));
  }
}
