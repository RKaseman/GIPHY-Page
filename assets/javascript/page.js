
var giphyAPI = "894INoKSXfEqlodBWQxaKvj35Cjy50VM";
var topics = [
    "space",
    "video+games",
    "hockey"
    ];
    console.log("topics : " + topics);

// var topicsList = topics.replace(/+/gi, " ");

$("button").on("click", function() {
    for (i = 0; i < topics.length; i++) {
        if (topics[i].includes("+")) {
            topics[i].replace(/"+"/g, " t ");
        }
        $("#buttons").append($("<button>").text(topics[i]));
        console.log("topics[i] : " + topics[i]);
    };
    $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?q=" + topics + "&api_key=" + giphyAPI + "&limit=3",
        method: "GET"
    }).then(function(response) {
        var results = response.data;
        console.log(response.data);
        console.log(response.data[0].images);
        console.log(response.data[1].images);
        console.log(response.data[2].images);

    });
});

