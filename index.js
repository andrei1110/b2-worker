export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    url.hostname = 'smartol-cloudreve.s3.us-east-005.backblazeb2.com';
    const modifiedRequest = new Request(url.toString(), request);
    return fetch(modifiedRequest);
  }
}
