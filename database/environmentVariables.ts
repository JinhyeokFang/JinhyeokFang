class Environment {
    public readonly tableName: string;
    public readonly accessKeyId: string;
    public readonly secretAccessKey: string;
    
    constructor () {
        this.tableName = this.getVariable('TABLE_NAME');
        this.accessKeyId = this.getVariable('DYNAMODB_ACCESS_KEY_ID');
        this.secretAccessKey = this.getVariable('DYNAMODB_SECRET_ACCESS_KEY');
    }
    
    private getVariable(variableName: string): string {
        const value = process.env[variableName];
        if (value === undefined)
            throw new Error(`environment variable ${variableName} is undefined`);
        return value;
    }
}

export default new Environment();
