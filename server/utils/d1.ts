import type { D1Result } from '@cloudflare/workers-types'

// oxlint-disable-next-line no-underscore-dangle
const D1 = globalThis.D1 ?? globalThis.__env__?.D1

export default function d1<T = unknown>(sql: string): Promise<D1Result<T>> {
  if (!D1) throw new Error('D1 not found')

  return D1.prepare(sql).all<T>()
}
