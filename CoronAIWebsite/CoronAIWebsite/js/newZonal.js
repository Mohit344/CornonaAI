let newsAccor = document.getElementById('myBtn');

const request2 = new XMLHttpRequest();
var url = "http://api.covid19india.org/zones.json";

request2.open("GET", url);
request2.onload = function() {

    var data = JSON.parse(request2.responseText);


    console.log(data.zones.length);
    // console.log('show all for current location', cityLoc);
    newsAccor.addEventListener('click', (err) => {




        var vOneLS = localStorage.getItem("vOneLocalStorage");
        var demo = vOneLS
        console.log(demo);
        for (let index = 0; index < data.zones.length; index++) {
            if (demo == data.zones[index].district) {
                console.log('show the zone', data.zones[index].zone);
                console.log('show the distict', data.zones[index].districtcode)
                let zone = data.zones[index].zone
                let dist = data.zones[index].district
                let disCode = data.zones[index].districtcode
                let state = data.zones[index].state
                let stateCode = data.zones[index].statecode



                switch (zone) {
                    case "Red":
                        document.getElementById('riskImage').src = './images/red-risk.png'
                        break;
                    case "Orange":
                        document.getElementById('riskImage').src = './images/orange-risk.png'
                        break;
                    case "Green":
                        document.getElementById('riskImage').src = './images/green-risk.png'
                        break;
                    default:
                        image = "nothing";
                }


                document.getElementById('content1').innerHTML = `<h4 style='text-align:center;'>Your Zone is:<b>${zone} Zone<b></h4> <h4 style='text-align:center'>Your Location is:<b>${dist},India</b></h4>`
                document.getElementById("content1").style.color = zone;

                // document.getElementById('detail').innerHTML = 


            }
        }
    })










}





request2.send();