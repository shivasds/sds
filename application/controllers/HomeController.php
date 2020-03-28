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
}
