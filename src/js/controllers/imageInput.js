import { base } from '../base'

export const imageInput = () => {
    if (base.imgInput.value !== "") {
        base.imgContainer.style.backgroundImage = `url(${base.imgInput.value})`
        base.bgValue.textContent = `url(${base.imgInput.value})`
    }
}