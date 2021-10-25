//import Client from "@microsoft/microsoft-graph-client/lib/es/src/index.js";

import { Client } from "@microsoft/microsoft-graph-client"
import "isomorphic-fetch"

const client = Client.init({
    defaultVersion: "v1.0",
    debugLogging: true,
    authProvider: (done) => {
        done(null, "SECRET_ACCESS_TOKEN");
    },
});

client
    .api("/me")
    .select("displayName")
    .get()
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });