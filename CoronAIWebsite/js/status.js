let newsAccordion = document.getElementById('newsAccordion');

// const xhr = new XMLHttpRequest();
const xhr = new XMLHttpRequest();
xhr.open('GET', `https://api.covid19api.com/summary`, true)


xhr.onload = function () {




    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let globl = json.Global;
        let articles = json.Countries;

        console.log(globl);


        console.log(articles);
        let newsHtnl = '';

        let elementDiv = document.createElement('div');
        let text = document.createTextNode(`NewConfirmed cases:${globl.NewConfirmed}    TotalConfirmed:${globl.TotalConfirmed}    NewDeaths:${globl.NewDeaths}   TotalDeaths:${globl.TotalDeaths} NewRecovered:${globl.NewRecovered} TotalRecovered:${globl.TotalRecovered}`);
        elementDiv.appendChild(text)
        elementDiv.className = 'parentDiv';
        elementDiv.id = 'createDiv';
        elementDiv.setAttribute('title', 'mytitle');

        let div = document.querySelector('#mydiv');
        div.appendChild(elementDiv);
        articles.forEach(function (element, index) {



            let news =
                `<tbody><tr>  <td style='width:16%'> ${element['Country']} </td> <td>  ${element['CountryCode']}  </td> <td style='width:18%'> ${element['Slug']}   </td> <td> ${element['NewConfirmed']} </td> <td> ${element['TotalConfirmed']} </td>  </td><td> ${element['NewDeaths']}</td><td> ${element['TotalDeaths']} </td><td>  ${element['NewRecovered']} </td><td>${element['TotalRecovered']}</td><td td style='width:10%'>  ${element['Date']} </td></tr> </tbody>`;





            newsHtnl += news;

        });
        newsAccordion.innerHTML = newsHtnl

    }
    else {

        console.log('some error ocuured');

    }



}


xhr.send()



