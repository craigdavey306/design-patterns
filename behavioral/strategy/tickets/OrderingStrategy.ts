export interface OrderingStrategy<T> {
  createOrdering: (tickets: T[]) => Array<T>;
}
