function playSound(e) {
    const sound = document.querySelector(`audio[data-key="${e.key}"]`);
    const key = document.querySelector(`.key[data-key="${e.key}"]`);

    if (!sound) return; // here we stoping the program from running
    sound.currentTime = 0; // here we set the playing time to 0
    sound.play(); // here we running the sound

    key.classList.add('playing'); // add style
}



function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if it's not transormed
    this.classList.remove('playing');
}


const keys = document.querySelectorAll('.key');
keys.forEach(e => { e.addEventListener('transitionend', removeTransition) });

window.addEventListener('keydown', playSound);