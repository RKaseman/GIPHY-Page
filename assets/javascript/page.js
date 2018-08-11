
var giphyAPI = "894INoKSXfEqlodBWQxaKvj35Cjy50VM";
var topics = [
    "space",
    "video+games",
    "hockey",
    "women"
    ];
    console.log("topics : " + topics);

$("button").on("click", function() {
    for (i = 0; i < topics.length; i++) {
        // if (topics[i].includes("+")) {
        //     topics[i].replace(/\W/, " t ");
        // }
        $("#buttons").append($("<button class='btnGen' data-topic=" + topics[i] + ">").text(topics[i]));
        console.log("topics[i] : " + topics[i]);

        $(".btnGen").attr("data-topic");
        var searchTopics = $(".btnGen").attr("data-topic");
        console.log("searchTopics : " + searchTopics);

        var btnURLs = "http://api.giphy.com/v1/gifs/search?q=" + topics[i] + "&api_key=" + giphyAPI + "&limit=5";
    };
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=" + giphyAPI + "&limit=5",
        method: "GET"
    }).then(function(response) {
        console.log(response.data);

        var results = response.data;
        console.log(response.data[0].images);

        for (j = 0; j < results.length; j++) {
            // $("#gifs").append(btnURLs);
        }

    });
    $("#ownDamnGif").append("<form id='bigForm'><p><input id='bigField type='text' name='search' value='Get your own damn gif'></p><p><input id='btn' type='submit' value='Submit'></p></form>");
});

