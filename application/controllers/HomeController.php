<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class HomeController extends CI_Controller {
 	function __construct(){
		/* Session Checking Start*/
		parent::__construct();
		$this->load->model(['Home_model']);
		 
         
	}
	public function index()
	{
		$where = array("page"=>'home');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$this->load->view('home',$data);
	}
	public function about()
	{
		$where = array("page"=>'about');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$this->load->view('about',$data);
	}
	public function contact_us()
	{
		$where = array("page"=>'about');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$this->load->view('contact_us',$data);
	}
	public function request_analysis()
	{
		$where = array("page"=>'about');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$this->load->view('request_analysis',$data);
	}
	public function seo_services()
	{
		$where = array("page"=>'about');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$this->load->view('seo_services',$data);
	} 
	public function smm_services()
	{
		$where = array("page"=>'about');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$this->load->view('smm_services',$data);
	}
	public function web_services()
	{
		$where = array("page"=>'about');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$this->load->view('web_services',$data);
	}
	public function ppc_services()
	{
		$where = array("page"=>'about');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$this->load->view('ppc_services',$data);
	}
	public function content_services()
	{
		$where = array("page"=>'about');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$this->load->view('content_services',$data);
	}
	public function design_services()
	{
		$where = array("page"=>'about');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		$this->load->view('design_services',$data);
	}


	


	



	
}
