<?php $this->load->view('admin/inc/header');?>
<link rel="stylesheet" type="text/css" href="https://cdnjs.cloudflare.com/ajax/libs/dropzone/5.2.0/min/dropzone.min.css">
<body id="page-top">
<style>
      .border-blue{
          /* border: 1px solid #ccc!important; */
          border-style: hidden hidden solid hidden;
          border-radius: 16px;
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

          <div class="col-md-12 border-blue">
          <h1 class="h3 mb-0 text-gray-800 mb-4">Cards</h1>
        
          <div class="form-group">
                    <input type="text" name="first_title" id="first_title" class="form-control" placeholder="Section Title" value="Who We Are?" title="">
              </div>
                <div class="align-items-center justify-content-between mb-4">
                
                  <input type="text" name="" id="editor1">
                  <!-- <textarea type="text" name="" id="editor1"></textarea> -->
                </div> 
                      <div class="form-group">
                            <div class="dropzone first_image">
                                <div id="hiddenfirstimages" class="hide"></div>
                            </div>
                            <span class="help-block">(Recommended Dimension : 527x388)</span>
                        </div>
                        <div class="form-group">
                            <div class="input-group">
                                <span class="input-group-addon"><i class="fa fa-facebook" aria-hidden="true"></i></span>
                                <input type="url" class="form-control" name="first_facebook"
                                       placeholder="Something" >
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
                        </div>  
                        <div class="box-footer">
                        <input type="submit" class="btn btn-primary" id="submit1" value="Submit">
                        <input type="button"  class="btn btn-default" value="Back">
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
<script src="assets/vendor/jquery/jquery.min.js"></script>
  <script src="assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="assets/js/dashboard.min.js"></script>
  <!----        Text Editor        ----->
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/ckeditor/4.7.2/ckeditor.js"></script>
  <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/dropzone/5.2.0/min/dropzone.min.js"></script>
  <script type="text/javascript" src="<?=base_url();?>/assets/themes/admin/js/blogs.js?v=3.4.5"></script>
    <!----        Text Editor        ----->

    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/dropzone/5.2.0/min/dropzone.min.js?v=3.4.5"></script>
</body>

</html>
