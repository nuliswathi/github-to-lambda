// Importing AWS SDK for JavaScript
const AWS = require('aws-sdk');
const dynamoDB = new AWS.DynamoDB.DocumentClient();


exports.handler = (event, context) => {

    console.log("This is the new updated test lambda function");
}