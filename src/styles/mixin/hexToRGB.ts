import React from 'react'

export type Props = {
  r: number
  g: number
  b: number
}

export const hexToRGB = (color = "000") => {
  const rgb = Object.fromEntries(
    ((color.match(/^#?[0-9A-Fa-f]{3}([0-9A-Fa-f]{3})?$/) ? color : "000").replace(
      /^#?(.*)$/,
      (_, hex) => (hex.length == 3) ? hex.replace(/./g, "$&$&") : hex,
    ).match(/../g) ?? []).map((c, i) => ["rgb".charAt(i), parseInt("0x" + c)]),
  )
  const r = rgb.r,
    g = rgb.g,
    b = rgb.b
  return `${r}, ${g}, ${b}`
}