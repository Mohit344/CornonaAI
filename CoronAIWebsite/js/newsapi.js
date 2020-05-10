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

xhr.onload = function () {
  if (this.status === 200) {
    let json = JSON.parse(this.responseText);

    let articles = json.articles;

    let articlesArr = articles.slice(0, 3);
    let newsHtnl = "";
    articlesArr.forEach(function (element, index) {
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
                            ].slice(-21, 0)}
                <a href="${
                  element["url"]
                }" target='_blank'>Read more</a></p> </span>
                        </div>

                    </div>
                </div>
            </div>`;

      newsHtnl += news;
    });

    newsApi.innerHTML = newsHtnl;
  } else {
    console.log("some error ocuured");
  }
};
xhr.send();
