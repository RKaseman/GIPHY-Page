
var giphyAPI = "894INoKSXfEqlodBWQxaKvj35Cjy50VM";
var topicArr = [
    "space",
    "video+games",
    "hockey",
    "women"
    ];
    console.log("topicArr : " + topicArr);
    console.log("----onLoad----");

$("#begin").on("click", function() {
    $("#begin").hide();

    for (i = 0; i < topicArr.length; i++) {
        // if (topicArr[i].includes("+")) {
        //     topicArr[i].replace(/\W/, " t ");
        // }
        $("#buttons").append($("<button class='btnGen' data-topic="+topicArr[i]+">").text(topicArr[i]));
        console.log(".this '#begin' : " + this);
        console.log("topicArr[i] : " + topicArr[i]);
        console.log("----1----");
    }; // end for i

    $(".btnGen").on("click", function() {
        $("#gifs").empty();
        var dataTopicTest = $(this).attr("data-topic")
        console.log("dataTopicTest : " + dataTopicTest);
        var btnURLs = "http://api.giphy.com/v1/gifs/search?q="+dataTopicTest+"&api_key="+giphyAPI+"&limit=5";
        console.log("this '.btnGen' : " + this);
        console.log("btnURLs : " + btnURLs);
        console.log("----2----");

    $.ajax({
        url: btnURLs,
        method: "GET"
    }) // end $.ajax
        .then(function(response) {
            console.log(response.data);
            for (j = 0; j < response.data.length; j++) {
                console.log("response.data.length = " + response.data.length);
                var p = $("<p>").text("Rating Test " + response.data[j].rating);
                var topicGif = $("<img>");
                topicGif.attr("src", response.data[j].images.fixed_height.url);
                $("#gifs").append(topicGif);
                $("#gifs").append(p);
            }; // end for j
        }); //end .then
    }); // end .btnGen click

    $("#ownDamnGif").append("<form id='bigForm'><div><input id='bigField type='text' name='search' value='Get your own damn gif'></div><div><input id='btn' type='submit' value='Submit'></div></form>");

});

