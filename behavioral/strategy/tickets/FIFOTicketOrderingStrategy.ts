import { OrderingStrategy } from './OrderingStrategy';
import { SupportTicket } from './SupportTicket';

// First-in, first-out ordering strategy
export class FIFOTicketOrderingStrategy
  implements OrderingStrategy<SupportTicket>
{
  createOrdering(tickets: SupportTicket[]): SupportTicket[] {
    return Array.from(tickets);
  }
}
