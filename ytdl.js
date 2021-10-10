const ytdl = require('ytdl-core');
const fetch = require('node-fetch');

function fancyTimeFormat(duration)
{   
    // Hours, minutes and seconds
    var hrs = Math.floor(duration/3600);
    var mins = Math.floor((duration % 3600) / 60);
    var secs = Math.floor(duration%60);

    // Output like "1:01" or "4:03:59" or "123:03:59"
    var ret = "";

    if (hrs > 0) {
        ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
    }

    ret += "" + mins + ":" + (secs < 10 ? "0" : "");
    ret += "" + secs;

    return ret;
} 
const getInfo = async function(url,callback) {
    const videoId = await ytdl.getURLVideoID(url);
    const info = await ytdl.getInfo(videoId);
    const duration = fancyTimeFormat(info.videoDetails.lengthSeconds);
    const formats = [];
    info.formats.forEach(format => {
        formats.push({
            itag : format.itag,
            mimeType : format.mimeType,
            quality : format.qualityLabel,
            url : format.url,
            video : format.hasVideo,
            audio : format.hasAudio,
            audioBitrate : format.audioBitrate,
        })
    });
    const data = {
        title : info.videoDetails.title,
        duration,
        thumb : info.videoDetails.thumbnails[1].url.split('?')[0].replace("hqdefault.jpg","mqdefault.jpg"),   
        formats   
    }
    return callback(data);
}
// getInfo('https://www.youtube.com/watch?v=8F2s8ivKXNY', info => {
//     // console.log(ytdl.chooseFormat(info.formats,{quality : "18"}))
    
//     console.log(info)

// })
module.exports = getInfo;