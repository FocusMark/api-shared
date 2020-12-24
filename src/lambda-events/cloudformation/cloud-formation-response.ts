import { stat } from 'fs';
import { CloudFormationEvent } from './cloud-formation-event';

export class CloudFormationResponse<TEventProperties> {
    event: CloudFormationEvent<TEventProperties>;
    context: any;

    constructor(event: CloudFormationEvent<TEventProperties>, context: any) {
        this.event = event;
        this.context = context;
    }

    // async send<TOutput>(status: string, outputData: TOutput) {

    // }
}