import env from './environmentVariables'
import dbClient from './client'

export const getSite = (siteName: string): Promise<AWS.DynamoDB.DocumentClient.GetItemOutput> => {
    return new Promise((resolve, reject) => {
        dbClient.get({
            TableName: env.tableName,
            Key: {
                name: siteName,
            },
        },
        (err, data) => {
            if (err)
                reject(err);
            else
                resolve(data as AWS.DynamoDB.DocumentClient.GetItemOutput);
        });
    })
}

export const createSite = (
    siteName: string,
    url: string,
): Promise<AWS.DynamoDB.DocumentClient.PutItemOutput> => {
    return new Promise(async (resolve, reject) => {
        try {
            const site = await getSite(siteName)
            if (site.Item !== undefined) {
                reject(new Error(`Site named ${siteName} is already created`));
                return;
            }
        } catch (err) {
            reject(err);
            return;
        }
        dbClient.put({
            TableName: env.tableName,
            Item: {
                name: siteName,
                url,
            },
        },
        (err, data) => {
            if (err)
                reject(err);
            else
                resolve(data);
        });
    })
}