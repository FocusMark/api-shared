import { CloudFormationEvent } from './cloud-formation-event';
export declare class CloudFormationResponse<TEventProperties> {
    event: CloudFormationEvent<TEventProperties>;
    context: any;
    constructor(event: CloudFormationEvent<TEventProperties>, context: any);
}
