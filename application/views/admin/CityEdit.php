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

                        <div class="table-title">
                            <div class="row">
                                <div class="col-sm-8"><h2>Edit <b>City</b></h2></div>
                                <div class="col-sm-4">
                                    <div class="search-box">
                                        <i class="material-icons">&#xE8B6;</i>
                                        <input type="text" class="form-control" placeholder="Search&hellip;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <table class="table table-striped table-hover table-bordered">
                                  <thead>
                                      <tr>
                                          <th>#</th>
                                          <th>Name <i class="fa fa-sort"></i></th>
                                          <th>Address</th>
                                          <th>City <i class="fa fa-sort"></i></th>
                                          <th>Pin Code</th>
                                          <th>Country <i class="fa fa-sort"></i></th>
                                          <th>Actions</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                          <td>1</td>
                                          <td>Thomas Hardy</td>
                                          <td>89 Chiaroscuro Rd.</td>
                                          <td>Portland</td>
                                          <td>97219</td>
                                          <td>USA</td>
                                          <td>
                                            <a href="#" class="view" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                                              <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                              <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>2</td>
                                          <td>Maria Anders</td>
                                          <td>Obere Str. 57</td>
                                          <td>Berlin</td>
                                          <td>12209</td>
                                          <td>Germany</td>
                                          <td>
                                        <a href="#" class="view" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                                              <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                              <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>3</td>
                                          <td>Fran Wilson</td>
                                          <td>C/ Araquil, 67</td>
                                          <td>Madrid</td>
                                          <td>28023</td>
                                          <td>Spain</td>
                                          <td>
                                        <a href="#" class="view" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                                              <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                              <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>4</td>
                                          <td>Dominique Perrier</td>
                                          <td>25, rue Lauriston</td>
                                          <td>Paris</td>
                                          <td>75016</td>
                                          <td>France</td>
                                          <td>
                                        <a href="#" class="view" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                                              <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                              <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                                          </td>
                                      </tr>
                                      <tr>
                                          <td>5</td>
                                          <td>Martin Blank</td>
                                          <td>Via Monte Bianco 34</td>
                                          <td>Turin</td>
                                          <td>10100</td>
                                          <td>Italy</td>
                                          <td>
                                    <a href="#" class="view" title="View" data-toggle="tooltip"><i class="material-icons">&#xE417;</i></a>
                                              <a href="#" class="edit" title="Edit" data-toggle="tooltip"><i class="material-icons">&#xE254;</i></a>
                                              <a href="#" class="delete" title="Delete" data-toggle="tooltip"><i class="material-icons">&#xE872;</i></a>
                                          </td>
                                      </tr>        
                                  </tbody>
                        </table> 
                      <div class="clearfix">
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
                      </div>
                 </div>   
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
