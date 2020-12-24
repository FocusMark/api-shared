import { CloudFormationEvent } from './cloud-formation-event';
export declare class CloudFormationResponse<TEventProperties> {
    event: CloudFormationEvent<TEventProperties>;
    context: any;
    constructor(event: CloudFormationEvent<TEventProperties>, context: any);
    send<TOutput>(status: string, outputData: TOutput): Promise<void>;
}
