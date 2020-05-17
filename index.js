const aws = require('aws-sdk');
 
 
 exports.handler = async (event, context) => {
    // TODO implement
    

var s3 = new aws.S3({apiVersion: '2006-03-01'});

 var params = {
  Bucket: "apigw-bucket", 
  Key: "airplane.png"
 };
 var data = await s3.getObject(params).promise();
 const res = {
  "statusCode": 200,
  "body": data.Body.toString('base64'),
  "headers": { "Content-Type": "image/png"},
  "isBase64Encoded": true
 }
   return res;
  
};
