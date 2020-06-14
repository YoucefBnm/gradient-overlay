import { base, colorValues } from '../base'

export const setStyle = gradientStyle => {
    if (base.gradientType.value === 'linear-gradient') {
        gradientStyle = `
            linear-gradient(${base.degreeInput.value}deg, ${colorValues.join(',')})
        `
        base.radialShape.setAttribute('disabled', 'true')
        base.radialShape.style.opacity = '.2'
        base.radialShape.style.cursor = 'not-allowed'
    }
    if (base.gradientType.value === 'radial-gradient') {
        gradientStyle = `
            radial-gradient(${base.radialShape.value} at ${base.degreeInput.value}%, ${colorValues.join(',')})
        `
        base.radialShape.removeAttribute('disabled')
        base.radialShape.style.opacity = '1'
        base.radialShape.style.cursor = 'default'
    }
    base.overlay.style.backgroundImage = gradientStyle
    base.gradientValue.textContent = gradientStyle
}