export const serializeQueryString = (obj: Record<string, string>) => {
  const str = [];
  for (const p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
    }
  return str.join('&');
};

export const SUPPORTED_CHAINS = [
  1, 3, 4, 5, 42, 56, 97, 1000, 2000, 80001, 43113, 4002, 888, 999,
];

export const setRedirectUrl = () => {
  window.localStorage.setItem('redirectUrl', window.location.pathname);
};

export const getRedirectUrl = () => {
  return window.localStorage.getItem('redirectUrl');
};
