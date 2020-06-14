import { hexToRgb } from './hexToRgb'
import { colorValues, base } from '../base'

// update colors and opacity
export const updateColor = (color, opacity) => {
    colorValues[base.colorIndex] = hexToRgb(color, opacity)
    base.gradientValue.textContent = base.overlay.style.backgroundImage
}