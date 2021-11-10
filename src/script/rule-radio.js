import { refs } from "./variables";

const RULE = () => {
   setTimeout(()=>{
    refs.ruleList.classList.toggle('is-none');
   },200)
}

refs.ruleBtn.addEventListener('click', RULE);