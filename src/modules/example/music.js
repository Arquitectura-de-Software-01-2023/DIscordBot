const { globalHandler } = require('../handler.js');
const ytdl = require('ytdl-core-discord');

exports.data = {
  name: 'play',
  type: 1,
  description: 'Plays music from a provided URL.'
};

const playMusic = async (message, url) => {
  try {
    const voiceChannel = message.member.voice.channel;
    if (!voiceChannel) {
      return {
        "content": "You need to be in a voice channel to play music!"
      };
    }

    const connection = await voiceChannel.join();
    const stream = await ytdl(url);
    const dispatcher = connection.play(stream);

    dispatcher.on('finish', () => {
      voiceChannel.leave();
    });

    return {
      "content": "Now playing music!"
    };
  } catch (error) {
    console.error('Error playing music:', error);
    return {
      "content": "Oops! An error occurred while playing music."
    };
  }
};

const action = async (body) => {
  const message = body.message;
  const content = message.content;

  if (content.startsWith('/play')) {
    const args = content.split(' ');
    if (args.length < 2) {
      return {
        "content": "Please provide a URL (YouTube)"
      };
    }

    const url = args[1];
    const musicResponse = await playMusic(message, url);

    return musicResponse;
  }
};

exports.handler = (event) => {
  globalHandler(event, action);
};
