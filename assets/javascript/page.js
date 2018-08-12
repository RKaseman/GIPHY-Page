
var giphyAPI = "894INoKSXfEqlodBWQxaKvj35Cjy50VM";
var topics = [
    "space",
    "video+games",
    "hockey",
    "women"
    ];
    console.log("topics : " + topics);

$("button").on("click", function() {
    $("#start").hide();
    for (i = 0; i < topics.length; i++) {
        // if (topics[i].includes("+")) {
        //     topics[i].replace(/\W/, " t ");
        // }
        $("#buttons").append($("<button class='btnGen' data-topic=" + topics[i] + ">").text(topics[i]));
        console.log("topics[i] : " + topics[i]);

    var topic = $(".btnGen").attr("data-topic");
    console.log(topic);

        // $(".btnGen").attr("data-topic");
        // var searchTopics = $(".btnGen").attr("data-topic");
        // console.log("searchTopics : " + searchTopics);

        // var btnURLs = "http://api.giphy.com/v1/gifs/search?q=" + searchTopics + "&api_key=" + giphyAPI + "&limit=5",
    };

    var btnURLs = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=" + giphyAPI + "&limit=5";

    $.ajax({
        url: btnURLs,
        method: "GET"
    }).then(function(response) {
        console.log(response.data);

        var results = response.data;
        // console.log(response.data[0].images);

        for (j = 0; j < results.length; j++) {
            // var ratingDisplay = results[i].rating;
            var p = $("<p>").text("Rating Test " + results[i].rating);
            var topicGif = $("<img>");
            topicGif.attr("src", results[i].images.fixed_height.url);
            $("#gifs").append(topicGif);
            $("#gifs").append(p);
        }

    });
    $("#ownDamnGif").append("<form id='bigForm'><p><input id='bigField type='text' name='search' value='Get your own damn gif'></p><p><input id='btn' type='submit' value='Submit'></p></form>");
});

