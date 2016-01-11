var sixty = {
	version: '1.0.0'
	,appInit: function(){
		this.runApp();
	}
	,runApp: function(){
		var _this = this;
		$(document).ready(function(){
			$(_this.settings.ctrlClass).on('click', function(){

				var productInfo = _this.getProduct($(this));
				var productInfo = productInfo.split(',');
				_this.setProductView();
				_this.createThreeSixty(productInfo[0],productInfo[1]);

			});			
		});
		
	}
	,getProduct: function(that){
		var prefix 	= that.attr('data-threesixty-prefix');
		var path	= that.attr('data-threesixty-path');
		console.log(prefix + ' ' + path);
		return path+','+prefix;
		
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
	,setProductView: function(){
		var _this = this;
		$(_this.settings.productView).html(_this.settings.Html);
	}
};

sixty.settings				= {};
sixty.settings.ctrlClass	= ".sixty-ctrl";
sixty.settings.Html		= '<div class="threesixty product-360"><div class=spinner><span>0%</span></div><ol class=threesixty_images></ol></div>';
sixty.settings.productView  = ".prd_big_slider";
sixty.appInit();