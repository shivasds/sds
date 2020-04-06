<?php $this->load->view('admin/inc/header');?>

<body id="page-top">

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

        <style>
        .border-blue{
            /* border: 1px solid #ccc!important; */
            border-style: hidden hidden solid hidden;
            border-radius: 16px;
            padding: 17px 18px;
            background: white;
          }

        </style>
        <!-- ADD City start -->
        <section class="content">
            <div class="row">
                <div class="col-md-10 col-md-offset-1 border-blue">
                    <!-- Horizontal Form -->
                    <div class="">
                        <div class="box-header with-border">
                            <h3 class="box-title">Edit Sliders</h3>
                        </div>

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
                        <!-- /.box-header -->
                        <hr>
                        <!-- form start -->
                        <form class="form-horizontal" method="post" action="<?=base_url('admin/update_sliders/'.$test[0]['id']);?>" enctype="multipart/form-data">   
                          <div class="box-body">                                 
                                <div class="form-group">
                                    <label for="name" class="col-sm-2 control-label">Upload Image</label>

                                    <div class="col-sm-12 ">
                                       <input type="file" name="slider">
                                       <input type="hidden" name="image" value="<?=$test[0]['image']?>">
                                        <span class=""></span>
                                    </div>
                                </div>  
                            </div>  
                                <div class="form-group">
                                    <label for="phone" class="col-sm-2 control-label">Img Alt</label>

                                    <div class="col-sm-12">
                                        <input type="text" name="img_alt" class="form-control" placeholder="Type the image alt here" value="<?=$test[0]['img_alt']?>">
                                        <span class=""></span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="phone" class="col-sm-2 control-label">Type</label>

                                    <div class="col-sm-12">
                                        <select name="type">
                                          <option value="select">Select</option>
                                          <option value="1"<?php if($test[0]['type']==1) echo "selected"; ?>>Desktop Banner</option>
                                          <option value="2" <?php if($test[0]['type']==2) echo "selected"; ?>>Mobile Banner</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="form-group">
                                   
                                    <div class="col-sm-12">
                                        <div class="box-footer">
                        <input type="submit" class="btn btn-primary" id="submit1" value="Submit">
                        <input type="button" class="btn btn-default" style="float: right"value="Back">
                    </div>
                                    </div>
                                </div>
                            <!-- /.box-body --> 
                        </form>
                    </div>
                    <div class="clearfix"></div><br><br><br>
                    <!-- /.box -->
                </div>
            </div>
        </section> 
        <!-- ADD City end -->

        <br>
    </div>
      </div>
      <!-- End of Main Content -->

      
  <!-- /. start box-footer -->
  <?php $this->load->view('admin/inc/footer');?>
      <!-- /.box-footer -->

    </div>
    <!-- End of Content Wrapper -->

  </div>
  <!-- End of Page Wrapper -->

  <!-- Scroll to Top Button-->
  <a class="scroll-to-top rounded" href="#page-top">
    <i class="fas fa-angle-up"></i>
  </a>

  <!-- Logout Modal-->
  <div class="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button class="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div class="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div class="modal-footer">
          <button class="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a class="btn btn-primary" href="<?=base_url('logout');?>">Logout</a>
        </div>
      </div>
    </div>
  </div>

  <!-- Bootstrap core JavaScript-->
  <script src="<?=base_url();?>assets/vendor/jquery/jquery.min.js"></script>
  <script src="<?=base_url();?>assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="<?=base_url();?>assets/js/dashboard.min.js"></script>


  <script type="text/javascript">
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
</script>
</body>

</html>
