<?php $this->load->view('admin/inc/header');?>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.2.0/min/dropzone.min.css">
<body id="page-top">
<style>
      .border-blue{
          /* border: 1px solid #ccc!important; */
          border-style: hidden hidden solid hidden;
          border-radius: 16px;
          box-shadow: 0px -3px 0px;
          padding: 17px 18px;
          background: white;
      }
      .input-group .input-group-addon {
    border-radius: 0;
    border-color: #d2d6de;
    background-color: #fff;
    padding:6px;
    border: 1px solid #eceaea!important;
}
.input-group-addon:first-child {
    border-right: 0;
}
      </style>
  <!-- Page Wrapper -->
  <div id="wrapper">

    <!-- Sidebar -->
    <?php $this->load->view('admin/inc/sidenav');?>
    <!-- End of Sidebar -->

    <!-- Content Wrapper -->
    <div id="content-wrapper" class="d-flex flex-column">

      <!-- Main Content -->
      <div id="content">

        <!-- Topbar -->
        <?php $this->load->view('admin/inc/fixedheader');?>
        <!-- End of Topbar -->

        <div class="container-fluid">
              <?php
    if ($this->session->flashdata('success')) {
        ?>
        <div class="alert alert-success">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <strong style="color: #3c763d;"><i class="fa fa-save" aria-hidden="true"></i></strong> <span
                    style="color: #3c763d;"><?= $this->session->flashdata('success') ?></span>
        </div>
        <?php
    }
    if ($this->session->flashdata('error')) {
        ?>
        <div class="alert alert-danger">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <strong style="color: #a94442;"><i class="fa fa-exclamation-triangle" aria-hidden="true"></i></strong> <span
                    style="color: #a94442;"><?= $this->session->flashdata('error') ?></span>
        </div>
        <?php
    } 
    ?>
          <div class="col-md-12 border-blue">
          <h1 class="h3 mb-0 text-gray-800 mb-4"><?=$heading?></h1>
              <form method="post" action="<?=base_url('admin/content_page_content');?>">
              <div class="form-group">
                  <label for="address" class="col-sm-2 control-label">Content 1</label>
                  <div class="col-sm-12 ">
                      <textarea class="form-control" name="content_1" placeholder="Type the Address Here" id="first_content" rows="5"><?=$content[0]['content_1'];?></textarea>
                      <span class=""></span>
                  </div>
              </div> 
              <div class="form-group">
                  <label for="address" class="col-sm-2 control-label">Content 2</label>
                  <div class="col-sm-12 ">
                      <textarea class="form-control" name="content_2" id="second_content"placeholder="Type the Address Here"  rows="5"><?=$content[0]['content_2'];?></textarea>
                      <span class=""></span>
                  </div>
              </div>
              <div class="form-group">
                  <label for="address" class="col-sm-2 control-label">Content 3</label>
                  <div class="col-sm-12 ">
                      <textarea class="form-control" name="content_3" id="third_content"placeholder="Type the Address Here"   rows="5"><?=$content[0]['content_3'];?></textarea>
                      <span class=""></span>
                  </div>
              </div>
              <div class="form-group">
                  <label for="address" class="col-sm-2 control-label">Content 4</label>
                  <div class="col-sm-12 ">
                      <textarea class="form-control" name="content_4" id="vision_content"placeholder="Type the Address Here"   rows="5"><?=$content[0]['content_4'];?></textarea>
                      <span class=""></span>
                  </div>
              </div>
              <div class="form-group">
                  <label for="address" class="col-sm-2 control-label">Content 5</label>
                  <div class="col-sm-12 ">
                      <textarea class="form-control" name="content_5" id="mision_content"placeholder="Type the Address Here"   rows="5"><?=$content[0]['content_5'];?></textarea>
                      <span class=""></span>
                  </div>
              </div>
              <div class="form-group">
                  <label for="address" class="col-sm-2 control-label">Content 6</label>
                  <div class="col-sm-12 ">
                      <textarea class="form-control" name="content_6" id="core_content"placeholder="Type the Address Here"   rows="5"><?=$content[0]['content_6'];?></textarea>
                      <span class=""></span>
                  </div>
              </div>
              <div class="form-group">
                  <label for="address" class="col-sm-2 control-label">Content 7</label>
                  <div class="col-sm-12 ">
                      <textarea class="form-control" name="content_7" id="role"placeholder="Type the Address Here"   rows="5"><?=$content[0]['content_7'];?></textarea>
                      <span class=""></span>
                  </div>
              </div>
              <div class="form-group">
                  <label for="address" class="col-sm-2 control-label">Content 8</label>
                  <div class="col-sm-12 ">
                      <textarea class="form-control" name="content_8" id="qualification"placeholder="Type the Address Here"   rows="5"><?=$content[0]['content_8'];?></textarea>
                      <span class=""></span>
                  </div>
              </div>
              <div class="form-group">
                  <label for="address" class="col-sm-2 control-label">Content 9</label>
                  <div class="col-sm-12 ">
                      <textarea class="form-control" name="content_9" id="qualities"placeholder="Type the Address Here"   rows="5"><?=$content[0]['content_9'];?></textarea>
                      <span class=""></span>
                  </div>
              </div>
              <div class="form-group">
                  <label for="address" class="col-sm-2 control-label">Content 10</label>
                  <div class="col-sm-12 ">
                      <textarea class="form-control" name="content_10" id="type"placeholder="Type the Address Here"   rows="5"><?=$content[0]['content_10'];?></textarea>
                      <span class=""></span>
                  </div>
              </div> 
              
                
                      <!-- <div class="form-group">
                            <div class="dropzone first_image">
                                <div id="hiddenfirstimages" class="hide"></div>
                            </div>
                            <span class="help-block">(Recommended Dimension : 527x388)</span>
                        </div>  
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-youtube" aria-hidden="true"></i></span>
                                <input type="url" class="form-control" name="youtube"
                                       placeholder="Walkthrogh" value="<?=$about[0]['youtube'];?>" >
                            </div>
                        </div> 
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-twitter" aria-hidden="true"></i></span>
                                <input type="url" class="form-control" name="first_twitter"
                                       placeholder="Something">
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-google-plus"
                                                                   aria-hidden="true"></i></span>
                                <input type="url" class="form-control" name="first_google"
                                       placeholder="Something">
                            </div>
                        </div>   -->
                        <div class="box-footer">
                        <input type="submit" class="btn btn-primary" id="submit1" value="Submit">
                      </form>
                        <input type="button"  class="btn btn-default"style="float: right" value="Back">
                    </div> 
           <div class="clearfix"></div><br><br><br>
                  
         </div>
     



        </div>
      </div>
      <!-- End of Main Content -->

      <!-- Footer -->
      <?php $this->load->view('admin/inc/footer');?>
      <!-- End of Footer -->

    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

   <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

<!-- Bootstrap core JavaScript-->
<script src="<?=base_url();?>assets/vendor/jquery/jquery.min.js"></script>
  <script src="<?=base_url();?>assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="<?=base_url();?>assets/js/dashboard.min.js"></script>
  <!----        Text Editor        ----->
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/ckeditor/4.7.2/ckeditor.js"></script>
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/dropzone/5.2.0/min/dropzone.min.js"></script>
  <script type="text/javascript" src="<?=base_url();?>/assets/themes/admin/js/aboutUs.js?v=3.4.5"></script>
  <script type="text/javascript" src="<?=base_url();?>/assets/themes/admin/js/career.js?v=3.4.5"></script>

    <!----        Text Editor        ----->

    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/dropzone/5.2.0/min/dropzone.min.js?v=3.4.5"></script>
</body>

</html>
