import { ColorPalette, CssVars } from '../components/types'

export default function colorPaletteToCssVars(colorPalette: ColorPalette): CssVars {
  const cssVars: CssVars = {}

  Object.entries(colorPalette).forEach(([colorKey, colorPaletteVariants]) => {
    if (colorPaletteVariants) {
      Object.entries(colorPaletteVariants).forEach(([variantKey, variantValue]) => {
        if (variantValue) {
          cssVars[`neat-modal-${colorKey}-${variantKey}`] = variantValue
        }
      })
    }
  })

  return cssVars
}
