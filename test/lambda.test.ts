import {onConnectFunction, onDisconnectFunction, onSubscribeFunction} from "../src/lambdas";
import {APIGatewayProxyHandler} from "aws-lambda";

describe('lambdas', () => {
    describe('onConnectFunction', () => {
        it('executes successfully', async () => {
            const result = await onConnectFunction(...getParams());

            expect(result).toEqual({
                statusCode: 200,
                body: 'Connected.'
            });
        });
    });

    describe('onDisconnectFunction', () => {
        it('executes successfully', async () => {
            const result = await onDisconnectFunction(...getParams());

            expect(result).toEqual({
                statusCode: 200,
                body: 'Disconnected.'
            });
        });
    });

    describe('onSubscribeFunction', () => {
        it('executes successfully', async () => {
            const result = await onSubscribeFunction(...getParams());

            expect(result).toEqual({
                statusCode: 200,
                body: 'Subscribed.'
            });
        });
    });
});

const getParams = (): Parameters<APIGatewayProxyHandler>  => [] as unknown as Parameters<APIGatewayProxyHandler>;
