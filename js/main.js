var video = document.getElementById('intro-video')
video.addEventListener('loadedmetadata', function() {
	startVideo(2, 4)
}, false);

function startVideo(startTrim, stopTrim) {
	video.currentTime = startTrim
	video.play()
	console.log('Starting at ' + startTrim + ' stopping at ' + (video.duration - stopTrim))
	setTimeout(function(){
		startVideo(2, 3)
		console.log('resetting video' )
	}, (video.duration - stopTrim) * 1000 )
}