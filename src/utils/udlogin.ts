import UAuth from '@uauth/js';

const requireEnv = (name: string): string => {
  const env = process.env[name];
  if (!env) {
    throw new Error(`[requireEnv]: ${name} is not set`);
  }
  return env;
};

export default () => {
  return new UAuth({
    clientID: requireEnv('REACT_APP_NOT_CLIENT_ID'),

    scope: 'openid wallet',
    redirectUri: `https://pure-genius-ud.vercel.app/callback`,

    // This is the url that the auth server will redirect back to after logging out.
    postLogoutRedirectUri: `https://pure-genius-ud.vercel.app/`,
  });
};
