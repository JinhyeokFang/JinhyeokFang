import AWS from 'aws-sdk'
import env from './environmentVariables'

AWS.config.update({
    region: 'ap-northeast-2',
    credentials: new AWS.Credentials({
        accessKeyId: env.accessKeyId,
        secretAccessKey: env.secretAccessKey,
    })
});

export default new AWS.DynamoDB.DocumentClient();
