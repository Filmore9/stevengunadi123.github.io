navigator.serviceWorker.register('/sw.js');

var deferredPrompt;
window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});

const urlTrending = "https://covid-19-news.p.rapidapi.com/v1/covid?lang=en&q=covid";
fetch(urlTrending,{
    "method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-news.p.rapidapi.com",
		"x-rapidapi-key": "05b57a06b0mshfdc1d0c850c9695p1c89f9jsnbfb63ec70d9d"
	}
})
.then(r => r.json())
.then(function(d){
    for(var i = 0; i<12;i++){

             document.getElementById("newsResults").innerHTML += "<div class='col l4 m6 s12'><div class='card-content'><span class='card-title activator'></span><h6 class='truncate'>Title: <a href="+d.articles[i].link+" title="+d.articles[i].title+">"+d.articles[i].title+"</a></h6><p><b>Author</b>:" +d.articles[i].author+" </p><p><b>News source</b>:"+d.articles[i].topic+" </p><p><b>Published</b>:" +d.articles[i].published_date+ "</p></div><div class='card-reveal'><span class='card-title'></span><p><b>Description</b>:" +d.articles[i].summary+"</p></div><div class='card-action'><a href="+d.articles[i].link+" target='_blank' class='btn'>Read More</a></div></div></div>";
    }
})


