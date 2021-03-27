import React, { useMemo } from 'react'
import type { IdenticonOptions } from 'identicon.js'
import { getIdenticon } from '~/utils/get-identicon'

export type IdenticonProps = Omit<React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, 'src' | 'alt'> & {
  options?: Partial<IdenticonOptions>
  size: number
  hash: string
}

export function Identicon({ options = {}, hash, size, ...restProps }: IdenticonProps) {
  const xml = useMemo(() => {
    return getIdenticon(size, hash, options)
  }, [size, options, hash])

  return <img alt="Identicon" src={`data:image/svg+xml;base64,${xml}`} {...restProps} />
}
