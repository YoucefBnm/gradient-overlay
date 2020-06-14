import { base, colorValues } from '../base'
import { hexToRgb } from './hexToRgb'
import { setStyle } from './setStyle'
import { updateColor } from './updateColor'
import { removeColor } from './removeColor'

// add color
export const addColor = () => {
    const colorItem = document.createElement('li')
    colorItem.setAttribute('class', 'color')

    const colorInput = document.createElement('input')
    colorInput.setAttribute('class', 'input-color')
    colorInput.setAttribute('type', 'color')
    colorInput.setAttribute('value', '#252222')
    colorItem.appendChild(colorInput)

    const opacityWrap = document.createElement('div')
    opacityWrap.setAttribute('class', 'wrap-opacity')
    const opacityInput = document.createElement('input')
    opacityInput.setAttribute('class', 'input-opacity')
    opacityInput.setAttribute('type', 'range')
    opacityInput.setAttribute('value', '90')
    opacityInput.setAttribute('min', '0')
    opacityInput.setAttribute('max', '100')
    opacityWrap.appendChild(opacityInput)
    const opacityValueWrap = document.createElement('div')
    opacityValueWrap.setAttribute('class', 'tooltip tooltip--left wrap-value')
    const opacityValue = document.createElement('span')
    opacityValue.setAttribute('class', 'opacity-value')
    opacityValue.textContent = 'opacity'
    opacityValueWrap.appendChild(opacityValue)
    opacityWrap.appendChild(opacityValueWrap)
    colorItem.appendChild(opacityWrap)

    const btnRemove = document.createElement('button')
    btnRemove.setAttribute('class', 'btn-remove')
    btnRemove.setAttribute('type', 'button')
    btnRemove.innerHTML = '&times;'
    colorItem.appendChild(btnRemove)

    base.colorsList.appendChild(colorItem)

    colorValues.push(hexToRgb(colorInput.value, opacityInput.value))
    setStyle()
    opacityInput.addEventListener('input', () => {
        opacityValue.textContent = opacityInput.value
    })

    if(colorValues.includes(hexToRgb(colorInput.value, opacityInput.value))) {
        [colorInput, opacityInput].forEach(el => {
            el.addEventListener('mouseover', () => {
                base.colorIndex = colorValues.indexOf(hexToRgb(colorInput.value, opacityInput.value))
                el.addEventListener('input', () => {
                    updateColor(colorInput.value, opacityInput.value)
                    setStyle()
                })
            })
        })
    }

    btnRemove.addEventListener('click', () => {
        if(colorValues.includes(hexToRgb(colorInput.value, opacityInput.value))) {
            removeColor(btnRemove, colorValues, colorInput.value, opacityInput.value)
        }
    })
}