import type { D1Database, R2Bucket } from '@cloudflare/workers-types'

declare global {
  var R2: R2Bucket | undefined
  var D1: D1Database | undefined
  // oxlint-disable-next-line no-underscore-dangle
  var __env__: { R2: R2Bucket | undefined; D1: D1Database | undefined } | undefined
}
