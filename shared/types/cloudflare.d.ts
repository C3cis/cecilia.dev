import type { KVNamespace, R2Bucket } from '@cloudflare/workers-types'

declare global {
  var R2: R2Bucket | undefined
  // oxlint-disable-next-line no-underscore-dangle
  var __env__: { R2: R2Bucket | undefined } | undefined
}
