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
    clientSecret: requireEnv('REACT_APP_NOT_CLIENT_SECRET'),

    scope: 'openid email wallet',

    redirectUri: `https://myflix-sandy.vercel.app/callback`,

    // This is the url that the auth server will redirect back to after logging out.
    postLogoutRedirectUri: `https://myflix-sandy.vercel.app/logout`,
  });
};
