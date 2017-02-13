function isBrowser()
{
  return window.location.hostname.indexOf('localhost') == 0;
}

export let SERVER_URL = isBrowser() ? "/api" : "http://10.34.10.110:8080";
