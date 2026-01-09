document.addEventListener('DOMContentLoaded', () => {
    let image = document.getElementById('bulb');
    let audio = document.querySelector('#scr');
    let light = document.querySelector('#light_hum');
    let box = document.querySelector('.checkbox')
    let body = document.body;

    box.addEventListener('click', () => {
        lightchange();
        if(audio.paused){
            audio.currentTime=0;
            audio.play();
        }
    });

    function lightchange(){
        if(box.checked){
            image.src = "Assets/bulb_off.png"
                image.src = "Assets/bulb_on.png"
                image.classList.add("bulb_on");
        }else{
            image.src = "Assets/bulb_off.png"
            image.classList.remove("bulb_on")
        }
    }
});