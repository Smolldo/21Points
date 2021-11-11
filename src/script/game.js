import list from '../template/list.hbs';
import card from '../template/cards.json';
import { refs } from './variables';
import playList from '../template/player-card.hbs';

export const markup = card.map((e) => list(e));
const markupPlayer = card.map((el) => playList(el));

//card picker function
const Pick = () => {
    let c =  document.createElement("li");
    c.classList.add("card_item");
    c.classList.add("player_card_item");
    c.innerHTML = `${markupPlayer[GetRandImage(markupPlayer)]}`;
    if(refs.playerCards.childElementCount !== 3){
        refs.playerCards.appendChild(c)
    }
    else{
        refs.pickBtn.setAttribute("disable", "true")
    }
};

//Stop picking. Results
const STOP = () => {

    let comPoi = document.querySelectorAll('.comp_card');
    let plaPoi = document.querySelectorAll('.player_card');


    refs.playPoint.textContent = Switcher(plaPoi);
    refs.compPoint.textContent = Switcher(comPoi);

    if(Switcher(plaPoi) > Switcher(comPoi)){
        alert("+")
    }
    
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

export const GetRandImage = (x) =>{
 return Math.floor(x.length * Math.random());
} 

refs.pickBtn.addEventListener('click', Pick);
refs.stopBtn.addEventListener('click', STOP)