import { ApiGatewayRequestContext } from './api-gateway-request-context';
export interface ApiGatewayEvent {
    body: string;
    resource: string;
    path: string;
    httpMethod: string;
    headers: Record<string, string>;
    requestContext: ApiGatewayRequestContext;
    pathParameters?: Record<string, string>;
}
