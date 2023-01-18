import {
	Subjects,
	Publisher,
	PaymentCreatedEvent,
} from '@jayriver-common/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
	readonly subject = Subjects.PaymentCreated;
}
