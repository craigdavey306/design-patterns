import { SupportTicket } from './SupportTicket';
import { OrderingStrategy } from './OrderingStrategy';

export class CustomerSupport {
  public tickets: SupportTicket[] = [];

  createTicket(customer: string, issue: string): void {
    this.tickets.push(new SupportTicket(customer, issue));
  }

  processTickets(processingStrategy: OrderingStrategy<SupportTicket>) {
    // create the ordered list
    const tickets = processingStrategy.createOrdering(this.tickets);

    // don't do anything if the list is empty
    if (tickets.length === 0) {
      console.log(`Well done! There are no tickets to process.`);
      return;
    }

    tickets.forEach((ticket) => CustomerSupport.processTicket(ticket));
  }

  static processTicket(ticket: SupportTicket) {
    console.log('============================');
    console.log(`Processing ticket ID: ${ticket.id}`);
    console.log(`Customer: ${ticket.customer}`);
    console.log(`Issue: ${ticket.issue}`);
    console.log('============================');
  }
}
