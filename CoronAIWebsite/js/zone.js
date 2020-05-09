// console.log('this is index. js file ');


// let source = 'nbc-news';
// let apiKey = '781451821df848b09942e82a1567110d';

// let newsAccordion = document.getElementById('demo');

// const xhr = new XMLHttpRequest();
// // xhr.open('GET', `http://ip-api.com/json`, true)
// xhr.open('GET', `https://api.covid19india.org/zones.json`, true)
// // console.log(apiKey);

// xhr.onload = function () {

//     if (this.status === 200) {
//         let json = JSON.parse(this.responseText);

//         newsAccordion.addEventListener('click', (err) => {

//             console.log("Show", json);
//             console.log('show filyter', json.zones[0].district);

//             // console.log("Show");
//             // console.log("Show", zoneJson.district);

//         })




//         //         console.log(articles);
//         //         let newsHtnl = '';
//         //         articles.forEach(function (element, index) {




//         //             let news = `  <div class="card">
//         //       <div class="card-header" id="heading ${index}">
//         //       <h2 class="mb-0">
//         //         <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
//         //           <b>Breaking news ${index + 1}:</b>${element["title"]}
//         //         </button>
//         //       </h2>
//         //     </div>

//         //     <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
//         //       <div class="card-body">
//         //       ${element['content']}.<a href="${element['url']}" target='_blank'>Read more</a>
//         //       </div>
//         //     </div>
//         //   </div>`

//         //             newsHtnl += news;

//         //         });
//         //         newsAccordion.innerHTML = newsHtnl

//     }
//     else {

//         console.log('some error ocuured');

//     }



// }
// xhr.send()
let newsAccordion = document.getElementById('demo');
const request = new XMLHttpRequest();
var index = ["ip-api.com/json", "api.covid19india.org/zones.json"];
let requests = new Array(index.length);
for (let i = 0; i < index.length; i++) {
    var url = "http://" + index[i];
    requests[i] = new XMLHttpRequest();
    requests[i].open("GET", url);
    requests[i].onload = function () {

        var data = JSON.parse(requests[i].responseText);

        var cityLoc = data.city
        // newsAccordion.addEventListener('click', (err) => {
        // console.log('show all data', data);
        // console.log('show all for current location', data.city);
        // console.log(data.zones.length);
        // var cityLoc = data.city
        // console.log('', cityLoc);



        if (i == 0) {
            // console.log('show all for current location', data.city);

            console.log('show all for current location', cityLoc);


        }

        else {
            console.log('show all for current location', cityLoc);

            var zonalData = data.zones
            // console.log('xonal data', zonalData);

            console.log('zone data ', data.zones.length);
            // console.log('show all  distictdata', (data.zones[0].district));



            for (let ind = 0; ind < data.zones.length; ind++) {
                if (cityLoc != zonalData[ind].district) {
                    console.log('data result', zonalData[ind].zone);

                }
            }
        }

        // })

    }
    requests[i].send();
}







