import { CustomerSupport } from './CustomerSupport';
import { FIFOTicketOrderingStrategy } from './FIFOTicketOrderingStrategy';
import { LIFOOrderingStrategy } from './LIFOTicketOrderingStrategy';

const app = new CustomerSupport();
app.createTicket('John Smith', 'My computer makes strange sounds!');
app.createTicket('Jane Swank', `I can't upload any videos, please help.`);
app.createTicket('Arjan Jones', `VSCode doesn't automatically solve my bugs.`);

// process the tickets
console.log('using LIFO Ordering Strategy...');
app.processTickets(new LIFOOrderingStrategy());
console.log('using FIFO Ordering Strategy...');
app.processTickets(new FIFOTicketOrderingStrategy());
