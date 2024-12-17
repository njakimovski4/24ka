import { Client, Account} from 'appwrite';

export const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('<67620584003ba9bef353>');

export const account = new Account(client);
export { ID } from 'appwrite';