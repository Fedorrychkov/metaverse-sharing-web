import Identicon, { IdenticonOptions } from 'identicon.js'

const config = {
  background: [246, 246, 246, 255],
  margin: 0.28,
  format: 'svg',
} as IdenticonOptions

export function getIdenticon(size: number, hash: string, options: Partial<IdenticonOptions> = {}) {
  return new Identicon(hash, Object.assign({}, config, { size }, options)).toString()
}