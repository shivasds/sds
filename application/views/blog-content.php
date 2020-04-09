<link type=text/css media=all href=assets/wp-content/cache/autoptimize/css/blog.css rel=stylesheet>
<link href="assets/wp-content/cache/autoptimize/css/blog-content.css" rel="stylesheet" id="bootstrap-css">
<body class="">
	<style>
		   #content{
			background: #ecebe940;
		   } 
		   
		   #dslc-module-5bf0a899d98 .dslc-text-module-content, #dslc-module-5bf0a899d98 .dslc-text-module-content .dslca-editable-content, #dslc-module-5bf0a899d98 .dslc-text-module-content p {
			font-style: inherit;
			text-align: left;
			line-height: 40px;
			color: white;
		}
		#dslc-module-5bf0a899d98 .dslc-text-module-content {
			margin-top: 60px;
             margin-bottom: 60px;
           background-repeat: repeat;
			background-attachment: scroll;
			background-position: left top;
			background-size: auto;
		}
			#home {

			background: url(assets/wp-content/uploads/Fotolia_56716934_M.jpg) no-repeat center center fixed;
			display: table;
				height: 200px;
				position: relative;
			width: 100%;
			-webkit-background-size: cover;
			-moz-background-size: cover;
			-o-background-size: cover;
			background-size: cover;

			}

		</style>
    <div class=off-canvas-wrap>
        <div class="site global-container inner-wrap" id=global-container>
            <div class=global-wrapper>
                <div id=dslc-content class="dslc-content dslc-clearfix">
                      <!-- Header -->
                      <?php $this->load->view('inc/header_nav');?>
                    <div class=site-main>
					    <div id=content class=site-content role=main>
                            <article id=post-975 class="post-975 page type-page status-publish hentry">
							
                                <div class=entry-content>
								    <div id=dslc-main>
                                        <div class="dslc-modules-section " style=padding-bottom:0px;padding-top:0px;background-image:url(assets/wp-content/uploads/n7.jpg); data-section-id=5f8e2c9d01e>
                                            <div class="dslc-bg-video dslc-force-show">
                                                <div class=dslc-bg-video-overlay style="background-color:#000000; opacity:0.5; "></div>
                                            </div>
                                            <div class="dslc-modules-section-wrapper dslc-clearfix">
                                                <div class="dslc-modules-area dslc-col dslc-7-col dslc-first-col" data-size=7>
                                                    <div id=dslc-module-5bf0a899d98 class="dslc-module-front dslc-module-DSLC_Text_Simple dslc-in-viewport-check dslc-in-viewport-anim-none  dslc-col dslc-12-col dslc-last-col  dslc-module-handle-like-regular " data-module-id=5bf0a899d98 data-module=DSLC_Text_Simple data-dslc-module-size=12 data-dslc-anim=none data-dslc-anim-delay data-dslc-anim-duration=650 data-dslc-anim-easing=ease data-dslc-preset=none>
                                                        <div class=dslc-text-module-content>
                                                            <h1><strong> <span style="color: #ffffff;">Welcome to Blog</span></strong></h1>
                                                            <h2> <span style="color: #218ac9;"><strong>Are You Looking Latest Blog</strong></span></h2>
                                                             <p> <span style="color: #218ac9;"><em><strong>Then You are in the Right Place.</strong></em></span></p>
                                                            <p></p>
                                                        </div>
                                                    </div>
                                                </div>
                                               
                                            </div>
                                        </div>
												<!-- Body of blog -->
												<div class="dslc-modules-area dslc-col dslc-12-col dslc-last-col" data-size=12>
															<div id=dslc-module-8169 class="dslc-module-front dslc-module-DSLC_Separator dslc-in-viewport-check dslc-in-viewport-anim-none  dslc-col dslc-12-col dslc-last-col  dslc-module-handle-like-regular " data-module-id=8169 data-module=DSLC_Separator data-dslc-module-size=12 data-dslc-anim=none data-dslc-anim-delay=0 data-dslc-anim-duration=650 data-dslc-anim-easing=ease data-dslc-preset=none>
																<div class=dslc-separator-wrapper>
																	<div class="dslc-separator dslc-separator-style-invisible"></div>
																	<div></div>
																</div>
															</div>
												</div>	
												<section class="section mt-5" id="bog_test">
													<div class="container">
														
														<div class="row">
															<?php
															foreach ($blogs as $blog) { 
															?>

														<div class="col-md-6">
															<div class="card flex-md-row mb-4 shadow-sm h-md-250">
																<div class="card-body d-flex flex-column align-items-start">
																	<strong class="d-inline-block mb-2 text-primary"><?=$blog->title;?></strong>
																	<h6 class="mb-3">
																	<!-- <a class="text-dark" href="#">40 Percent of People Can’t Afford Basics</a>
																	</h6>
																	<div class="mb-1 text-muted small">April 2020</div> -->
																	<p class="card-text mb-auto"><?=substr(strip_tags($blog->content),0,200)?>..</p>
																	<a class="btn btn-primary" role="button" href="<?=site_url("blog/$blog->slug")?>"  target="_blank">Continue reading</a>
																</div>
																<img class="card-img-right flex-auto d-none d-lg-block" alt="Thumbnail [200x250]" href="<?=site_url("blog/$blog->slug")?>"  target="_blank"src="<?=base_url('uploads/blog_images/'.$blog->image);?>" style="width: 200px; height: 250px;">
															</div>
														</div>
														<?php
														}

															?>
														</div>

													<div class="row">
													<div class="col-md-4 d-flex services ">
													<div class="d-block services-wrap text-center">
													<div class="img" style="background-image: url(assets/wp-content/uploads/Fotolia_56716934_M.jpg);"></div>
													<div class="media-body py-4 px-3">
													<h3 class="heading">Map Direction</h3>
													<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
													<p><a href="#" class="btn btn-primary">Read more</a></p>
													</div>
													</div>
													</div>
													<div class="col-md-4 d-flex services ">
													<div class="d-block services-wrap text-center">
													<div class="img" style="background-image: url(assets/wp-content/uploads/Fotolia_56716934_M.jpg);"></div>
													<div class="media-body py-4 px-3">
													<h3 class="heading">Accomodation Services</h3>
													<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
													<p><a href="#" class="btn btn-primary">Read more</a></p>
													</div>
													</div>
													</div>
													<div class="col-md-4 d-flex services ">
													<div class="d-block services-wrap text-center">
													<div class="img" style="background-image: url(assets/wp-content/uploads/Fotolia_56716934_M.jpg);"></div>
													<div class="media-body py-4 px-3">
													<h3 class="heading">Great Experience</h3>
													<p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
													<p><a href="#" class="btn btn-primary">Read more</a></p>
													</div>
													</div>
													</div>
													</div>
													
													</div>
																	
												</section>


											   <!-- end Body of blog -->
												<div class="dslc-modules-area dslc-col dslc-12-col dslc-last-col" data-size=12>
													<div id=dslc-module-8169 class="dslc-module-front dslc-module-DSLC_Separator dslc-in-viewport-check dslc-in-viewport-anim-none  dslc-col dslc-12-col dslc-last-col  dslc-module-handle-like-regular " data-module-id=8169 data-module=DSLC_Separator data-dslc-module-size=12 data-dslc-anim=none data-dslc-anim-delay=0 data-dslc-anim-duration=650 data-dslc-anim-easing=ease data-dslc-preset=none>
														<div class=dslc-separator-wrapper>
															<div class="dslc-separator dslc-separator-style-invisible"></div>
															<div></div>
														</div>
													</div>
												</div>
											</div>
										</div>
									
									
							</article>
						</div>
                    </div>
                    
                    <!-- Footer -->
                    <?php $this->load->view('inc/footer');?>

                </div>
            </div>
        </div>
    </div>

   <script src="https://kit.fontawesome.com/a076d05399.js"></script>
  
       <script>let customizerOffCanvasMobileMenu = {"mobile_menu":1};
    
    </script> 

</body>
<?php $this->load->view('modal');?>
</html>