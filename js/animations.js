const INCREASE_NUMBER_ANIMATION_SPEED = 50;
let animationInited = false;

function increaseNumberAnimationStep(i, element, endNubmer) {
    if (i <= endNubmer) {
        if (i === endNubmer) {
            element.innerText = i + '+'
        }
        else {
            element.innerText = i
        }
        i += 100    
    setTimeout(increaseNumberAnimationStep, INCREASE_NUMBER_ANIMATION_SPEED, i, element, endNubmer)   
    }
}

function initIncreaseNumberAnimationStep(){
    element = document.querySelector('.features__clients-count')
    increaseNumberAnimationStep(0, element, 5000)
}




function updateScroll() {
    header = document.querySelector('header')

    if (window.scrollY > 0) {
        header.classList.add('header__scrolled')
    }
    else {
        header.classList.remove('header__scrolled')
    }
    console.log('Произошло событие scroll. Текущая позиция скролла: ' + window.scrollY);

    let countElementPosition = document.querySelector('.features__clients-count').offsetTop;
    let windowBottomPosition = window.scrollY + window.innerHeight;

    if ((windowBottomPosition >= countElementPosition) && !animationInited) {
        animationInited = true
        initIncreaseNumberAnimationStep()
        

    }

}
  
  // Назначение обработчика события scroll для window
  window.addEventListener('scroll', updateScroll);