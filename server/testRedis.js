import { createClient } from 'redis';

const client = createClient();

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

// await client.set('test', 'hello suxin');
const value = await client.get('test');
console.log(value);
await client.disconnect();