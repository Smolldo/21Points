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

//radio 

const PlayMusic = () => {
   refs.t1[2].play();
   refs.t1[2].volume = 0.2;
}

refs.play.addEventListener('click', PlayMusic);

refs.stop.addEventListener('click', (StopMusic) =>{
   refs.t1[2].pause();
})

