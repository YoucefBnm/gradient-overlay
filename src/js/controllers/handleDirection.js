import { base, colorValues } from '../base'

export const handleDirection = () => {
    if (base.gradientType.value === 'linear-gradient') {
        base.overlay.style.backgroundImage = `
            ${base.gradientType.value}(to ${base.gradientDirection.value}, ${colorValues.join(',')})
        `
    }
    if (base.gradientType.value === 'radial-gradient') {
        base.overlay.style.backgroundImage = `
            ${base.gradientType.value}(${base.radialShape.value} at ${base.gradientDirection.value}, ${colorValues.join(',')})
        `
    }
    base.gradientValue.textContent = base.overlay.style.backgroundImage
}