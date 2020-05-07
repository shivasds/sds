     <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
		<div class="modal-dialog" role="document">
			<div class="modal-content">
			<div class="modal-header">
				<h4 class="modal-title" id="exampleModalLabel">Contact Us</h4>
				<button type="button" class="close" data-dismiss="modal" aria-label="Close">
				<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div class="modal-body">
			
					<div class="contact-form">
					<form action="<?=base_url("HomeController/Contact_mail");?>" method="post">
                   
						<div class="row">
						<div class="col-25">
							<label for="inputName">Name</label>
						</div>
						<div class="col-75">
							<input type="text"  class="form-control" id="inputName" name="inputName" placeholder="Name">
						</div>
						</div>

						<div class="row">
						<div class="col-25">
							<label for="inputPhone">Phone</label>
						</div>
						<div class="col-75">
							<input type="Phone" class="form-control" id="inputPhone" name="inputPhone" placeholder="Phone">
						</div>
						</div>

                        <div class="row">
						<div class="col-25">
							<label for="Email">Email</label>
						</div>
						<div class="col-75">
							<input  type="email" class="form-control" id="inputPhone" name="email" placeholder="Email">
						</div>
						</div>

                        <div class="row">
						<div class="col-25">
							<label for="inputAddress">Address</label>
						</div>
						<div class="col-75">
							<input  type="text" class="form-control" id="inputAddress" name="inputAddress" placeholder="1234 Main St">
						</div>
						</div>
                        
                        <div class="row">
						<div class="col-25">
							<label for="inputAddress">Website</label>
						</div>
						<div class="col-75">
							<input type="text" class="form-control" id="website" name="website" placeholder="www.website.com">
						</div>
						</div>
                        
						<div class="row">
						<div class="col-25">
							<label for="subject">Subject</label>
						</div>
						<div class="col-75">
						<textarea rows="3" cols="20" id="message" name="message" placeholder="Write something.." style="width:100%"></textarea>
                        </div>
						</div>

						<button type="submit" class="btn btn-primary" style="float: right;margin-top: 10px;">Submit</button>
						
					</form>
					</div>

			</div>
			<div class="modal-footer">
				
			</div>
			</div>
		</div>
	</div>
	<!-- Modal end-->


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

	


	
