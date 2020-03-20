// Animated Thermometer
function tempLoad () {
    let temp = document.getElementById('temp');
    temp.innerHTML = "&#xf2cb;";
    
    setTimeout(function(){
      temp.innerHTML = "&#xf2ca;";
    }, 1000);
    setTimeout(function(){
      temp.innerHTML = "&#xf2c9;";
    }, 2000);
    setTimeout(function(){
      temp.innerHTML = "&#xf2c8;";
    }, 3000);
    setTimeout(function(){
      temp.innerHTML = "&#xf2c7;";
    }, 4000);
    
  }
  
  tempLoad();
  
  setInterval(tempLoad, 5000);