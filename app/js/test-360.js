window.onload = init;

var car;
function init(){

    car = $('.car').ThreeSixty({
        totalFrames: 79, // Total no. of image you have for 360 slider
        endFrame: 79, // end frame for the auto spin animation
        currentFrame: 1, // This the start frame for auto spin
        imgList: '.threesixty_images', // selector for image list
        progress: '.spinner', // selector to show the loading progress
        imagePath: 'http://d261d7bbbbf004b3bb3a-9ce880f952ad0e05cbf0fc1799c0c02e.r70.cf1.rackcdn.com/360/M4-Viper-Assault-Rifle/', // path of the image assets
        filePrefix: 'M4-Viper-Assault-Rifle-Large-Black-Ops-USA-', // file prefix if any
        ext: '.JPG', // extention for the assets
        height: 600,
        width: 400,
        navigation: false,
        responsive: true,
        zeroPadding: true
    });

}
