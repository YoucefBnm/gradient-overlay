import { base } from '../base'

export const openModal = () => base.modal.classList.add('open')
export const closeModal = () => {
    if (base.modal.classList.contains('open')) base.modal.classList.remove('open')
}

export const copyCode = code => {
    function listener(e) {
        e.clipboardData.setData("text/html", code)
        e.clipboardData.setData("text/plain", code)
        e.preventDefault()
    }
    document.addEventListener("copy", listener)
    document.execCommand("copy")
    document.removeEventListener("copy", listener)
}