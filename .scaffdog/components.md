---
name: 'components'
root: 'src'
output: '**/*'
message: 'Please enter component name.'
questions:
  name: 'Please enter any text.'
ignore: []
---

# `{{ inputs.value }}/index.tsx`

```javascript
import React, { FCX } from 'react'
import { {{ inputs.value }}Recipe, {{ inputs.value }}Variants } from './style.css'

type Props = {{ inputs.value }}Variants

export const {{ inputs.value }}: FCX<Props> = ({
  children,
  className
}) => {
  return (
    <div
      className={`${ {{ inputs.value }}Recipe({

      })} ${className || ''}`}
    >
      {children}
    </div>
  )
}

```

# `{{ inputs.value }}/style.css.ts`

```javascript
import * as VEX from '@vanilla-extract/recipes'

export const {{ inputs.value }}Recipe = VEX.recipe({
  base: {

  },

  variants: {

  }
})

export type {{ inputs.value }}Variants = VEX.RecipeVariants<typeof {{ inputs.value }}Recipe>

```
