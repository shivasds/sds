<?php $this->load->view('inc/header');?>
    <link type=text/css media=all href=assets/wp-content/cache/autoptimize/css/blog.css rel=stylesheet>
    <link href="assets/wp-content/cache/autoptimize/css/blog-content.css" rel="stylesheet" id="bootstrap-css">

    <body class="">
       <style>
       .fixedbtn{
        position: absolute;
    bottom: 9px;
    right: 7px;
       }
       .fixedbtn1{
        position: absolute;
    bottom: 10px;
    left: 33%;
       }
       hr {
    margin-top: 2rem;
    margin-bottom: 3rem;
    border: 0;
    border-top: 1px solid rgba(0, 0, 0, .1);
}

       .services .services-wrap .media-body{
        text-align: initial;
       }
      .d-flex .mb-3 p{
        font-size: 17px;
        font-weight: 400;
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
                                                <div class="dslc-modules-section " style=background:url(assets/wp-content/uploads/n7.jpg) repeat scroll 50% 422.28px transparent; class="parallax scrolly-invisible layer color">>
                                                    <div class="dslc-bg-video dslc-force-show">
                                                        <div class=dslc-bg-video-overlay style="background-color:#000000; opacity:0.5; "></div>
                                                    </div>
                                                    <div class="dslc-modules-section-wrapper dslc-clearfix">
                                                        <div class="dslc-modules-area">
                                                            <div id=dslc-module-5bf0a899d98 class="dslc-module-front dslc-module-DSLC_Text_Simple dslc-in-viewport-check dslc-in-viewport-anim-none  dslc-col dslc-12-col dslc-last-col  dslc-module-handle-like-regular " data-module-id=5bf0a899d98 data-module=DSLC_Text_Simple data-dslc-module-size=12 data-dslc-anim=none data-dslc-anim-delay data-dslc-anim-duration=650 data-dslc-anim-easing=ease data-dslc-preset=none>
                                                                <div class="dslc-text-module-content block double-gap-top double-gap-bottom">
                                                                  
                                                                <div class="simple-text-block">
                                                                                    <h3>Blogs@secondsdigital</h3>
                                                                                  
                                                                                </div>
                                                                    
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

                                                        </div>
                                                    </div>
                                                </div>
                                                <section class="section mt-5" id="bog_test">
                                                    <div class="container">

                                                        <div class="row">
                                                            <?php
                                                            $blog_image='';
                                                                        foreach ($blogs as $blog) { 
                                                                            $blog_image = $blog->image2?$blog->image2:$blog->image;
                                                                        ?>
 
                                                               <div class="col-md-6">
                                                                    <div class="card flex-md-row mb-4 shadow-sm h-md-250">
                                                                         <img class="card-img-right flex-auto d-lg-block" alt="Thumbnail [200x250]" href="<?=site_url("blog/$blog->slug")?>" target="_blank"src="<?=base_url('uploads/blog_images/'.$blog_image);?>" style="">
                                                                        <div class="card-body d-flex flex-column align-items-start">
                                                                            <strong class="d-inline-block mb-2 text-primary"><?=$blog->title;?></strong>
                                                                            <h6 class="mb-3">
                                                                              
                                                                            <p class="card-text mb-auto">
                                                                                <?=substr(strip_tags($blog->content),0,200)?>..</p>
                                                                            <a class="btn btn-primary fixedbtn" role="button" href="<?=site_url("blog/$blog->slug")?>"  target="_blank">Continue reading</a>
                                                                        </div>
                                                                      
                                                                    </div>
                                                               </div> 
                                                                <!-- <div class="col-md-4 d-flex services ">
                                                                <div class="d-block services-wrap text-center">
                                                                    <div class="img" style="background-image: url(<?=base_url('uploads/blog_images/'.$blog->image);?>);"></div>
                                                                    <div class="media-body py-4 px-3">
                                                                        <h3 class="heading"><?=$blog->title;?></h3>
                                                                        <p> <?=substr(strip_tags($blog->content),0,200)?>..</p>

                                                                        <p><a href="<?=site_url("blog/$blog->slug")?>"  target="_blank" class="btn btn-primary fixedbtn1">Continue reading</a></p>
                                                                    </div>
                                                                </div>
                                                            </div> -->
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
                                                            <div class="dslc-separator dslc-separator-style-invisible">

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

        <script> let customizerOffCanvasMobileMenu = {
                "mobile_menu": 1 }; </script>

    </body>
    
    <?php $this->load->view('modal');?>

 </html>