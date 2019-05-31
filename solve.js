
var msDelay = 0;
var sUsername;
var submitForUser;
var solveForUser;
var userSec;
var userMin;

chrome.storage.sync.get({
    solveForUser: true,
    submitForUser: false,
    username: "",
    time: {
        min: 0,
        sec: 0
    }
}, function(items) {
    console.log(items);
    sUsername = items.username;
    solveForUser = items.solveForUser;
    submitForUser = items.submitForUser;
    userMin = items.time.min;
    userSec = items.time.sec;
    /////////////////////////////////
    if (solveForUser === true) { // 
        // alert(solveForUser);
     
        if(userMin===null||userSec===null){
            userSec =0;
            userMin =0;
        }
         if (userMin && userSec === 0) {
     
         } else {
             var minsec = userMin *60;
             userSec = parseInt(userSec,10);
             minsec = parseInt(minsec,10);
             userSec += minsec;
             console.log(userSec);
             msDelay = userSec * 1000;
             console.log(msDelay/1000  );
             
         }
         
         var scr = document.createElement('script');
         scr.type = "text/javascript";
         scr.src = chrome.extension.getURL('/inject.js');
         setTimeout(function () { // solve after msDelay // delay in ms timeout to inject
             document.getElementsByTagName('head')[0].appendChild(scr);
         }, msDelay);
     
     }
});





// clickable.click();

// var test = document.getElementsByClassName("set-card-td")[0].innerHTML;
// var substr = test.substring(test.indexOf(""), test.indexOf("cardClicked") + 12);

// console.log(substr);