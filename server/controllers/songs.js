const axios = require('axios');
const Song = require('../models/song');


exports.getSongs = async (req, res, next) => {
    const songs = await Song.find();

    return res.json({ result: 1, songs});
};

exports.getSong = async (req, res, next) => {
    const songId = req.params.id;
    const song = await Song.findById(songId);

    return res.json({ result: 1, song});
};

exports.collectData = async (req, res, next) => {
    let date = new Date();
    const lastFriday = new Date(date.setDate(date.getDate() - date.getDay() - 2));
    await Song.deleteMany({}, () => {console.log('delete all')});

    for (let i=0; i < 20;i++) {
        const result = await axios.get('https://spotifycharts.com/regional/global/weekly/' + getDateString(lastFriday) + '/download');
        console.log(lastFriday);
        const array = result.data.split(/\r?\n/);
        for (let k = 2; k < array.length; k++) {
            const songArray = array[k].split(',');
            let song = await Song.findOne({ URL : songArray[4] });
            if (!song) {
                song = new Song();
                song.name = songArray[1];
                song.artist = songArray[2];
                song.streams = songArray[3];
                song.URL = songArray[4];
                song.weeks = [{ position: songArray[0], weekFriday: lastFriday.toISOString(), index: i }];
            } else {
                song.weeks.push({ position: songArray[0], weekFriday: lastFriday.toISOString(), index: i });
            }
            await song.save();
        }
    }

    return res.json({ result: 1});
};

function getDateString(date) {
    const upDate = date.getFullYear() + '-' + ((date.getMonth() + 1 < 10) ? '0' : '') + (date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' : '') + date.getDate();
    date.setDate(date.getDate() - 7);
    const lowDate = date.getFullYear() + '-' + ((date.getMonth() + 1 < 10) ? '0' : '') + (date.getMonth() + 1) + '-' + (date.getDate() < 10 ? '0' : '') + date.getDate();

    return lowDate + '--' + upDate;
}
