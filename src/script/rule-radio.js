import { refs } from "./variables";

const RULE = () => {
   setTimeout(()=>{
    refs.ruleList.classList.toggle('is-none');
   },200)
}


refs.ruleBtn.addEventListener('click', RULE);
const butt = document.querySelectorAll('button');
butt.forEach(element => {
   element.addEventListener('click', (Mus) => {
      refs.klik.play();
      refs.klik.volume = 0.4;
   })
});

refs.pointBtn.addEventListener('click', (Show) => {
   refs.cardList.classList.toggle('is-none');
})