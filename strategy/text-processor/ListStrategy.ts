export interface ListStrategy {
  start?: (buffer: Array<string>) => void;
  end?: (buffer: Array<string>) => void;
  addListItem: (buffer: Array<string>, item: string) => void;
}
