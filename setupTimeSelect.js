
    var selMin = document.getElementById("minuteSelect");
    var selSec = document.getElementById("secondSelect");
    for(var x=0; x<61; x++){
      var option = document.createElement("option");
      //console.log(option);
      option.value = x;
      option.appendChild(document.createTextNode(x));
      selMin.appendChild(option);
      var option = document.createElement("option");
      //console.log(option);
      option.value = x;
      option.appendChild(document.createTextNode(x));
      selSec.appendChild(option);
    }
   