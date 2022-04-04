import { Appwrite } from "appwrite";

const sdk = new Appwrite();

sdk
    .setEndpoint('http://localhost/v1') // Your API Endpoint
    .setProject('624acc169f3667bd6ab8') // Your project ID
;

export const account = sdk.account;