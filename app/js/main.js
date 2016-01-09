var sixty = {
	version: '1.0.0'
	,appInit: function(){
		this.runApp();
	}
	,runApp: function(){
		var _this = this;
		$(document).ready(function(){
			$(_this.settings.ctrlClass).on('click', function(){
				_this.getProduct($(this));
			});			
		});
		
	}
	,getProduct: function(that){
		var prefix 	= that.attr('data-threesixty-prefix');
		var path	= that.attr('data-threesixty-path');
		console.log(prefix + ' ' + path);
		this.createThreeSixty(path,prefix);
	}
	,createThreeSixty: function(path, prefix){
		var product360 = $('.product-360').ThreeSixty({
			totalFrames: 79, // Total no. of image you have for 360 slider
			endFrame: 79, // end frame for the auto spin animation
			currentFrame: 1, // This the start frame for auto spin
			imgList: '.threesixty_images', // selector for image list
			progress: '.spinner', // selector to show the loading progress
			imagePath: 'http://' + path, // path of the image assets
			filePrefix: prefix, // file prefix if any
			ext: '.JPG', // extention for the assets
			height: 600,
			width: 400,
			navigation: false,
			responsive: true,
			zeroPadding: true
		});
	}
};

sixty.settings				= {};
sixty.settings.ctrlClass	= ".sixty-ctrl";
sixty.appInit();