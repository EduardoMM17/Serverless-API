const AWS = require("aws-sdk");
const dynamodb = new AWS.DynamoDB.DocumentClient();

exports.put_item = async (table_name, Item) => {
  await dynamodb
    .put({
      TableName: table_name,
      Item,
    })
    .promise();
};

exports.get_item = async (table_name, Key) => {
  return await dynamodb
    .get({
      TableName: table_name,
      Key,
    })
    .promise();
};
