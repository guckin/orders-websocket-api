import {APIGatewayProxyHandler} from "aws-lambda";

export const onConnectFunction: APIGatewayProxyHandler = async () => {
    console.log('client connected');
    return {
        statusCode: 200,
        body: 'Connected.'
    };
};

export const onDisconnectFunction: APIGatewayProxyHandler = async () => {
    console.log('client disconnected');
    return {
        statusCode: 200,
        body: 'Disconnected.'
    };
};


export const onSubscribeFunction: APIGatewayProxyHandler = async () => {
    console.log('client subscribed');
    return {
        statusCode: 200,
        body: 'Subscribed.'
    };
};

