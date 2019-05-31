var dosleep = true;
var msDelay = 10000;
var scr = document.createElement('script');
scr.type = "text/javascript";
scr.src = chrome.extension.getURL('/inject.js');
setTimeout(function() { // solve after msDelay // delay in ms timeout to inject
    document.getElementsByTagName('head')[0].appendChild(scr);
}, msDelay);



// clickable.click();

// var test = document.getElementsByClassName("set-card-td")[0].innerHTML;
// var substr = test.substring(test.indexOf(""), test.indexOf("cardClicked") + 12);

// console.log(substr);