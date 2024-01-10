const updateDisplay = value => {
    const display = document.querySelector('.display p')
    display.innerHTML = value
}

window.onload = () => {
    if(window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', event => {
            const acceleration = event.acceleration.x
            console.log(acceleration)
            updateDisplay('Aceleração no eixo X: ' + acceleration.toFixed(3))
        })

    } else console.log('Seu navegador não suporta a API de orientação do dispositivo.')    
}