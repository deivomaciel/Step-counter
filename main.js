const updateDisplay = value => {
    const display = document.querySelector('.display p')
    display.innerHTML = value
}

window.onload = () => {
    if(window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', event => {
           console.log(event.currentTarget.location.host)
           const host = event.currentTarget.location.host
           updateDisplay(host)
        })

    } else console.log('Seu navegador não suporta a API de orientação do dispositivo.')    
}