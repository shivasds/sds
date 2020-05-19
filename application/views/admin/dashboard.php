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

        <h1>Welcome To Dashboard</h1>

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
  <script type="text/javascript" src="<?=base_url();?>/assets/themes/admin/js/blogs.js?v=3.4.5"></script>
    <!----        Text Editor        ----->

    <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/dropzone/5.2.0/min/dropzone.min.js?v=3.4.5"></script>
</body>

</html>
