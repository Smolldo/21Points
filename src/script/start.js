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
     
       //Show cards
       setTimeout(() => {
        EnemyCards();
        
      },800)

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

const EnemyCards = () =>{
  refs.enemyItem.forEach(item => {
      markup.forEach(el =>{
        item.innerHTML = markup[GetRandImage(markup)]
      })
  });
}



refs.playBtn.addEventListener('click', PLAY);
window.addEventListener('keyup', PLAYBTN);