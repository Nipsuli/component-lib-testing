import '@remix-run/cloudflare'

declare module '@remix-run/cloudflare' {
  interface AppLoadContext {
    // these map with the fields in .env
    FOO: string;
    // this is from binding from dev:wrangler
    SESSION_KV: KVNamespace;
  }
}