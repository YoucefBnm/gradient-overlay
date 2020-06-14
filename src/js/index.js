import "../css/style.css"
import { base, colorValues } from './base'
import { imageInput } from './controllers/imageInput'
import { openModal, closeModal, copyCode } from './controllers/modal'
import { hexToRgb } from './controllers/hexToRgb'
import { removeColor } from './controllers/removeColor'
import { setStyle } from "./controllers/setStyle"
import { updateColor } from './controllers/updateColor'
import { addColor } from './controllers/addColor'
import { handleRadialShape } from './controllers/handleRadialShape'
import { handleDegreePercentage } from './controllers/handleDegreePercentage'
import { handleDirection } from './controllers/handleDirection'

// toggle screen
base.screenBtn.addEventListener('click', () => {
    document.querySelector('.container-main').classList.toggle('full-screen')
})

// add event for background image input
base.submitImgUrlBtn.addEventListener('click', imageInput)

// open modal
base.modalBtn.addEventListener('click', openModal)
// close modal
base.closeModalBtn.addEventListener('click', closeModal)
window.onclick = (event) => {
    if (event.target === base.modal) closeModal()
}

//set color values
base.colorInputs.forEach((color, index) => {
    // convert color value and push to array
    colorValues.push(hexToRgb(color.value, base.opacityInputs[index].value))

    if(colorValues.includes(hexToRgb(color.value, base.opacityInputs[index].value))) {
        [color, base.opacityInputs[index]].forEach(el => {
            // check for color existance
            el.addEventListener('mouseover', () => {
                base.colorIndex = colorValues.indexOf(hexToRgb(color.value, base.opacityInputs[index].value))
                el.addEventListener('input', () => {
                    updateColor(color.value, base.opacityInputs[index].value)
                    setStyle()
                })
            })
        })
    }
    base.removeColorBtns[index].addEventListener('click', () => {
        if (colorValues.includes(hexToRgb(color.value, base.opacityInputs[index].value))) {
            removeColor(base.removeColorBtns[index], colorValues, color.value, base.opacityInputs[index].value)
        }
    })
})

// set opacity value
base.opacityValues.forEach((value, index) => {
    base.opacityInputs[index].addEventListener('input', () => {
        value.textContent = base.opacityInputs[index].value
    })
})

// copy html code
base.copyHtmlBtn.addEventListener('click', () => {
    copyCode(base.htmlCode.textContent.replace(/\s\s+/g, ' '))
    document.querySelector('#copied-html').style.opacity = 0.7

})
// copy css code 
base.copyCssBtn.addEventListener('click', () => {
    copyCode(base.cssCode.textContent.replace(/\s\s+/g, ' '))
    document.querySelector('#copied-css').style.opacity = 0.7
})

setStyle()

base.gradientType.addEventListener('input', setStyle)
base.radialShape.addEventListener('input', handleRadialShape)
base.addColorBtn.addEventListener('click', addColor)
base.degreeInput.addEventListener('input', handleDegreePercentage)
base.gradientDirection.addEventListener('input', handleDirection)

