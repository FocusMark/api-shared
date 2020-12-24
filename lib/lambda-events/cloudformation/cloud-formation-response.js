"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CloudFormationResponse = void 0;
const axios_1 = __importDefault(require("axios"));
class CloudFormationResponse {
    constructor(event, context) {
        this.event = event;
        this.context = context;
    }
    async send(status, outputData) {
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
            await axios_1.default.put(this.event.responseUrl, jsonResponse, requestOptions);
            console.log('Response to CloudFormation sent successfully');
        }
        catch (err) {
            console.log(err);
            throw new Error('Unable to tell CloudFormation that the Lambda was completed.');
        }
    }
}
exports.CloudFormationResponse = CloudFormationResponse;
//# sourceMappingURL=cloud-formation-response.js.map