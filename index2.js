const showNews = document.getElementById('showNews');
const apiKey="bef1f7fb60eb4bcc8f8483e300c02c81"
const url = 'https://newsapi.org/v2/everything?' +
          'q=manchester-united&' +
          'from=2022-08-14&' +
          'language=en&'+
          'sortBy=popularity&' +
          'apiKey=bef1f7fb60eb4bcc8f8483e300c02c81';

var newsDataArray = [];

document.addEventListener("DOMContentLoaded", function() {
    fetchNews();
  });

const fetchNews= async () => {

    const response = await fetch(url);

    if (response.status>=200 && response.status<300){
        const myJson= await response.json();
        console.log(myJson);
        newsDataArray = myJson.articles;

    }
    else{
        console.log(response.status, response.statusText);
    }

    displayNews();

}



function displayNews(){
    

    showNews.innerHTML="";
    if(newsDataArray.length==0){
        showNews.innerHTML="no data found";
        console.log("no data found");
        return;
    }

    newsDataArray.forEach(news=>{

        var date=news.publishedAt.split("T");

        var col=document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2";
        var card=document.createElement('div');
        card.className = "p-2";

        var image = document.createElement('img');
        image.setAttribute("height","matchparnt");
        image.setAttribute("width","100%");   
        image.src = news.urlToImage;

        var cardBody = document.createElement('div');
        var newsHeading = document.createElement('h5');
        newsHeading.className= "card-title";
        newsHeading.innerHTML = news.title;

        var dateHeading = document.createElement('h6');
        dateHeading.className= "text-primary";
        dateHeading.innerHTML = date[0];
        var description = document.createElement('p');
        description.className= "text-muted";
        description.innerHTML = news.description;

        var link = document.createElement('a');
        link.className="btn btn-dark";
        link.setAttribute("target", "_blank");
        link.href=news.url;
        link.innerHTML="Read More";

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(description);
        cardBody.appendChild(link);
        
        card.appendChild(image);
        card.appendChild(cardBody);

        col.appendChild(card)

        showNews.appendChild(col);

    })


}