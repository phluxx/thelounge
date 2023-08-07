// defaultNetworkValues.ts

export interface NetworkFormDefaults {
  username: string;
  token: string;
  name: string;
  host: string;
  port: number;
  password: string;
  tls: boolean;
  rejectUnauthorized: boolean;
  nick: string;
  // Add other properties as needed
}

export function getDefaultNetworkValues(userInfo: { username: string; token: string } | null ): NetworkFormDefaults {
  const defaultUsername = "noCookieFound";
  const defaultToken = "noCookieFound";

  if (userInfo && userInfo.username && userInfo.token) {
    const {username, token} = userInfo;

    return {
      username: username,
      token: token,
      name: "Ewnix",
      host: "devel.ewnix.net",
      port: 6667,
      nick: username,
      password: "",
      tls: true,
      rejectUnauthorized: true,
    };
  } else {

  return {
    username: defaultUsername,
    token: defaultToken,
    name: "Ewnix",
    host: "devel.ewnix.net",
    port: 6667,
    tls: true,
    rejectUnauthorized: true,
    nick: defaultUsername,
    password: defaultToken,
    // Add default values for other properties as needed
  };
}
}
