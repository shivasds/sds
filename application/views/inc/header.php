<!DOCTYPE html>
<html lang=en-US>
<meta http-equiv="content-type" content="text/html;charset=UTF-8" />
<head>
<meta charset=UTF-8>
<meta name=viewport content="width=device-width, initial-scale=1">
<title><?=$meta[0]['meta_title'];?></title>
<meta name="keywords" content=" <?=$meta[0]['meta_keywords'];?>">
<meta name="description" content="<?=$meta[0]['meta_desc'];?>">
<?=$meta[0]['google_tags'];?>
<meta property=og:site_name content="Seconds Digital Solutions Pvt Ltd">
<link rel=icon href=<?=base_url();?>assets/wp-content/uploads/2019/06/favicon.png sizes=32x32>

<link type=text/css media=all href=<?=base_url()?>assets/wp-content/cache/autoptimize/css/font.css rel=stylesheet >
<link type=text/css media=all href=<?=base_url()?>assets/wp-content/cache/autoptimize/css/header.css rel=stylesheet>

<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous"> 
<script src="<?=base_url()?>assets/jssor/jssor.js" type="text/javascript"></script>
<script defer src=<?=base_url()?>assets/wp-content/cache/autoptimize/js/analyst.js></script>
<script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha256-pasqAKBDmFT4eHoN2ndd6lN370kFiGUFyTiUHWhU7k8=" crossorigin="anonymous"></script>
 
	<script type="text/javascript">
	   window.jssor_1_slider_init = function() {

var jssor_1_SlideshowTransitions = [
  {$Duration:500,$Delay:12,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:2049,$Easing:$Jease$.$OutQuad},
  {$Duration:500,$Delay:40,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$SlideOut:true,$Easing:$Jease$.$OutQuad},
  {$Duration:1000,x:-0.2,$Delay:20,$Cols:16,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Assembly:260,$Easing:{$Left:$Jease$.$InOutExpo,$Opacity:$Jease$.$InOutQuad},$Opacity:2,$Outside:true,$Round:{$Top:0.5}},
  {$Duration:1600,y:-1,$Delay:40,$Cols:24,$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraight,$Easing:$Jease$.$OutJump,$Round:{$Top:1.5}},
  {$Duration:1200,x:0.2,y:-0.1,$Delay:16,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.3,0.7],$Top:[0.3,0.7]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InWave,$Top:$Jease$.$InWave,$Clip:$Jease$.$OutQuad},$Round:{$Left:1.3,$Top:2.5}},
  {$Duration:1500,x:0.3,y:-0.3,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.2,0.8],$Top:[0.2,0.8]},$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Round:{$Left:0.8,$Top:2.5}},
  {$Duration:1500,x:0.3,y:-0.3,$Delay:20,$Cols:10,$Rows:5,$Opacity:2,$Clip:15,$During:{$Left:[0.1,0.9],$Top:[0.1,0.9]},$SlideOut:true,$Formation:$JssorSlideshowFormations$.$FormationStraightStairs,$Assembly:260,$Easing:{$Left:$Jease$.$InJump,$Top:$Jease$.$InJump,$Clip:$Jease$.$OutQuad},$Round:{$Left:0.8,$Top:2.5}}
];

var jssor_1_options = {
  $AutoPlay: 1,
  $SlideshowOptions: {
	$Class: $JssorSlideshowRunner$,
	$Transitions: jssor_1_SlideshowTransitions,
	$TransitionsOrder: 1
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

		.social-icon{
			color: #fff;
		}
		
		
	</style>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src='<?=base_url();?>assets/wp-includes/js/jquery/common.js'></script>
</head>
