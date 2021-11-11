import list from '../template/list.hbs';
import card from '../template/cards.json';
import { refs } from './variables';
import playList from '../template/player-card.hbs';
import { PLAY } from './start';

export const markup = card.map((e) => list(e));
const markupPlayer = card.map((el) => playList(el));

const text = [
    "UwU You WIN!",
    "Shame On You!",
    "We are equal!",
]

//card picker function
const Pick = () => {
    let c =  document.createElement("li");
    c.classList.add("card_item");
    c.classList.add("player_card_item");
    c.innerHTML = `${markupPlayer[GetRandImage(markupPlayer)]}`;
    if(refs.playerCards.childElementCount !== 3){
        setTimeout(() =>{
            refs.playerCards.appendChild(c)
        },400)
    }
    else{
        refs.pickBtn.setAttribute("disable", "true")
    }
};

//Stop picking. Results
const STOP = () => {

    let comPoi = document.querySelectorAll('.comp_card');
    let plaPoi = document.querySelectorAll('.player_card');

    let player = Switcher(plaPoi);
    let computer = Switcher(comPoi);

   setTimeout(() =>{
        //total points on screen
    refs.playPoint.textContent = player;
    refs.compPoint.textContent = computer;

  //card seeing or not
    refs.enemyItem.forEach(cl => {
        cl.classList.remove('hidden');
    })
    comPoi.forEach(cl => {
        cl.classList.remove('is-none');
    })
   },400)


    //Result conditions
    if(player > computer && player <= 21){
        refs.finalTitle.textContent = text[0];
        FinalWindow();
    }
    else if(player > computer && player > 21){
        refs.finalTitle.textContent = text[1];
        FinalWindow();
    }
    else if(player > 21 && computer > 21){
        refs.finalTitle.textContent = text[1];
        FinalWindow();
    }
    else if(player > 21 && computer <= 21){
        refs.finalTitle.textContent = text[1];
        FinalWindow();
    }
    else if(player > computer && player <=21 && computer < 21){
       refs.finalTitle.textContent = text[0];
        FinalWindow();
    }
    else if(player < computer && player <=21 && computer < 21){
        refs.finalTitle.textContent = text[1];
        FinalWindow();
    }
    else if(player == computer){
        refs.finalTitle.textContent = text[2];
        FinalWindow();
    }
    else if(player < computer && player < 21 && computer > 21){
       refs.finalTitle.textContent = text[0];
        FinalWindow();
    }
    else if(player == 21){
       refs.finalTitle.textContent = text[0];
        FinalWindow();
    }
    else if(computer == 21){
        refs.finalTitle.textContent = text[1];
        FinalWindow();
    }
    
}

const FinalWindow = () =>{
    setTimeout(() =>{
        refs.finalBack.classList.toggle('is-none');
    },2100)

}

const Switcher = (x) =>{
    var res = 0;
    x.forEach(imageID =>{ 
        console.log(imageID.id)
        switch(imageID.id){
            case "2":
            case "jack":
                res += 2;
                break;
            case "3":
            case "queen":  
                res += 3;
                break;
            case "4":
            case "king":
              res += 4;
              break;
            case "5":
              res += 5;
              break;
            case "6":
              res += 6;
              break;
            case "7":
              res += 7;
              break;
            case "8":
              res += 8;
              break;
            case "9":
              res += 9;
              break;
            case "10":
              res += 10;
              break;
            case "ace":
              res += 11;
              break;
        }
    })
    return res;
}

//result screen functions
//REtry
const RETRY = () =>{
   
    refs.finalBack.classList.toggle('is-none');
}
//Exit
const EXIT = () =>{
    window.location.href = 'https://www.youtube.com/watch?v=2kCklVUxOsM';
}

//Exit on button
const KeyLeft = (e) =>{
    if(e.key !== "Escape"){
        return;
    }
    else{
        EXIT();
    }
}

//random picture
export const GetRandImage = (x) =>{
 return Math.floor(x.length * Math.random());
} 


//Listeners
refs.pickBtn.addEventListener('click', Pick);
refs.stopBtn.addEventListener('click', STOP);
refs.retryBtn.addEventListener('click', RETRY);
refs.exitBtn.addEventListener('click', EXIT);
window.addEventListener('keyup', KeyLeft);