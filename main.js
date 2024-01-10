const updateDisplay = (value) => {
    if(!value) value = 0
    const display = document.querySelector('.display #acceleration')
    const lastAcceleration = document.querySelector('.display #last-acceleration')
    let highestRecordedAcceleration = 0

    if(value > highestRecordedAcceleration) highestRecordedAcceleration = value

    display.innerHTML = `Aceleração no exio X: ${value.toFixed(2)} m/s²`
    lastAcceleration.innerHTML = `Maior aceleração registrada: ${highestRecordedAcceleration} m/s²`
}

window.onload = () => {
    if(window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', event => {
            const acceleration = event.acceleration.x
            updateDisplay(acceleration)
        })

    } else console.log('Seu navegador não suporta a API de orientação do dispositivo.')    
}