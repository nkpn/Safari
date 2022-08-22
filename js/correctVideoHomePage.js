const videoElement = $('video');

if ($(window).width() < 767) {
    videoElement.append('<source src="./video/mobile_2mbps.mp4" type="video/mp4" media="all and (max-width:767px)">')
} else {
    videoElement.append('<source src="./video/4Site_2mbps.mp4" type="video/mp4" media="all and (min-width:768px)">')
}