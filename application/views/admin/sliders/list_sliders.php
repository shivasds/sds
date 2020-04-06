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
  
            <!-- Edit City Start -->
            <section class="content">
                <div class="row">
                    <div class="col-md-10 col-md-offset-1 border-blue">
                        <!-- Horizontal Form -->
                        <div class="">

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
                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-8"><h2>Edit <b>Sliders</b></h2></div>
                               <!--  <div class="col-sm-4">
                                    <div class="search-box">
                                        <i class="material-icons">&#xE8B6;</i>
                                        <input type="text" class="form-control" placeholder="Search&hellip;">
                                    </div>
                                </div> -->
                            </div>
                        </div>
                        <table class="table table-striped table-hover table-bordered">
                                  <thead>
                                      <tr>
                                          <th>#</th>
                                          <th>Image</th>
                                          <th>Type <i class="fa fa-sort"></i></th> 
                                          <th>Image Alt <i class="fa fa-sort"></i></th>
                                          <th>Actions</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                        <?php
                                        $i=1;
                                        $banner= "";
                                        foreach ($testimonials as $test) { 
                                          if($test['type']==1)
                                            $banner ="Desktop Banner";
                                          else
                                            $banner ="Mobile Banner";
                                          ?>
                                          <td><?=$i++?></td> 
                                          <td><?="<img src=".base_url("uploads/sliders/".$test['image'])." style='width: 40%;height: 20%;'>"?></td>
                                          <td><?=$test['img_alt']?></td>
                                          <td><?=$banner?></td>
                                          <td>
                                            <!-- <a href="#" class="view" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a> -->
                                              <a href="<?=base_url('admin/edit_slider/').$test['id'];?>" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                              <a href="<?=base_url('admin/delete_slider/').$test['id'];?>" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                                          </td>
                                      </tr>
                                      <?php
                                      }
                                        ?>
                                       
                                  </tbody>
                        </table> 
                     <!--  <div class="clearfix">
                        <div class="hint-text">Showing <b>5</b> out of <b>25</b> entries</div>
                          <ul class="pagination">
                              <li class="page-item disabled"><a href="#"><i class="fa fa-angle-double-left"></i></a></li>
                              <li class="page-item"><a href="#" class="page-link">1</a></li>
                              <li class="page-item"><a href="#" class="page-link">2</a></li>
                              <li class="page-item active"><a href="#" class="page-link">3</a></li>
                              <li class="page-item"><a href="#" class="page-link">4</a></li>
                              <li class="page-item"><a href="#" class="page-link">5</a></li>
                              <li class="page-item"><a href="#" class="page-link"><i class="fa fa-angle-double-right"></i></a></li>
                          </ul>
                      </div> -->
                 </div>   
                    </div>
                </div>
               
            </section>
            <!-- Edit City end -->


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
