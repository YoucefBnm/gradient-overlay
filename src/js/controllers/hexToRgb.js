import hexRgb from 'hex-rgb';

// convert hex to rgb
export const hexToRgb = (color, opacity) => {
    let convertValue = hexRgb(color)
    convertValue.alpha = opacity / 100;
    convertValue = `rgba(${Object.values(convertValue).join(',')})`
    return convertValue
}