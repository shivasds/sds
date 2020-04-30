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
          
<section class="content">
    <div class="row">
        <div class="col-md-10 col-md-offset-1">
            <!-- Horizontal Form -->
            <div class="box box-info">
                <div class="box-header with-border">
                    <h3 class="box-title">Edit Blog</h3>
                </div>
                <!-- /.box-header -->
                <!-- form start -->
                <form class="form-horizontal" method="post" action="" enctype="multipart/form-data">
                    <div class="box-body">
                        <div class="form-group">
                            <label for="title" class="col-sm-2 control-label">Title</label>

                            <div class="col-sm-10 <?= form_error('title') ? 'has-error' : '' ?>">
                                <textarea name="title" class="form-control admin-blog-title " id="admin-blog-title" placeholder="Type the title here"><?= set_value('title') ?><?=$test[0]['title'];?></textarea>
                                <span class="<?= form_error('title') ? 'text-danger' : '' ?>"><?= form_error('title') ?></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="meta_title" class="col-sm-2 control-label">Meta Title</label>

                            <div class="col-sm-10 <?= form_error('meta_title') ? 'has-error' : '' ?>">
                                <input type="text" name="meta_title" class="form-control" id="inputEmail3" placeholder="Type the meta title here" value="<?=$test[0]['meta_title'];?>">
                                <span class="<?= form_error('meta_title') ? 'text-danger' : '' ?>"><?= form_error('meta_title') ?></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="meta_keywords" class="col-sm-2 control-label">Meta Keywords</label>

                            <div class="col-sm-10 <?= form_error('meta_keywords') ? 'has-error' : '' ?>">
                                <input type="text" name="meta_keywords" class="form-control" id="inputEmail3" placeholder="Type the meta keywords here" value="<?=$test[0]['meta_keywords'];?>">
                                <span class="<?= form_error('meta_keywords') ? 'text-danger' : '' ?>"><?= form_error('meta_keywords') ?></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="meta_desc" class="col-sm-2 control-label">Meta Description</label>
                            <div class="col-sm-10 <?= form_error('meta_desc') ? 'has-error' : '' ?>">
                                <textarea class="form-control" name="meta_desc" id="editor2" placeholder="Type the Meta Description Here" rows="5"><?=$test[0]['meta_desc'];?></textarea>
                                <span class="<?= form_error('meta_desc') ? 'text-danger' : '' ?>"><?= form_error('meta_desc') ?></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="author" class="col-sm-2 control-label">Author</label>

                            <div class="col-sm-10 <?= form_error('author') ? 'has-error' : '' ?>">
                                <input type="text" name="author" class="form-control" id="inputEmail3" placeholder="Type the author name here" value="<?=$test[0]['author'];?>">
                                <span class="<?= form_error('author') ? 'text-danger' : '' ?>"><?= form_error('author') ?></span>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="content" class="col-sm-2 control-label">Content</label>
                            <div class="col-sm-10 <?= form_error('content') ? 'has-error' : '' ?>">
                                <textarea class="form-control" name="content" id="first_content" placeholder="Type the Content Here" rows="5"><?=$test[0]['content'];?></textarea>
                                <span class="<?= form_error('content') ? 'text-danger' : '' ?>"><?= form_error('content') ?></span>
                            </div>
                        </div> 
                        <div class="form-group">
                            <label class="col-sm-2 control-label" for="exampleInputFile">Display Image</label>
                            <div class="col-sm-10 <?= form_error('uploadfile1') ? 'has-error' : '' ?>">
                                <input type="file" name="uploadfile1">(Image size 250 * 250)
                                <input type="hidden" name="image2" value="<?=$test[0]['image2'];?>">
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="col-sm-2 control-label" for="exampleInputFile">Display Image</label>
                            <div class="col-sm-10 <?= form_error('uploadfile') ? 'has-error' : '' ?>">
                                <input type="file" name="uploadfile">(Image size 1920 * 550)
                                <input type="hidden" name="image" value="<?=$test[0]['image'];?>">
                            </div>
                        </div>
                        
                         <div class="form-group">
                            <label for="alt_title" class="col-sm-2 control-label">Alt Title</label>
                            <div class="col-sm-10 <?= form_error('alt_title') ? 'has-error' : '' ?>">
                                <input name="alt_title" type="text" class="form-control" id="tags" placeholder="add title" value="<?=$test[0]['alt_title'];?>" />
                                <span class="<?= form_error('alt_title') ? 'text-danger' : '' ?>"><?= form_error('alt_title') ?></span>
                            </div>
                        </div>

                         <div class="form-group">
                            <label for="image_description" class="col-sm-2 control-label">Image Description</label>
                            <div class="col-sm-10 <?= form_error('image_description') ? 'has-error' : '' ?>">
                                <input name="image_description" type="text" class="form-control" id="image_description"  placeholder="Add description" value="<?=$test[0]['image_desc'];?>" />
                                <span class="<?= form_error('image_description') ? 'text-danger' : '' ?>"><?= form_error('image_description') ?></span>
                            </div>
                        </div>

                        
                        <div class="form-group">
                            <label for="date" class="col-sm-2 control-label">Date</label>

                            <div class="col-sm-10 <?= form_error('date') ? 'has-error' : '' ?>">
                                <input type="text" name="date" class="form-control" id="date" placeholder="Choose date" value="<?= set_value('date',date('Y-m-d')) ?>">
                                <span class="<?= form_error('date') ? 'text-danger' : '' ?>"><?= form_error('date') ?></span>
                            </div>
                        </div>
                    </div>
                    <!-- /.box-body -->
                    <div class="box-footer">
                        <button type="submit" class="btn btn-default" onclick="history.go(-1);">Back</button>
                        <button type="submit" class="btn btn-info pull-right">Update</button>
                    </div>
                    <!-- /.box-footer -->
                </form>
            </div>
            <div class="clearfix"></div><br><br><br>
            <!-- /.box -->
        </div>
    </div>
</section>
     



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
