import {
	Subjects,
	Publisher,
	ExpirationCompleteEvent,
} from '@jayriver-common/common';

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
	readonly subject = Subjects.ExpirationComplete;
}
