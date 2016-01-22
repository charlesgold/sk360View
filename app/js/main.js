var sixty = {
	version: '1.0.0'
	,appInit: function(){
		this.runApp();
	}
	,app: {}
	,runApp: function(){
		var _this = this;
		$(document).ready(function(){

			if(_this.settings.preloadImages){
				var productInfo = _this.getProduct($(_this.settings.ctrlClass));
				_this.preloadImages(_this.app.progress);
				productInfo = productInfo.split(',');
				var imgList = _this.makeImgArray(productInfo[0],productInfo[1],productInfo[2]);
				_this.preloadImages(imgList);
			}

			$(_this.settings.ctrlClass).on('click', function(){

				var productInfo = _this.getProduct($(this));
				var productInfo = productInfo.split(',');
				_this.setProductView();
				_this.showUnderlay();
				_this.createThreeSixty(productInfo[0],productInfo[1],productInfo[2]);
				
			});			
		});
		
	}
	,getProduct: function(that){
		var prefix 	= that.attr('data-threesixty-prefix');
		var path	= that.attr('data-threesixty-path');
		var frames  = that.attr('data-threesixty-frames');

		this.app.progress = that.attr('data-threesixty-progress-underlay');

		return path+','+prefix+','+frames;
		
	}
	,createThreeSixty: function(path, prefix,frames){
		var _this = this;
		(frames != typeof 'undefined')?frames:80;
		var product360 = $('.product-360').ThreeSixty({
			totalFrames: frames, // Total no. of image you have for 360 slider
			endFrame: frames, // end frame for the auto spin animation
			currentFrame: 1, // This the start frame for auto spin
			imgList: '.threesixty_images', // selector for image list
			progress: '.spinner', // selector to show the loading progress
			imagePath: 'http://' + path, // path of the image assets
			filePrefix: prefix, // file prefix if any
			ext: '.JPG', // extention for the assets
			height: 340,
			width: 504,
			navigation: false,
			responsive: true,
			zeroPadding: true,
			onReady: function(){
				_this.hideUnderlay();
			}

			,plugins: ['ThreeSixtyFullscreen']
			
		});

		product360.play();
	}
	,setProductView: function(){
		var _this = this;
		$(_this.settings.productView).html(_this.settings.Html);
	}
	,showUnderlay: function(){
		var progress = $('#'+this.settings.progressId);
		progress.addClass('underlay-on');
		var h = "http://";
		progress.css('background-repeat','no-repeat');
		progress.css("background-image","url("+ h + this.app.progress +")");
		
	}
	,hideUnderlay: function(){
		var progress = $('#'+this.settings.progressId);
		progress.css('display','none');
		progress.removeClass('underlay-on');
	}
	,preloadImages: function(imgList){
		var proto = 'http://';
		imgArr = imgList.split(',');
	  for (var i = 0; i < imgArr.length; i++) {
	    //$("<img />").attr("src", proto + imgArr[i]);
	    $(new Image()).attr('src', proto + imgArr[i]).appendTo($('#360-preloader')).fadeIn();

	  }
	}
	,makeImgArray: function(path,prefix,frames){
		var pI, img;
		var imgList = '';

		for(var i=0; i<frames;i++){
			pI = parseInt(i)+1;
			pI = (pI < 10)?'0'+pI:pI;
			img =  path + prefix + pI + '.JPG';
			imgList = imgList + img + ',';
			
			if(pI==frames){
				imgList = imgList.replace(/\,$/, '');
			}
		}
		console.log(imgList);
		return imgList;
	}

};

sixty.settings				= {};
sixty.settings.ctrlClass	= ".sixty-ctrl";
sixty.settings.Html			= '<div class="threesixty product-360"><div id="progress-underlay" class="underlay"><div class="spinner" id="progress"><span>0%</span></div></div><ol class="threesixty_images"></ol></div>';
sixty.settings.productView  = ".prd_big_slider";
sixty.settings.progressId 	=	"progress-underlay";
sixty.settings.preloadImages= 1;
sixty.settings.fullScreen	= true;

$(window).bind("load", function() {
   sixty.appInit();
});


