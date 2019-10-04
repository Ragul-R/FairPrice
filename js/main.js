//Tabs
var tabNav = document.querySelectorAll('.tab-nav>a');
var tab = document.getElementsByClassName('tab');

for(var i=0;i<tab.length;i++){
    tabNav[i].addEventListener('click',function(event){
        event.preventDefault();
        for(var x=0;x<tab.length;x++){
            tab[x].classList.remove('show-tab');
            tabNav[x].classList.remove('tab-active');
            if(i==x){
                tab[x].classList.add('show-tab');
                tabNav[x].classList.add('tab-active');
            }
        }
    })
}

//UserDropDown
var userDropToggle = document.getElementsByClassName('drop-toggle')[0];
var userDropDown = document.getElementsByClassName('user-dropdown')[0];
userDropToggle.onclick = function(event){
    userDropDown.classList.toggle('show-list')
}


//CheckBoxBorder
var formInputCheck = document.querySelectorAll('.form-main input[type="checkbox"]~label');
console.log(formInputCheck);
formInputCheck.forEach(inputCheck => {
    inputCheck.addEventListener('click',function(event){
        inputCheck.closest('div').classList.toggle('checked');
    })
});

//CircleProgressBar
const circleProgress = document.getElementsByClassName('progress-ring-circle');
for(var i=1;i<circleProgress.length;i+=2){
    var radius = circleProgress[i].r.baseVal.value;
    var circum = radius * 2 * Math.PI;
    var offset = circum - circleProgress[i].dataset.progress/100*circum;
    circleProgress[i].style.strokeDasharray = `${circum} ${circum}`;
    circleProgress[i].style.strokeDashoffset = offset;
}

//SectionNavigation
var section = document.getElementsByClassName('step');
var navBtn = Array.from(document.getElementsByClassName('next-btn'));
var prevBtn = Array.from(document.getElementsByClassName('prev-btn'));
navBtn=navBtn.concat(prevBtn);
navBtn.forEach(btn => {
    
    btn.addEventListener('click',function(event){
        step = Number(btn.closest('.step').getAttribute('data-step'));
        nextSec(step,btn);    
    })
});
function nextSec(step,btn){
    section[step].classList.remove('current-section');
    console.log(section[step],step)
    if(btn.classList.contains('next-btn')){
        section[step+1].classList.add('current-section');
    }
    else if(btn.classList.contains('prev-btn')){
        section[step-1].classList.add('current-section');
    }
}


//SideNavbar
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

//Notifications
var notificationBtn = document.querySelector('.notifications>button');
var notificationList = document.getElementsByClassName('notifications-list')[0];

notificationBtn.addEventListener('mouseover',function(event){
    notificationList.classList.add('show-notifications');
})
notificationList.addEventListener('mouseleave',function(event){
    setTimeout(() => {
        notificationList.classList.remove('show-notifications');
    }, 500);
})
//Notifications Read
var notifyItem = document.querySelectorAll('.notifications-list a');
notifyItem.forEach(item => {
    item.addEventListener('click',function(event){
        item.closest('li').classList.add('status-read');
    })
});

//Remove popups
window.addEventListener('click',function(event){
    var target = event.target;
    if( target != userDropDown && target != userDropToggle && !target.classList.contains('show-list')){
        userDropDown.classList.remove('show-list');
    }
})

