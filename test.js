const fs = require("fs");
let videos = [];
let images = [];
let json = {"videos":videos,"images":images};

fs.readFile("videos.txt", function(err, data) {
    if(err){
        bot.sendMessage(chatid,"Something went wrong!");
        throw err;
    }else{
        videos = data.toString().split("\n").filter(Boolean);
        console.log(videos)
        json.videos = videos;
    }
})