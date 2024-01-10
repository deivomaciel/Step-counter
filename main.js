const updateDisplay = (value, last) => {
    if(!value) value, last = 0
    const display = document.querySelector('.display #acceleration')
    const lastAcceleration = document.querySelector('.display #last-acceleration')
    // let highestRecordedAcceleration = 0

    // if(value > highestRecordedAcceleration) highestRecordedAcceleration = value

    display.innerHTML = `Aceleração no exio X: ${value.toFixed(2)} m/s²`
    lastAcceleration.innerHTML = `Maior aceleração registrada: ${last} m/s²`
}

window.onload = () => {
    const accelerationArray = []

    if(window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', event => {
            const acceleration = event.acceleration.x
            accelerationArray.length != 0 && accelerationArray.shift()
            acceleration != 0 && accelerationArray.push(acceleration)
            
            updateDisplay(acceleration, acceleration[0])
        })

    } else console.log('Seu navegador não suporta a API de orientação do dispositivo.')    
}