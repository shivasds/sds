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
  {$Duration:800,x:-0.3,$During:{$Left:[0.3,0.7]},$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2},
  {$Duration:800,x:0.3,$SlideOut:true,$Easing:{$Left:$Jease$.$InCubic,$Opacity:$Jease$.$Linear},$Opacity:2}
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
  $ThumbnailNavigatorOptions: {
	$Class: $JssorThumbnailNavigator$,
	$Orientation: 2,
	$NoDrag: true
  }
};

var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

/*#region responsive code begin*/

var MAX_WIDTH = 2600;

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
		

		.social-icon{
			color: #fff;
		}
		
		
	</style>
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<script src='<?=base_url();?>assets/wp-includes/js/jquery/common.js'></script>
</head>
