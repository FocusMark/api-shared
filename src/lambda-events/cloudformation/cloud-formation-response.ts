import axios from 'axios';

import { CloudFormationEvent } from './cloud-formation-event';

export class CloudFormationResponse<TEventProperties> {
    event: CloudFormationEvent<TEventProperties>;
    context: any;

    constructor(event: CloudFormationEvent<TEventProperties>, context: any) {
        this.event = event;
        this.context = context;
    }

    async send<TOutput>(status: string, outputData: TOutput): Promise<void> {
        const jsonResponse = JSON.stringify({
            Status: status,
            Reason: `See the details in CloudWatch LogStream: ${this.context.logStreamName}`,
            PhysicalResourceId: this.context.logStreamName,
            StackId: this.event.stackId,
            RequestId: this.event.requestId,
            LogicalResourceId: this.event.logicalResourceId,
            Data: outputData
        });

        console.log(`Response body:\n${jsonResponse}`);
        const requestOptions = {
            headers: { 'content-type': '', 'content-length': jsonResponse.length }
        };

        try {
            await axios.put(this.event.responseUrl, jsonResponse, requestOptions);
            console.log('Response to CloudFormation sent successfully');
        } catch(err) {
            console.log(err);
            throw new Error('Unable to tell CloudFormation that the Lambda was completed.');
        }
    }
}