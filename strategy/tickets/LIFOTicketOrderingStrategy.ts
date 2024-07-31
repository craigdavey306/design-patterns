import { OrderingStrategy } from './OrderingStrategy';
import { SupportTicket } from './SupportTicket';

// Last-in, first-out ordering strategy
export class LIFOOrderingStrategy implements OrderingStrategy<SupportTicket> {
  createOrdering(tickets: SupportTicket[]): SupportTicket[] {
    return Array.from(tickets).reverse();
  }
}
