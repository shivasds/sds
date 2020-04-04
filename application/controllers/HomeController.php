<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class HomeController extends CI_Controller {
 	function __construct(){
		/* Session Checking Start*/
		parent::__construct();
		$this->load->model(['Home_model','About_model','Testimonials_model']);
		$social_media = $this->Home_model->get_table_data('social_media');    
	}
	public function index()
	{
		$where = array("page"=>'home');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$data['testimonials'] = $this->Testimonials_model->get_table_data('testimonials');
		$this->load->view('home',$data);
	}
	public function about()
	{
		$where = array("page"=>'About');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$data['testimonials'] = $this->Testimonials_model->get_table_data('testimonials');
		$data['about'] = $this->About_model->get_table_data('about');
		$this->load->view('about',$data);
	}
	public function contact_us()
	{
		$where = array("page"=>'contact-us');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$data['testimonials'] = $this->Testimonials_model->get_table_data('testimonials');
		$this->load->view('contact_us',$data);
	}
	public function request_analysis()
	{
		$where = array("page"=>'request-analysis');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$data['testimonials'] = $this->Testimonials_model->get_table_data('testimonials');
		$this->load->view('request_analysis',$data);
	}
	public function seo_services()
	{
		$where = array("page"=>'seo-services');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$data['testimonials'] = $this->Testimonials_model->get_table_data('testimonials');
		$this->load->view('seo_services',$data);
	} 
	public function smm_services()
	{
		$where = array("page"=>'smm-services');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$data['testimonials'] = $this->Testimonials_model->get_table_data('testimonials');
		$this->load->view('smm_services',$data);
	}
	public function web_services()
	{
		$where = array("page"=>'web-services');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$data['testimonials'] = $this->Testimonials_model->get_table_data('testimonials');
		$this->load->view('web_services',$data);
	}
	public function ppc_services()
	{
		$where = array("page"=>'ppc-services');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$data['testimonials'] = $this->Testimonials_model->get_table_data('testimonials');
		$this->load->view('ppc_services',$data);
	}
	public function content_services()
	{
		$where = array("page"=>'content-services');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$data['testimonials'] = $this->Testimonials_model->get_table_data('testimonials');
		$this->load->view('content_services',$data);
	}
	public function design_services()
	{
		$where = array("page"=>'design-services');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$data['testimonials'] = $this->Testimonials_model->get_table_data('testimonials');
		$this->load->view('design_services',$data);
	}
	public function Contact_mail($page='')
	{ 
			$name = $this->input->post('inputName');
			$phone =  $this->input->post("inputPhone" );
			$address = $this->input->post("inputAddress");
			$webiste = $this->input->post("website");
			$email = $this->input->post("email");
			$msg = "
			<!DOCTYPE html>
			<html>
			<head>
				<title></title>
				<style>
table {
  border-collapse: collapse;
  width:100%;
}

table, td, th {
  border: 1px solid black;
}
</style>
			</head>
			<body>
			<table>
			<tr><th colspan=2>SDS Contact Form</th></tr>
			<tr><td>Name</td><td>$name</td></tr>
			<tr><td>Phone</td><td>$phone</td></tr>
			<tr><td>address</td><td>$addres</td></tr>
			<tr><td>Website</td><td>$webiste</td></tr>
			<tr><td>Email</td><td>$email</td></tr>
			</table>
			</body>
			</html>


			";
		 	 $this->load->library('email');
            
            $this->email->initialize(email_config());

            $this->email->from("info@secondsdigital.com", "Admin");
            $this->email->to("shiva@secondsdigital.com,pratyush@secondsdigital.com");

            $this->email->subject("SDS Contact Form Lead");
            $this->email->message($msg);

            $sent  = $this->email->send();
            if($sent)
            {
            	$this->session->set_flashdata('success', 'Thankyou For Contacting us We will get back to You soon!');
            	if(!$page)
                    redirect('AdminController/add_testimonial');
                else
                {
                	redirect('About');
                }
                } else {
                    $this->session->set_flashdata('error', 'Failed To sent Message');
                    redirect('AdminController/add_testimonial');
                }
	}

	


	



	
}
