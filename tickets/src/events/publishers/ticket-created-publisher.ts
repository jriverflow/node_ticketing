import {
	Publisher,
	Subjects,
	TicketCreatedEvent,
} from '@jayriver-common/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
	readonly subject = Subjects.TicketCreated;
}
