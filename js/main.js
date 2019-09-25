var tabNav = document.querySelectorAll('.tab-nav>a');
var tab = document.getElementsByClassName('tab');

for(let i=0;i<tab.length;i++){
    tabNav[i].addEventListener('click',function(event){
        event.preventDefault();
        for(let x=0;x<tab.length;x++){
            tab[x].classList.remove('show-tab');
            tabNav[x].classList.remove('tab-active');
            if(i==x){
                tab[x].classList.add('show-tab');
                tabNav[x].classList.add('tab-active');
            }
        }
    })
}

var navToggle = document.querySelector('.slide-nav>button');
var slideNav = document.getElementsByClassName('slide-nav')[0];

navToggle.onclick = function(event){
    event.preventDefault();
    slideNav.classList.add('show-nav')
}
var closeNav = document.getElementsByClassName('close-nav')[0];
closeNav.onclick = function(event){
    event.preventDefault();
    slideNav.classList.remove('show-nav');
}

var userDropToggle = document.getElementsByClassName('drop-toggle')[0];
var userDropDown = document.getElementsByClassName('user-dropdown')[0];
userDropToggle.onclick = function(event){
    userDropDown.classList.toggle('show-list')
}

var formInputCheck = document.querySelectorAll('.form-main input[type="checkbox"]~label');
for(let i = 0; i<formInputCheck.length;i++){
    formInputCheck[i].onclick = function(event){
        let formInput = formInputCheck[i].closest('div');
        formInput.classList.toggle('checked');
    } 
}

const circleProgress = document.getElementsByClassName('progress-ring-circle');
for(let i=1;i<circleProgress.length;i+=2){
    var radius = circleProgress[i].r.baseVal.value;
    var circum = radius * 2 * Math.PI;
    var offset = circum - circleProgress[i].dataset.progress/100*circum;
    circleProgress[i].style.strokeDasharray = `${circum} ${circum}`;
    circleProgress[i].style.strokeDashoffset = offset;
}
var section = document.getElementsByTagName('section');
var btn = document.getElementsByTagName('button');

for(let i=0;i<btn.length;i++){
    btn[i].onclick = function(event){
        let currentSec = btn[i].closest('section');
        let currentStep = Number(currentSec.dataset.step);
        section[currentStep].classList.remove('current-section');
    
        console.log(currentStep)
        if(btn[i].classList.contains('btn-primary')){
            nextSec(currentStep);
        }else if(btn[i].classList.contains('btn-default')){
            prevSec(currentStep);
        }else if(btn[i].classList.contains('btn-secondary')){
            nextSec(currentStep);
        }
    }
}

function nextSec(step){
    section[step+1].classList.add('current-section');
}
function prevSec(step){
    section[step-1].classList.add('current-section');
}