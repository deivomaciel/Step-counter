window.onload = () => {
    if(window.DeviceMotionEvent) {
        window.addEventListener('devicemotion', event => {
           const axioX = event.acceleration.x
           console.log(axioX)
        })

    } else console.log('Seu navegador não suporta a API de orientação do dispositivo.')    
}