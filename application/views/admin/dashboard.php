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

          <!-- Page Heading -->
          <div class="d-sm-flex align-items-center justify-content-between mb-4">
            <h1 class="h3 mb-0 text-gray-800">Cards</h1>
            <input type="text" name="" id="editor1">
            <textarea type="text" name="" id="editor1"></textarea>
          </div>
      <style>
      .border-blue{
          /* border: 1px solid #ccc!important; */
          border-style: hidden hidden solid hidden;
          border-radius: 16px;
          padding: 17px 18px;
          background: white;
      }

      </style>

    <br>

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
              </div>
          </div>
          </div>
    </section>
    <!-- Edit City end -->


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


  <script type="text/javascript">
$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
});
</script>
</body>

</html>
