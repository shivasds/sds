<link type=text/css media=all href=assets/wp-content/cache/autoptimize/css/blog.css rel=stylesheet>
<link href="assets/wp-content/cache/autoptimize/css/blog-content.css" rel="stylesheet" id="bootstrap-css">

<body class="">
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
										<div class="dslc-modules-section " style="padding-bottom:0px;padding-top:0px;border-right-style: hidden; border-left-style: hidden; " data-section-id=065150a228a>
											<div class="dslc-modules-section-wrapper dslc-clearfix">
											
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
															<h6 class="mb-0">
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
</html>