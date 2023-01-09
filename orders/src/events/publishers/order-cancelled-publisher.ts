import {
	Publisher,
	Subjects,
	OrderCancelledEvent,
} from '@jayriver-common/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
	readonly subject = Subjects.OrderCancelled;
}
