// //Tabs
// var tabNav = document.querySelectorAll('.tab-nav>a');
// var tab = document.getElementsByClassName('tab');

// for(var i=0;i<tab.length;i++){
//     tabNav[i].addEventListener('click',function(event){
//         event.preventDefault();
//         for(var x=0;x<tab.length;x++){
//             tab[x].classList.remove('show-tab');
//             tabNav[x].classList.remove('tab-active');
//             if(i==x){
//                 tab[x].classList.add('show-tab');
//                 tabNav[x].classList.add('tab-active');
//             }
//         }
//     })
// }

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
window.addEventListener('drop',function(event){
    event.preventDefault();
})
window.addEventListener('dragover',function(event){
    event.preventDefault();
})

//Template for house rates
var rates = [3.225,2.302,2.92,4.32,6.311,3.223,2.323];
var lenderDetails = [
    {
        lenderImage: 'images/loanlock.png',
        lenderId: '7707',
        lenderApr: '3.6',
        lenderTimeStamp: 'Mar 10',
        lenderRate: rates[0].toFixed(3),
        lenderRatePoint: '1',
        lenderRateLock: '30',
        lenderFee: '898.09',
        lenderFeePoint: '1',
        lenderFeeLock: '30',
        lenderPhone: '(887) 407 - 37123'
    },
    {
        lenderImage: 'images/merix.png',
        lenderId: '7702',
        lenderApr: '3.9',
        lenderTimeStamp: 'Apr 10',
        lenderRate: rates[1].toFixed(3),
        lenderRatePoint: '5',
        lenderRateLock: '20',
        lenderFee: '998.99',
        lenderFeePoint: '8',
        lenderFeeLock: '32',
        lenderPhone: '(887) 407 - 372343'
    },
    {
        lenderImage: 'images/cmls.png',
        lenderId: '7237',
        lenderApr: '3.3',
        lenderTimeStamp: 'Dec 10',
        lenderRate: rates[2].toFixed(3),
        lenderRatePoint: '7',
        lenderRateLock: '34',
        lenderFee: '1338.12',
        lenderFeePoint: '3',
        lenderFeeLock: '10',
        lenderPhone: '(887) 423 - 37234'
    },
    {
        lenderImage: 'images/rmg.png',
        lenderId: '7127',
        lenderApr: '3.7',
        lenderTimeStamp: 'Jan 11',
        lenderRate: rates[3].toFixed(3),
        lenderRatePoint: '6',
        lenderRateLock: '23',
        lenderFee: '1343.09',
        lenderFeePoint: '6',
        lenderFeeLock: '23',
        lenderPhone: '(887) 407 - 24523'
    },
    {
        lenderImage: 'images/equitable.png',
        lenderId: '2442',
        lenderApr: '2.6',
        lenderTimeStamp: 'Jul 10',
        lenderRate: rates[4].toFixed(3),
        lenderRatePoint: '9',
        lenderRateLock: '32',
        lenderFee: '463.09',
        lenderFeePoint: '2',
        lenderFeeLock: '32',
        lenderPhone: '(887) 407 - 134233'
    },
    {
        lenderImage: 'images/wealthline.png',
        lenderId: '2323',
        lenderApr: '4.2',
        lenderTimeStamp: 'May 10',
        lenderRate: rates[5].toFixed(3),
        lenderRatePoint: '9',
        lenderRateLock: '10',
        lenderFee: '525.09',
        lenderFeePoint: '2',
        lenderFeeLock: '64',
        lenderPhone: '(887) 4527 - 32123'
    },
    {
        lenderImage: 'images/nbc.png',
        lenderId: '8764',
        lenderApr: '5.6',
        lenderTimeStamp: 'Nov 10',
        lenderRate: rates[6].toFixed(3),
        lenderRatePoint: '7',
        lenderRateLock: '40',
        lenderFee: '356.09',
        lenderFeePoint: '3',
        lenderFeeLock: '25',
        lenderPhone: '(823) 4234 - 3343'
    }
]

var lenderList = _.template(
    '<li>'+
        '<figure class="lender"><img src="<%= lenderImage %>" alt="loan lock">'+
        '<figcaption><h4>nmslid: <span class="nmslid"><%= lenderId %></span></h4></figcaption></figure>'+
        '<div class="lender-apr"><h5 class="apr"><span><%= lenderApr %></span> apr</h5><span class="timestamp"><%= lenderTimeStamp %></span></div>'+
        '<div class="lender-rates"><h4 class="rates"><span><%= lenderRate %></span> Rate</h4><h6 class="points"><span><%= lenderRatePoint %></span> point </h6><h6 class="lock"><span><%= lenderRateLock %></span> rate lock</h6></div>'+
        '<div class="lender-estimates"><h5 class="fees"><%= lenderFee %></h5><sup> /mo</sup> <h6 class="points"><span><%= lenderFeePoint %></span> point </h6><h6><span><%= lenderFeeLock %></span> rate lock</h6></div>'+
        '<div class="faqs"><h4><%= lenderPhone %></h4><span>toll-free, no obligations</span></div>'+
        '<div class="lender-apply"><button class="btn-secondary next-btn">next</button></div>'+
    '</li>');

var resultList = document.getElementsByClassName('result-list')[0];
var lenderResult="";
for(var i =0;i<lenderDetails.length;i++){
    lenderResult += lenderList(lenderDetails[i]);
}
resultList.innerHTML += lenderResult;

//drag and drop 
var dropArea = document.getElementsByClassName('file-upload')[0];
var fileUpload = document.getElementsByClassName('input-file')[0];
var fileList = document.getElementsByClassName('files-list')[0];

fileUpload.addEventListener('change',function(event){
    event.preventDefault();
    uploadFile(fileUpload.files);
    
})
dropArea.addEventListener('dragover',function(event){
    event.preventDefault();
})
dropArea.addEventListener('drop',function(event){
    event.preventDefault();
    uploadFile(event.dataTransfer.files);
});
var listItem = _.template(
    '<li class="clear">'+
        '<svg class="icon-<%= type %>"><use href="#icon-<%= type %>"></use></svg>'+
        '<span class="file-name"><%= name %></span>'+
        '<span class="file-type"><%= type %></span>'+
        '<span class="file-size"><%= size %></span>'+
        '<span class="file-status"><%= status %></span>'+
        '<button class="remove-file"><svg class="icon-trash"><use href="#icon-trash"></use></svg></button>'+
    '</li>'
);

function uploadFile(files){
    var file = {};
    var fileType = [];    
    for(var i=0;i<files.length;i++){
        if(files[i].size<5242880){
            file[i]={
            
                name: files[i].name,
                size: Math.ceil(files[i].size/1048576)+' Mbs',
                type: type(files[i].name),
                status: 'uploaded'
            }
            if(!fileList.hasChildNodes()){
                fileList.style.display='block';
            }
            
            //list genrate using templates
            var fileListItems = "";
            for(var i=0; i<files.length;i++){
                fileListItems += listItem(file[i]);
            }
            fileList.innerHTML += fileListItems;
            removeFileEvent();
        }else{
            alert('file:'+files[i].name+'is more than 5 Mb');
        }
    } 
}

function type(name){
    return name.split('.').pop()
}
function removeFileEvent(){
    var removeBtn = Array.from(document.getElementsByClassName('remove-file'));
    console.log(removeBtn);
    removeBtn.forEach(btn => {
        btn.addEventListener('click',function(event){
            event.preventDefault();
            btn.closest('li').remove();
            if(!fileList.hasChildNodes()){
                fileList.style.display = 'none';
            }
        })
    });
}
