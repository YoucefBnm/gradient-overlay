import { base, colorValues } from '../base'

export const handleRadialShape = () => {
    if (base.gradientType.value === 'radial-gradient') {
        base.overlay.style.backgroundImage = `
            ${base.gradientType.value}(${base.radialShape.value} at ${base.degreeInput.value}%, ${colorValues.join(',')})
        `
    }
    base.gradientValue.textContent = base.overlay.style.backgroundImage
}