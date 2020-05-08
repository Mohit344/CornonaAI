console.log('this is index. js file ');

let newsAccordion = document.getElementById('demo');
const request = new XMLHttpRequest();

var url = "http://ip-api.com/json";
request.open("GET", url);
request.onload = function () {
    var data = JSON.parse(request.responseText);
    var cityLoc = data.city
    var demo;
    localStorage.setItem("vOneLocalStorage", cityLoc);



    // console.log('show all for current location', cityLoc);

}



request.send();



