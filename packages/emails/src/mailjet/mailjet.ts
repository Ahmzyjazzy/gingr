import Mailjet from "node-mailjet";
import config from "../config";

export const mailjet = new Mailjet({
    apiKey: config.mailjet.api_key,
    apiSecret: config.mailjet.secret_key,
    config: {
        version: "v3.1",
    },
});

export const SIGNUP_LIST_ID = 78531;

