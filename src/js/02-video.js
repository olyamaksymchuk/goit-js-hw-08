import Player from '@vimeo/player';

    const iframe = document.querySelector('iframe');
    const player = new Player(iframe);

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    const onPlay = function (data) {
    localStorage.setItem ('videoplayer-current-time', JSON.stringify(data.seconds));
        let time=Number(localStorage.setItem('videoplayer-current-time'));
        console.log(time);
    }
player.on('play', onPlay);

player.setCurrentTime(30).then(function(seconds) {

}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            break;
default:
            break;
    }
});