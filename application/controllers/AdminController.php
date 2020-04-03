<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class AdminController extends CI_Controller {
 	function __construct(){
		/* Session Checking Start*/
		parent::__construct();
		$this->load->model(['Home_model']);
		 
         
	}
	public function index()
	{
		$where = array("page"=>'home');
		$data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
		if (!$this->session->userdata('is_loggedin')) { 
                redirect(base_url()."login"); 
        } 
        // else
        // {
        // 	 redirect(base_url()."login"); 
        // }
		$this->load->view('admin/dashboard',$data);
	} 

	public function CityAdd()
	{
		$this->load->view('admin/CityAdd');
	}
	
	public function CityEdit()
	{
		$this->load->view('admin/CityEdit');
	}
}
