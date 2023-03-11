
var playerName=["David de Gea","Martin Dúbravka","Lisandro Martínez","Raphaël Varane","Luke Shaw","Tyrell Malacia","Casemiro","Bruno Fernandes"," Jadon Sancho","Marcus Rashford","Cristiano Ronaldo"]
var links=["https://upload.wikimedia.org/wikipedia/commons/6/68/David_de_Gea_2017.jpg"
            ,"https://www.independent.ie/incoming/48e58/39053650.ece/AUTOCROP/h1060/SOCCER-Newcast.jpg"
            ,"https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Lisandro_Martinez_2022.jpg/640px-Lisandro_Martinez_2022.jpg"
            ,"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Rapha%C3%ABl_Varane_2018_%28cropped%29.jpg/220px-Rapha%C3%ABl_Varane_2018_%28cropped%29.jpg"
            ,"https://i2-prod.manchestereveningnews.co.uk/sport/football/article24512181.ece/ALTERNATES/s810/0_GettyImages-1241917241.jpg"
            ,"https://cdn.vox-cdn.com/thumbor/rvkjI5TqhF3_EnYU47ApUxy37l4=/0x173:4236x3133/920x613/filters:focal(1865x528:2615x1278):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/71119876/1241858880.0.jpg"
            ,"https://i2-prod.manchestereveningnews.co.uk/sport/football/article25386344.ece/ALTERNATES/s810/0_GettyImages-1244157347.jpg"
            ,"https://i2-prod.manchestereveningnews.co.uk/incoming/article25438211.ece/ALTERNATES/s810/0_bruno.jpg"
            ,"https://i2-prod.mirror.co.uk/sport/football/news/article28324338.ece/ALTERNATES/s615b/1_GettyImages-1435679989.jpg"
            ,"https://i2-prod.manchestereveningnews.co.uk/incoming/article25386199.ece/ALTERNATES/s810/0_GettyImages-1244276113.jpg"
            ,"https://i2-prod.manchestereveningnews.co.uk/incoming/article25373858.ece/ALTERNATES/s810/2_GettyImages-1437086699.jpg"

]

$("button").click(function(){
    $("#imgDiv").empty();
    let index=Math.floor(Math.random() * playerName.length) + 1;
    $("div").addClass("name")
    $("#pText").addClass("play")
    $("#pText").text(playerName[index])
    
    $('#imgDiv').append('<img src="'+links[index]+'" width="40%" />');

})

