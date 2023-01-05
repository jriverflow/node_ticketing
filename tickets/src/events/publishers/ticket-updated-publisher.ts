import {
	Publisher,
	Subjects,
	TicketUpdatedEvent,
} from '@jayriver-common/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
	readonly subject = Subjects.TicketUpdated;
}
