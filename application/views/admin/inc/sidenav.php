

    <!-- Sidebar -->
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <!-- Sidebar - Brand -->
      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="<?=base_url('login');?>">
        <div class="sidebar-brand-icon ">
          <img src="<?=base_url();?>assets/img/logo.png" width="80%">
        </div>
      </a>
        <!-- <div class="sidebar-brand-text text-center mb-3" style="color: white;font-weight: 500;">SDS Admin </div> -->
            <!-- Divider -->
            <hr class="sidebar-divider my-0">

            <!-- Nav Item - Dashboard -->
            <!-- <li class="nav-item active"> -->
            <li class="<?= $this->uri->segment(2)== '' ? 'nav-item active' : 'nav-item' ?>">
                <a class="nav-link" href="<?=base_url('admin');?>">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>Home</span></a>
            </li>

          <!-- Divider -->
            <hr class="sidebar-divider">
             <!-- <li class="nav-item"> -->
            <li class="<?= $this->uri->segment(2) == 'about' ? 'nav-item active' : 'nav-item'  ?>">
                <a class="nav-link" href="<?=base_url('admin/about');?>">
                <i class="fas fa-fw fa-tachometer-alt"></i>
                <span>About</span></a>
            </li>

            <!-- Divider -->
            <hr class="sidebar-divider">
        <!-------content---------->
        <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFive" aria-expanded="true" aria-controls="collapseFive">
                <i class="fas fa-fw fa-cog"></i>
                <span>Page Content</span>
                </a>
                <div id="collapseFive" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                     <a class="<?= $this->uri->segment(2) == 'add_testimonial' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/home_page_content');?>">Home Page</a>
                    <a class="<?= $this->uri->segment(2) == 'list_testimonial' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/seo_content');?>">Seo Services</a> 
                    <a class="<?= $this->uri->segment(2) == 'list_testimonial' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/ppc_page_content');?>">PPC Services</a>
                    <a class="<?= $this->uri->segment(2) == 'list_testimonial' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/smm_page_content');?>">Smm Services</a>
                    <a class="<?= $this->uri->segment(2) == 'list_testimonial' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/web_services_page_content');?>">Web Services</a>
                    <a class="<?= $this->uri->segment(2) == 'list_testimonial' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/content_page_content');?>">Content Services</a>
                    <a class="<?= $this->uri->segment(2) == 'list_testimonial' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/design_page_content');?>">Design Services</a>
                </div>
                </div>
            </li> 
        <!------ content end ----------------->
        <!--------slider-------->
         <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseFour" aria-expanded="true" aria-controls="collapseFour">
                <i class="fas fa-fw fa-cog"></i>
                <span>Banners</span>
                </a>
                <div id="collapseFour" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <a class="<?= $this->uri->segment(2) == 'add_testimonial' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/add_slider');?>">Add Banner</a>
                    <a class="<?= $this->uri->segment(2) == 'list_testimonial' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/list_sliders');?>">Edit Banner</a>
                </div>
                </div>
            </li> 
            <!---------End Slider------>

            <!-- Nav Item - Pages Collapse Menu -->
             <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-cog"></i>
                <span>Testimonials</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <a class="<?= $this->uri->segment(2) == 'add_testimonial' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('AdminController/add_testimonial');?>">Add Testimonial</a>
                    <a class="<?= $this->uri->segment(2) == 'list_testimonial' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('AdminController/list_testimonial');?>">Edit Testimonial</a>
                </div>
                </div>
            </li> 
            
        <!-- Divider -->
            <hr class="sidebar-divider">


            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseThree">
                <i class="fas fa-fw fa-wrench"></i>
                <span>Meta Tags</span>
                </a>
                <div id="collapseUtilities" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <a class="<?= $this->uri->segment(2) == 'metatags/home' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/metatags/home');?>">HomaePage Meta Tags</a>
                    <a class="<?= $this->uri->segment(2) == 'metatags/About' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/metatags/About');?>">About Page Metatags</a>
                    <a class="<?= $this->uri->segment(2) == 'metatags/contact-us' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/metatags/contact-us');?>">Contact Page Metatags</a>
                    <a class="<?= $this->uri->segment(2) == 'metatags/blog' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/metatags/blog');?>">Blog Page Metatags</a>
                    <a class="<?= $this->uri->segment(2) == 'metatags/seo-services' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/metatags/seo-services');?>">Seo Page Metatags</a>
                    <a class="<?= $this->uri->segment(2) == 'metatags/ppc-services' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/metatags/ppc-services');?>">PPC Page Metatags</a>
                    <a class="<?= $this->uri->segment(2) == 'metatags/smm-services' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/metatags/smm-services');?>">SMM Page Metatags</a>
                    <a class="<?= $this->uri->segment(2) == 'metatags/web-services' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/metatags/web-services');?>">Web Services Metatags</a>
                    <a class="<?= $this->uri->segment(2) == 'metatags/content-services' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/metatags/content-services');?>">Content service Metatags</a>
                    <a class="<?= $this->uri->segment(2) == 'metatags/design-services' ? 'collapse-item active' : 'collapse-item'  ?>" href="<?=base_url('admin/metatags/design-services');?>">Design Services Metatags</a>
                   
                </div>
                </div>
            </li>

            <!-- <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                <i class="fas fa-fw fa-cog"></i>
                <span>Components</span>
                </a>
                <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <a class="collapse-item" href="<?=base_url('AdminController/CityAdd');?>">Add Page</a>
                    <a class="collapse-item" href="<?=base_url('AdminController/CityEdit');?>">Edit Page</a>
                </div>
                </div>
            </li> -->


            <!-- Divider -->
          <!--   <hr class="sidebar-divider">

            <!-- Nav Item - Pages Collapse Menu 
            <li class="nav-item">
                <a class="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapsePages" aria-expanded="true" aria-controls="collapsePages">
                <i class="fas fa-fw fa-folder"></i>
                <span>Pages</span>
                </a>
                <div id="collapsePages" class="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
                <div class="bg-white py-2 collapse-inner rounded">
                    <a class="collapse-item" href="login2.html">Login</a>
                    <a class="collapse-item" href="register.html">Register</a>
                    <a class="collapse-item" href="forgot-password.html">Forgot Password</a>
                
                
                </div>
                </div>
            </li> -->

        <!-- Divider -->
        <hr class="sidebar-divider">

            <!-- Nav Item - Tables --><!-- 
            <li class="nav-item">
                <a class="nav-link" href="tables.html">
                <i class="fas fa-fw fa-table"></i>
                <span>Tables</span></a>
            </li> -->

            <!-- Divider --><!-- 
            <hr class="sidebar-divider d-none d-md-block"> -->

            <!-- Sidebar Toggler (Sidebar) -->
            <!-- <div class="text-center d-none d-md-inline">
                <button class="rounded-circle border-0" id="sidebarToggle"></button>
            </div> -->

    </ul>
    <!-- end Sidebar -->