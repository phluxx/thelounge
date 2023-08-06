// defaultNetworkValues.ts

import { NetworkFormDefaults } from "../js/types";

type PartialClientNetwork = Partial<NetworkFormDefaults>;

// Function to provide default values for the `Partial<ClientNetwork>`
export function getDefaultNetworkValues(bearerToken: string): PartialClientNetwork {
  // Split the bearerToken using the colon (:) as the delimiter
  const [brtknUser, brtknToken] = bearerToken.split(':');

  return {
    name: '',
    host: '',
    port: undefined,
    password: brtknToken, // Set the password to brtknToken
    tls: false,
    rejectUnauthorized: false,
    proxyEnabled: false,
    proxyHost: '',
    proxyPort: undefined,
    proxyUsername: '',
    proxyPassword: '',
    join: '',
    nick: brtknUser, // Set the nick to brtknUser
    username: brtknUser, // Set the username to brtknUser
    realname: brtknUser, // Set the realname to brtknUser
    leaveMessage: '',
    commands: [],
    sasl: '',
    saslAccount: '',
    saslPassword: '',
    brtknUser,
    brtknToken,
  };
}
