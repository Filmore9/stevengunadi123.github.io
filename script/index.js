const urlTrending = "https://myallies-breaking-news-v1.p.rapidapi.com/GetTopNews";
fetch(urlTrending,{
    "method": "GET",
	"headers": {
		"x-rapidapi-host": "myallies-breaking-news-v1.p.rapidapi.com",
		"x-rapidapi-key": "05b57a06b0mshfdc1d0c850c9695p1c89f9jsnbfb63ec70d9d"
	}
})
.then(r => r.json())
.then(function(d){
    console.log(response);
    for(var i = 0; i<12;i++){

             document.getElementById("newsResults").innerHTML += "<div class='col l4 m6 s12'><div class='card medium hoverable'><div class='card-image'><img src="+d.articles[i].urlToImage+" class='responsive-img' alt="+d.articles[i].title+"></div><div class='card-content'><span class='card-title activator'><i class='material-icons right'>more_vert</i></span><h6 class='truncate'>Title: <a href="+d.articles[i].url+" title="+d.articles[i].title+">"+d.articles[i].title+"</a></h6><p><b>Author</b>:" +d.articles[i].author+" </p><p><b>News source</b>:"+d.articles[i].source.name+" </p><p><b>Published</b>:" +d.articles[i].publishedAt+ "</p></div><div class='card-reveal'><span class='card-title'><i class='material-icons right'>close</i></span><p><b>Description</b>:" +d.articles[i].description+"</p></div><div class='card-action'><a href="+d.articles[i].url+" target='_blank' class='btn'>Read More</a></div></div></div>";
    }
})
.catch(err => {
	console.log(err);
});
