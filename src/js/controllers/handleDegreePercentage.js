import { base, colorValues } from '../base'

// handle degree for linear and percentage for radial
export const handleDegreePercentage = () => {
    if (base.gradientType.value === 'linear-gradient') {
        base.overlay.style.backgroundImage = `
            ${base.gradientType.value}(${base.degreeInput.value}deg, ${colorValues.join(',')})
        `
    }
    if (base.gradientType.value === 'radial-gradient') {
        base.overlay.style.backgroundImage = `
            ${base.gradientType.value}(${base.radialShape.value} at ${base.degreeInput.value}%, ${colorValues.join(',')})
        `
    }
    base.gradientValue.textContent = base.overlay.style.backgroundImage
    base.degreeValue.textContent = base.degreeInput.value
}