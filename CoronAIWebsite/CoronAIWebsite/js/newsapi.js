console.log("this is index. js file ");

let source = "coronavirus";
let apiKey = "6c3ae1f049844dda9b4713777b1574b0";

let newsApi = document.getElementById("newsApi");

const xhr = new XMLHttpRequest();
// xhr.open('GET', `https://newsapi.org/v2/top-headlines?q=${source}&apiKey=${apiKey}`, true)
xhr.open(
    "GET",
    `http://newsapi.org/v2/top-headlines?country=in&q=coronavirus&apiKey=6c3ae1f049844dda9b4713777b1574b0`,
    true
);

//newsapi.org/v2/top-headlines?q=${source}&apiKey=6c3ae1f049844dda9b4713777b1574b0
https: console.log(apiKey);

xhr.onload = function() {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);

        let articles = json.articles.slice(1, 4);

        // let newsImage = json.urlToImage
        console.log(articles);
        let newsHtnl = "";
        articles.forEach(function(element, index) {
            //             let news = `  <div class="card">
            //       <div class="card-header" id="heading ${index}">
            //       <h2 class="mb-0">
            //         <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse${index}" aria-expanded="true" aria-controls="collapse${index}">
            //           <b>Breaking news ${index + 1}:</b>${element["title"]}
            //         </button>
            //       </h2>
            //     </div>

            //     <div id="collapse${index}" class="collapse" aria-labelledby="heading${index}" data-parent="#newsAccordion">
            //       <div class="card-body">
            //       ${element['content']}.<a href="${element['url']}" target='_blank'>Read more</a>
            //       </div>
            //     </div>
            //   </div>`
            // if (element['urlToImage'] === null) {
            //     continue;
            // }

            // let news = `

            // <div class="card" style="width:23rem;height:470px;float:left;style="border: 5px 5px;"">

            //   <img src="${element['urlToImage']}" style="height: 200px;"  class="card-img-top" alt="...">
            //  <div class="top-left"><p><b>${element['title']}</b></p></div>
            //   <div class="card-body">
            //     <p class="card-text">${element['content']}
            //     <a href="${element['url']}" target='_blank'>Read more</a></p>
            //   </div>

            // </div>`

            let news = `  <div class="owl-item" style="width: 365px; margin-right:12px;">
                <div class="item">
                    <div class="protect_box text_align_center">
                        <div class="desktop">
                            <i><img src="${
                              element["urlToImage"]
                            }" style="height: 200px;  alt="#"></i>
                          <h5><b> ${element["title"].slice(0, -12)}</b> </h5>
                            <span>  <p class="card-text">${element[
                              "content"
                            ].slice(-9, 0)}
                <a href="${
                  element["url"]
                }" target='_blank'>Read more</a></p> </span>
                        </div>

                    </div>
                </div>
            </div>`;

            // let news = `<div class="item">
            //             <div class="protect_box text_align_center">
            //                <div class="desktop">
            //                   <i><img src="${element['urlToImage']}" alt="#" /></i>
            //                   <h3> ${element['title']}</h3>
            //                   <span> <a href="${element['url']}" target='_blank'>Read more</a></p> </span>
            //                </div>

            //             </div></div>`

            //             let moreNews = `<p><a href="https://economictimes.indiatimes.com/news/politics-and-nation/coronavirus-cases-in-india-live-news-latest-updates-may6/liveblog/75566143.cms">Read More</a>
            // </p>`

            newsHtnl += news;
        });

        newsApi.innerHTML = newsHtnl;
    } else {
        console.log("some error ocuured");
    }
};
xhr.send();