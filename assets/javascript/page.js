
$(document).ready(function () {

var giphyAPI = "894INoKSXfEqlodBWQxaKvj35Cjy50VM";
var topicArr = [
    "women+space",
    "women+hockey",
    "women+celebrities",
    "women+video+games",
];
    console.log("topicArr set : " + topicArr);

$("#begin").on("click", function () {
    $("#begin").hide();
    $("h3").hide();

    userBtn();
    function userBtn() {
        $("#buttons").empty();
        for (i = 0; i < topicArr.length; i++) {
            // if (topicArr[i].includes("[+]")) {
                // topicArr[i].replace(/\+/g, " t ");
                // topicArr[i].replace(/\&#x2B;/g, " t ");
                // .replace(/[+]/g, " ");
            // }

// 
    // var newBtn = topicArr[i].split("+").join(" ");
// 

            $("#buttons").append($("<button class='btnGen' data-topic=" + topicArr[i] + ">").text(topicArr[i]));
            console.log("topicArr[i] : " + topicArr[i]);
        }; // end for i

        $(".btnGen").on("click", function () {
            $("#gifs").empty();
            var dataTopic = $(this).attr("data-topic")
            console.log("dataTopic : " + dataTopic);
            var btnURLs = "https://api.giphy.com/v1/gifs/search?q=" + dataTopic + "&api_key=" + giphyAPI + "&limit=5&offset=5";
            console.log("btnURLs : " + btnURLs);

        $.ajax({
            url: btnURLs,
            method: "GET"
        }) // end $.ajax
            .then(function (response) {
                console.log(response.data);
                for (j = 0; j < response.data.length; j++) {
                    console.log("response.data.length = " + response.data.length);
                    var p = $("#gifs").append("<p>Rated " + response.data[j].rating + "</p>");
                    var topicGif = $("<img>");
                    topicGif.attr("src", response.data[j].images.fixed_height_still.url);
                    topicGif.attr("data-still", response.data[j].images.fixed_height_still.url);
                    topicGif.attr("data-animate", response.data[j].images.fixed_height.url);
                    topicGif.attr("data-state", "still");
                    topicGif.attr("class", "gif");
                    $("#gifs").append(p, topicGif);
                }; // end for j

                $(".gif").on("click", function () {
                    console.log("this : " + this);
                    var dataState = $(this).attr("data-state");
                    if (dataState === "still") {
                        $(this).attr("src", $(this).attr("data-animate"));
                        $(this).attr("data-state", "animate");
                    }
                        else {
                            $(this).attr("src", $(this).attr("data-still"));
                            $(this).attr("data-state", "still");
                        }
                }); // end animation switch state
            }); //end .then
        }); // end .btnGen click
    }; // end userBtn
        $("#ownDamnGif").append(
            "<form id='wholeForm' action='#' method='post'>" 
                + "<div>" 
                    + "<label for='search'>Search GIPHY</label>" 
                + "</div>" 
                + "<div>" 
                    + "<input type='text' id='bigField' name='search' value='' placeholder='and get your own damn gif'>" 
                + "</div>" 
                + "<div>" 
                    + "<input id='btn' type='submit' value='Submit'>" 
                + "</div>" 
            + "</form>");

        $("#btn").on("click", function(event) {
            var searchValue = document.querySelector("#bigField").value;
            console.log("searchValue : " + searchValue);
            topicArr.push("women+" + searchValue);
            console.log("topicArr .push : " + topicArr);
            event.preventDefault();
            $("#bigField").text("value", "");
            // $("input[type='text']").val("");
            userBtn();
        });
    });

});

