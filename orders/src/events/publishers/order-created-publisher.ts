import {
	Publisher,
	OrderCreatedEvent,
	Subjects,
} from '@jayriver-common/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
	readonly subject = Subjects.OrderCreated;
}
