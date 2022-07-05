document.body.addEventListener('keyup', event => {
    playSound(event.code.toLowerCase())
})

document.querySelector('.composer button').addEventListener('click', () => {
    const song = document.querySelector('#input').value
    const songArray = song.split('')
    playComposition(songArray)


})

function playSound(sound) {
    const audioElement = document.querySelector(`#s_${sound}`)

    const keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if (audioElement) {
        audioElement.currentTime = 0
        audioElement.play()
    }

    if (keyElement) {

        keyElement.classList.add('active')
        setTimeout(() => {
            keyElement.classList.remove('active')
        }, 150)
    }
}

function playComposition(songArray) {
    let wait = 0

    for (let songItem of songArray) {
        
        setTimeout(() => {
            playSound(`key${songItem}`)
        }, wait)

        wait += 250
    }

}