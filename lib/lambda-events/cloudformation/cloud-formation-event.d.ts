export interface CloudFormationEvent<TProperties> {
    requestType: string;
    responseUrl: string;
    stackId: string;
    requestId: string;
    resourceType: Record<string, string>;
    logicalResourceId: string;
    pathParameters?: Record<string, string>;
    resourceProperties: TProperties;
}
