const fs = require("fs");
const ytdl = require("ytdl-core");


const URL = "https://www.youtube.com/watch?v=b0pUG5rFMms&ab_channel=AbhishekJaiswal";
const  info= async()=>{ 
  const response= await ytdl.getInfo(URL);
  console.log(response,"response data<<");
  
};
info();

const videoData = ytdl(URL, { filter: (format) => format.container === "mp4"});
videoData.pipe(fs.createWriteStream("VideoSong.mp4"));