import { markup } from "./game";
import { refs } from "./variables";
import { GetRandImage } from "./game";
const a = document.querySelector('.casino');


export const PLAY = () =>{
    if(refs.nameInp.value !== '' ){
        refs.playerNickName.textContent = refs.nameInp.value;
        refs.backdrop.classList.toggle('is-none');
        refs.gameField.classList.toggle('is-none');
        //a.play();
      //  a.volume = 0.4;
    }
    else{
        refs.nameInp.placeholder = "Enter Name!";
    }
};

const PLAYBTN = (e) =>{
    if(e.key !== "Enter"){
        return;
    }
    else{
        PLAY();
    }
}



refs.playBtn.addEventListener('click', PLAY);
window.addEventListener('keyup', PLAYBTN);