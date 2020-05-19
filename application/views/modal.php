	<style>
        .modal.left .modal-content {
        top:120px;
            background-image: url(assets/img/contact-map1.jpg);
        }
        .btn-cobtact-modal{
            background-color: #20b120;
            border: #20b120;
            color: #fff;
            border-radius: 100px!important;
            font-size: 20px;
            padding: 10px 40px;
        }
        .btn-cobtact-modal:hover{
            background-color: #20b120;
            color: #fff;
        }
	</style> 
	


<div class="modal left fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
	  <h3 class="modal-title" id="exampleModalLabel"  style=" text-align: center;color: #ffffff;font-weight: 500;">Connect With Us</h3>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
			
					<div class="contact-form">
					<form action="<?=base_url('HomeController/Contact_mail/').$this->uri->segment(1);?>" method="post">
                         <div class="input-container-modal">
                             <i class="fa fa-user form-icon-modal"></i>
                              <input type="Name" class="form-control" id="inputName" name="inputName" placeholder="Name" required>
                        </div>

                        <div class="input-container-modal">
                             <i class="fa fa-phone form-icon-modal"></i>
                             <input type="Phone" class="form-control" id="inputPhone" name="inputPhone" placeholder="Phone" required>
                        </div>

                         <center> <button type="submit" class="btn-cobtact-modal" style=" ">Get In Touch</button> </center> 
                    </form>
					</div>

			</div>
   
    </div>
  </div>
</div>


	<div class="modal fade" id="FreeCompetitorModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title" id="exampleModalLabel"  style=" text-align: center;color: #ffffff;font-weight: 500;">Get Your Free Competitor
            Analysis</h3>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
			
					<div class="contact-form">
					<form action="<?=base_url('HomeController/Contact_mail/').$this->uri->segment(1);?>" method="post">
                                                   <div class="input-container-modal">
                                                        <i class="fa fa-user form-icon-modal"></i>
                                                        <input type="Name" class="form-control" id="inputName" name="inputName" placeholder="Name">
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-phone form-icon-modal"></i>
                                                        <input type="Phone" class="form-control" id="inputPhone" name="inputPhone" placeholder="Phone">
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-envelope form-icon-modal"></i>
                                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                                                    </div>
                                                    
                                                    <div class="input-container-modal">
                                                        <i class="fa fa-newspaper-o  form-icon-modal "></i>
                                                        <input type="text" class="form-control" id="website" name="website" placeholder="www.website.com">
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-paper-plane form-icon-modal"></i>
														<textarea rows="3" cols="20" id="message" name="message" placeholder="Write something.." style="width:100%"></textarea>
                                                  </div>

                                                <center> <button type="submit" class="btn-secondary-modal" style=" ">Submit</button> </center> 
                                                </form>
					</div>

			</div>
			<div class="modal-footer">
				
			</div>
			</div>
		</div>
	</div>
	<!-- Modal end-->

	<div class="modal fade" id="RequestFreeQuote" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title" id="exampleModalLabel"  style=" text-align: center;color: #ffffff;font-weight: 500;">Request a Free Quote
           </h3>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
			
					<div class="contact-form">
					<form action="<?=base_url('HomeController/Contact_mail/').$this->uri->segment(1);?>" method="post">
                                                   <div class="input-container-modal">
                                                        <i class="fa fa-user form-icon-modal"></i>
                                                        <input type="Name" class="form-control" id="inputName" name="inputName" placeholder="Name" required>
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-phone form-icon-modal"></i>
                                                        <input type="Phone" class="form-control" id="inputPhone" name="inputPhone" placeholder="Phone" required>
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-envelope form-icon-modal"></i>
                                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                                                    </div>
                                                    
                                                    <div class="input-container-modal">
                                                        <i class="fa fa-newspaper-o  form-icon-modal "></i>
                                                        <input type="text" class="form-control" id="website" name="website" placeholder="www.website.com">
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-paper-plane form-icon-modal"></i>
														<textarea rows="3" cols="20" id="message" name="message" placeholder="Write something.." style="width:100%"></textarea>
                                                  </div>

                                                <center> <button type="submit" class="btn-secondary-modal" style=" ">Submit</button> </center> 
                                                </form>
					</div>

			</div>
			<div class="modal-footer">
				
			</div>
			</div>
		</div>
	</div>


	<div class="modal fade" id="getintouchModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title" id="exampleModalLabel"  style=" text-align: center;color: #ffffff;font-weight: 500;">Get In Touch With Us </h3>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
			
					<div class="contact-form">
					<form action="<?=base_url('HomeController/Contact_mail/').$this->uri->segment(1);?>" method="post">
                                                   <div class="input-container-modal">
                                                        <i class="fa fa-user form-icon-modal"></i>
                                                        <input type="Name" class="form-control" id="inputName" name="inputName" placeholder="Name" required>
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-phone form-icon-modal"></i>
                                                        <input type="Phone" class="form-control" id="inputPhone" name="inputPhone" placeholder="Phone" required>
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-envelope form-icon-modal"></i>
                                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                                                    </div>
                                                    
                                                    <div class="input-container-modal">
                                                        <i class="fa fa-newspaper-o  form-icon-modal "></i>
                                                        <input type="text" class="form-control" id="website" name="website" placeholder="www.website.com">
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-paper-plane form-icon-modal"></i>
														<textarea rows="3" cols="20" id="message" name="message" placeholder="Write something.." style="width:100%"></textarea>
                                                 </div>

                                                <center> <button type="submit" class="btn-secondary-modal" style=" ">Submit</button> </center> 
                                                </form>
					</div>

			</div>
			<div class="modal-footer">
				
			</div>
			</div>
		</div>
	</div>
	<!-- Modal end-->

	<div class="modal fade" id="RequestFreeAudit" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title" id="exampleModalLabel"  style=" text-align: center;color: #ffffff;font-weight: 500;">Free Seo Audit
           </h3>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
			
					<div class="contact-form">
					<form action="<?=base_url('HomeController/Contact_mail/').$this->uri->segment(1);?>" method="post">
                                                   <div class="input-container-modal">
                                                        <i class="fa fa-user form-icon-modal"></i>
                                                        <input type="Name" class="form-control" id="inputName" name="inputName" placeholder="Name" required>
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-phone form-icon-modal"></i>
                                                        <input type="Phone" class="form-control" id="inputPhone" name="inputPhone" placeholder="Phone" required>
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-envelope form-icon-modal"></i>
                                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                                                    </div>
                                                    
                                                    <div class="input-container-modal">
                                                        <i class="fa fa-newspaper-o  form-icon-modal "></i>
                                                        <input type="text" class="form-control" id="website" name="website" placeholder="www.website.com">
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-paper-plane form-icon-modal"></i>
														<textarea rows="3" cols="20" id="message" name="message" placeholder="Write something.." style="width:100%"></textarea>
                                                  </div>

                                                <center> <button type="submit" class="btn-secondary-modal" style=" ">Submit</button> </center> 
                                                </form>
					</div>

			</div>
			<div class="modal-footer">
				
			</div>
			</div>
		</div>
	</div>

	<div class="modal fade" id="talktoourexperts" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title" id="exampleModalLabel"  style=" text-align: center;color: #ffffff;font-weight: 500;">Talk To Our Experts
           </h3>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
			
					<div class="contact-form">
					<form action="<?=base_url('HomeController/Contact_mail/').$this->uri->segment(1);?>" method="post">
                                                   <div class="input-container-modal">
                                                        <i class="fa fa-user form-icon-modal"></i>
                                                        <input type="Name" class="form-control" id="inputName" name="inputName" placeholder="Name" required>
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-phone form-icon-modal"></i>
                                                        <input type="Phone" class="form-control" id="inputPhone" name="inputPhone" placeholder="Phone" required>
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-envelope form-icon-modal"></i>
                                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                                                    </div>
                                                    
                                                    <div class="input-container-modal">
                                                        <i class="fa fa-newspaper-o  form-icon-modal "></i>
                                                        <input type="text" class="form-control" id="website" name="website" placeholder="www.website.com">
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-paper-plane form-icon-modal"></i>
                                                        <textarea rows="3" cols="20" id="message" name="message" placeholder="Write something.." style="width:100%"></textarea>
                                                    </div>

                                                <center> <button type="submit" class="btn-secondary-modal" style=" ">Submit</button> </center> 
                                                </form>
					</div>

			</div>
			<div class="modal-footer">
				
			</div>
			</div>
		</div>
	</div>


	<div class="modal fade" id="talkBusiness" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title" id="exampleModalLabel"  style=" text-align: center;color: #ffffff;font-weight: 500;">Lets Talk Business
           </h3>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
			
					<div class="contact-form">
					<form action="<?=base_url('HomeController/Contact_mail/').$this->uri->segment(1);?>" method="post">
                                                   <div class="input-container-modal">
                                                        <i class="fa fa-user form-icon-modal"></i>
                                                        <input type="Name" class="form-control" id="inputName" name="inputName" placeholder="Name" required>
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-phone form-icon-modal"></i>
                                                        <input type="Phone" class="form-control" id="inputPhone" name="inputPhone" placeholder="Phone" required>
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-envelope form-icon-modal"></i>
                                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                                                    </div>
                                                    
                                                    <div class="input-container-modal">
                                                        <i class="fa fa-newspaper-o  form-icon-modal "></i>
                                                        <input type="text" class="form-control" id="website" name="website" placeholder="www.website.com">
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-paper-plane form-icon-modal"></i>
														<textarea rows="3" cols="20" id="message" name="message" placeholder="Write something.." style="width:100%"></textarea>
                                                    </div>

                                                <center> <button type="submit" class="btn-secondary-modal" style=" ">Submit</button> </center> 
                                                </form>
					</div>

			</div>
			<div class="modal-footer">
				
			</div>
			</div>
		</div>
	</div>
<!-- Compant Modal -->
	<div class="modal fade" id="talkBusinessUi" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title" id="exampleModalLabel"  style=" text-align: center;color: #ffffff;font-weight: 500;">Lets Talk Business
           </h3>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
			
					<div class="contact-form">
					<form action="<?=base_url('HomeController/Contact_mail/').$this->uri->segment(1);?>" method="post">
                                                   <div class="input-container-modal">
                                                        <i class="fa fa-user form-icon-modal"></i>
                                                        <input type="Name" class="form-control" id="inputName" name="inputName" placeholder="Name" required>
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-phone form-icon-modal"></i>
                                                        <input type="Phone" class="form-control" id="inputPhone" name="inputPhone" placeholder="Phone" required>
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-envelope form-icon-modal"></i>
                                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                                                    </div>
                                                    
                                                    <div class="input-container-modal">
                                                        <i class="fa fa-newspaper-o  form-icon-modal "></i>
                                                        <input type="text" class="form-control" id="website" name="website" placeholder="Your Company">
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-paper-plane form-icon-modal"></i>
														<textarea rows="3" cols="20" id="message" name="message" placeholder="Write something.." style="width:100%"></textarea>
                                                    </div>

                                                <center> <button type="submit" class="btn-secondary-modal" style=" ">Submit</button> </center> 
                                                </form>
					</div>

			</div>
			<div class="modal-footer">
				
			</div>
			</div>
		</div>
	</div>

	<div class="modal fade" id="requesttrial" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h3 class="modal-title" id="exampleModalLabel"  style=" text-align: center;color: #ffffff;font-weight: 500;">Request A Free Trial
           </h3>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
			
					<div class="contact-form">
					<form action="<?=base_url('HomeController/Contact_mail/').$this->uri->segment(1);?>" method="post">
                                                   <div class="input-container-modal">
                                                        <i class="fa fa-user form-icon-modal"></i>
                                                        <input type="Name" class="form-control" id="inputName" name="inputName" placeholder="Name" required>
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-phone form-icon-modal"></i>
                                                        <input type="Phone" class="form-control" id="inputPhone" name="inputPhone" placeholder="Phone" required>
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-envelope form-icon-modal"></i>
                                                        <input type="email" class="form-control" id="email" name="email" placeholder="Email">
                                                    </div>
                                                    
                                                    <div class="input-container-modal">
                                                        <i class="fa fa-newspaper-o  form-icon-modal "></i>
                                                        <input type="text" class="form-control" id="website" name="website" placeholder="Your Company">
                                                    </div>

                                                    <div class="input-container-modal">
                                                        <i class="fa fa-paper-plane form-icon-modal"></i>
														<textarea rows="3" cols="20" id="message" name="message" placeholder="Write something.." style="width:100%"></textarea>
                                                    </div>

                                                <center> <button type="submit" class="btn-secondary-modal" style=" ">Submit</button> </center> 
                                                </form>
					</div>

			</div>
			<div class="modal-footer">
				
			</div>
			</div>
		</div>
	</div>

	


	
