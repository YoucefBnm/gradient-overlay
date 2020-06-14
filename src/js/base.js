export const base = {
    overlay: document.querySelector('#overlay'),

    imgContainer: document.querySelector('.img-container'),
    submitImgUrlBtn: document.querySelector('#btn-submit'),
    imgInput: document.querySelector('#img-url'),
    
    gradientType: document.querySelector('#gradient-type'),
    
    addColorBtn: document.querySelector('.btn-add'),
    colorsList: document.querySelector('#colors-list'),
    colorItems: document.querySelectorAll('.color'),
    colorInputs: document.querySelectorAll('.input-color'),
    opacityInputs: document.querySelectorAll('.input-opacity'),
    opacityValues: document.querySelectorAll('.opacity-value'),
    removeColorBtns: document.querySelectorAll('.btn-remove'),

    degreeInput: document.querySelector('#input-degree'),
    degreeValue: document.querySelector('#degree-value'),

    radialShape: document.querySelector('#radial-shape'),

    gradientDirection: document.querySelector('#gradient-direction'),

    modalBtn: document.querySelector('#btn-modal'),
    modal: document.querySelector('.modal'),
    copyHtmlBtn: document.querySelector('#html-copy'),
    htmlCode: document.querySelector('#html-code'),
    copyCssBtn: document.querySelector('#css-copy'),
    cssCode: document.querySelector('#css-code'),
    closeModalBtn: document.querySelector('#btn-close-modal'),
    bgValue: document.querySelector('#bg-url-value'),
    gradientValue: document.querySelector('#gradient-value'),
    
    colorIndex: undefined,
    screenBtn: document.querySelector('.screen-btn')
}

export const colorValues = []