<?php $this->load->view('admin/inc/header');?>
<style type="text/css">
 
/* The message box is shown when the user clicks on the password field */
#message {
  display:none;
  background: #f1f1f1;
  color: #000;
  position: relative;
  padding: 20px;
  margin-top: 10px;
}

#message p {
  padding: 10px 35px;
  font-size: 18px;
}

/* Add a green text color and a checkmark when the requirements are right */
.valid {
  color: green;
}

.valid:before {
  position: relative;
  left: -35px;
  content: "✔";
}

/* Add a red text color and an "x" when the requirements are wrong */
.invalid {
  color: red;
}

.invalid:before {
  position: relative;
  left: -35px;
  content: "✖";
}
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
                               <form action="#" method="post" onSubmit = "return checkPassword(this)">
                                <input type="password" tooltip="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" style="color:black" id="password" placeholder="Password" name="changepswd" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" 
                                           title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" required>
                                <input type="password"style="color:black" id="confirm_password" placeholder="Repeat Password" name="changepswd2" required="">
                                <input type="submit" class="send" value="Update Password">
                              </form>
                              </div>

                              <div id="message">
                                <h3>Password must contain the following:</h3>
                                <p id="letter" class="invalid">A <b>lowercase</b> letter</p>
                                <p id="capital" class="invalid">A <b>capital (uppercase)</b> letter</p>
                                <p id="number" class="invalid">A <b>number</b></p>
                                <p id="length" class="invalid">Minimum <b>8 characters</b></p>
                              </div>
                                  
                          </div>
                        </form>
                  
                    <div class="clearfix"></div><br><br><br>
                    <!-- /.box -->
               
            </div>
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


  <script> 
          var password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password");

     function validatePassword(){
      if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
      } else {
        confirm_password.setCustomValidity('');
      }
    }

    password.onchange = validatePassword;
    confirm_password.onkeyup = validatePassword;
        </script> 

<script>
var myInput = document.getElementById("password","confirm_password");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");
var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");


// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  if(password.value != confirm_password.value) {
        confirm_password.setCustomValidity("Passwords Don't Match");
      } else {
        confirm_password.setCustomValidity('');
      }
}
</script>
</body>

</html>
