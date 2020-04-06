<?php $this->load->view('admin/inc/header');?>
<style type="text/css">
 
 </style>
   <link rel='stylesheet' id='forms-css' href='<?=base_url();?>assets/wp-content/admin/reset.css' type='text/css' media='all' />
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
                            <h3 class="box-title"><?=$heading;?></h3>
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
                        <form class="form-horizontal" method="post" action="<?=base_url('admin/changePassword');?>">
  
                          <div class="modal-body">
                            <div class="signin-form reset-password">
                               <form action="#" method="post">
                                <input type="password" style="color:black" placeholder="Password" name="changepswd" required="">
                                <input type="password"style="color:black" placeholder="Repeat Password" name="changepswd2" required="">
                                <input type="submit" class="send" value="Update Password">
                              </form>
                          
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
  <script src="../assets/vendor/jquery/jquery.min.js"></script>
  <script src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

  <!-- Custom scripts for all pages-->
  <script src="../assets/js/dashboard.min.js"></script>


  <script type="text/javascript">
    $(document).ready(function(){
        $('[data-toggle="tooltip"]').tooltip();
    });
</script>
</body>

</html>
