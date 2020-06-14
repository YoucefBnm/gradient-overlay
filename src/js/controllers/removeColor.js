import { setStyle } from './setStyle'
import { hexToRgb } from './hexToRgb'

export const removeColor = (target, array, color, opacity) => {
    if(array.length > 2) {
        target.parentElement.remove()
        array.splice(array.indexOf(hexToRgb(color, opacity)), 1)
        setStyle()
    }
}