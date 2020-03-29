
<!DOCTYPE html>
<html lang=en-US>

<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
	<meta
charset=UTF-8>
<meta name=viewport content="width=device-width, initial-scale=1">
<link type=text/css media=all href=assets/wp-content/cache/autoptimize/css/home.css rel=stylesheet>
<title><?=$meta[0]['meta_title']?$meta[0]['meta_title']:'';?></title>
<meta name="description" content="<?=$meta[0]['meta_desc']?$meta[0]['meta_desc']:'';?>"/>
<meta name="keywords" content="<?=$meta[0]['meta_keywords']?$meta[0]['meta_keywords']:'';?>"/>	
<?=$meta[0]['google_tags']?$meta[0]['google_tags']:'';?>
<script src='assets/wp-includes/js/jquery/common.js'></script>

<link rel=icon href=assets/wp-content/uploads/2019/06/favicon.png sizes=32x32>
<script src="assets/jssor/jssor.js" type="text/javascript"></script>
<script type="text/javascript">
	window.jssor_1_slider_init = function() {

		var jssor_1_SlideoTransitions = [
		  [{b:-1,d:1,kX:16}],
		  [{b:-1,d:1,y:200,rY:-360,sX:0.5,sY:0.5,p:{y:{o:32,d:1,dO:9},rY:{c:0}}},{b:0,d:3000,y:0,o:1,rY:0,sX:1,sY:1,e:{y:1,o:13,rY:1,sX:1,sY:1},p:{y:{dl:0},o:{dl:0.1,rd:3},rY:{dl:0.1,o:33},sX:{dl:0.1,o:33},sY:{dl:0.1,o:33}}}],
		  [{b:-1,d:1,y:200,rY:-360,sX:0.5,sY:0.5,p:{y:{o:32,d:1,dO:9},rY:{c:0}}},{b:0,d:3000,y:0,o:1,rY:0,sX:1,sY:1,e:{y:1,o:13,rY:1,sX:1,sY:1},p:{y:{dl:0},o:{dl:0.1,rd:3},rY:{dl:0.1,o:33},sX:{dl:0.1,o:33},sY:{dl:0.1,o:33}}}],
		  [{b:-1,d:1,y:100,rY:-360,sX:0.5,sY:0.5,p:{y:{o:32,d:1,dO:9},rY:{c:0}}},{b:0,d:3000,y:0,o:1,rY:0,sX:1,sY:1,e:{y:1,o:13,rY:1,sX:1,sY:1},p:{y:{dl:0},o:{dl:0.02,rd:3},rY:{dl:0.02,o:33},sX:{dl:0.02,o:33},sY:{dl:0.02,o:33}}}],
		  [{b:2000,d:1000,y:50,e:{y:3}}],
		  [{b:-1,d:1,bl:[8]},{b:2000,d:1000,bl:[3],e:{bl:3}}],
		  [{b:-1,d:1,rp:1},{b:2000,d:1000,o:0.6},{b:2000,d:1000,rp:0}],
		  [{b:-1,d:1,sX:0.7}],
		  [{b:1000,d:2000,y:195,e:{y:3}}],
		  [{b:600,d:2000,y:195,e:{y:3}}],
		  [{b:1400,d:2000,y:195,e:{y:3}}],
		  [{b:-1,d:1,sX:0.7,ls:2},{b:0,d:800,o:1,ls:0,e:{ls:6}}],
		  [{b:-1,d:801,rp:1}],
		  [{b:-1,d:1,kY:-6}],
		  [{b:-1,d:1,x:30,kY:-10},{b:1400,d:1500,x:0,o:1,e:{x:27,o:6}}],
		  [{b:-1,d:1,c:{t:0}},{b:1400,d:1500,c:{t:339},e:{c:{t:3}}}],
		  [{b:-1,d:1,x:30,kY:-10},{b:1700,d:1500,x:0,o:1,e:{x:27,o:6}}],
		  [{b:-1,d:1,c:{t:0}},{b:1700,d:1500,c:{t:339},e:{c:{t:3}}}],
		  [{b:-1,d:1,sX:0.3,sY:0.3},{b:400,d:1000,o:1,sX:1,sY:1,e:{sX:3,sY:3}}],
		  [{b:-1,d:1,sX:0.3,sY:0.3},{b:0,d:1800,x:-347,y:-94,o:1,sX:1,sY:1,e:{x:3,y:3,sX:3,sY:3}}],
		  [{b:-1,d:1,sX:0.3,sY:0.3},{b:180,d:1520,x:-230,y:-217,o:1,sX:1,sY:1,e:{x:3,y:3,sX:3,sY:3}}],
		  [{b:-1,d:1,sX:0.3,sY:0.3},{b:400,d:1500,x:-120,y:-179,o:1,sX:1,sY:1,e:{x:3,y:3,sX:3,sY:3}}],
		  [{b:-1,d:1,sX:0.3,sY:0.3},{b:500,d:1600,x:120,y:-167,o:1,sX:1,sY:1,e:{x:3,y:3,sX:3,sY:3}}],
		  [{b:-1,d:1,sX:0.3,sY:0.3},{b:800,d:800,x:301,y:-100,o:1,sX:1,sY:1,e:{x:3,y:3,sX:3,sY:3}}],
		  [{b:-1,d:1,sX:0.3,sY:0.3},{b:600,d:1000,x:312,y:-92,o:1,sX:1,sY:1,e:{x:3,y:3,sX:3,sY:3}}],
		  [{b:-1,d:1,sX:0.3,sY:0.3},{b:100,d:800,x:388,y:-161,o:1,sX:1,sY:1,e:{x:3,y:3,sX:3,sY:3}}]
		];

		var jssor_1_options = {
		  $AutoPlay: 1,
		  $SlideDuration: 300,
		  $SlideEasing: $Jease$.$OutQuint,
		  $CaptionSliderOptions: {
			$Class: $JssorCaptionSlideo$,
			$Transitions: jssor_1_SlideoTransitions
		  },
		  $ArrowNavigatorOptions: {
			$Class: $JssorArrowNavigator$
		  },
		  $BulletNavigatorOptions: {
			$Class: $JssorBulletNavigator$,
			$SpacingX: 16,
			$SpacingY: 16
		  }
		};

		var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

		/*#region responsive code begin*/

		var MAX_WIDTH = 1600;

		function ScaleSlider() {
			var containerElement = jssor_1_slider.$Elmt.parentNode;
			var containerWidth = containerElement.clientWidth;

			if (containerWidth) {

				var expectedWidth = Math.min(MAX_WIDTH || containerWidth, containerWidth);

				jssor_1_slider.$ScaleWidth(expectedWidth);
			}
			else {
				window.setTimeout(ScaleSlider, 30);
			}
		}

		ScaleSlider();

		$Jssor$.$AddEvent(window, "load", ScaleSlider);
		$Jssor$.$AddEvent(window, "resize", ScaleSlider);
		$Jssor$.$AddEvent(window, "orientationchange", ScaleSlider);
		/*#endregion responsive code end*/
	};
</script>
<style>
	/*jssor slider loading skin spin css*/
	.jssorl-009-spin img {
		animation-name: jssorl-009-spin;
		animation-duration: 1.6s;
		animation-iteration-count: infinite;
		animation-timing-function: linear;
	}

	@keyframes jssorl-009-spin {
		from { transform: rotate(0deg); }
		to { transform: rotate(360deg); }
	}

	/*jssor slider bullet skin 057 css*/
	.jssorb057 .i {position:absolute;cursor:pointer;}
	.jssorb057 .i .b {fill:none;stroke:#fff;stroke-width:2200;stroke-miterlimit:10;stroke-opacity:0.4;}
	.jssorb057 .i:hover .b {stroke-opacity:.7;}
	.jssorb057 .iav .b {stroke-opacity: 1;}
	.jssorb057 .i.idn {opacity:.3;}

	/*jssor slider arrow skin 051 css*/
	.jssora051 {display:block;position:absolute;cursor:pointer;}
	.jssora051 .a {fill:none;stroke:#fff;stroke-width:360;stroke-miterlimit:10;}
	.jssora051:hover {opacity:.8;}
	.jssora051.jssora051dn {opacity:.5;}
	.jssora051.jssora051ds {opacity:.3;pointer-events:none;}
</style>
</head>