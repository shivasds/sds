<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class AboutController extends CI_Controller {
 	function __construct(){
		/* Session Checking Start*/
		parent::__construct(); 
		$this->load->model('About_model'); 
		$this->load->library('upload');
       
	}
	public function index()
	{
		// $where = array("page"=>'home');
		 $data['about'] = $this->About_model->get_table_data('about',$where);
		// if (!$this->session->userdata('is_loggedin')) { 
  //               redirect(base_url()."login"); 
  //       }  
        if($this->input->post())
        {
            $data = array(
                "content_1" => $this->input->post("content_1"),
                "content_2" => $this->input->post("content_2"),
                "content_3" => $this->input->post("content_3"),
                "content_4" => $this->input->post("content_4"),
                "youtube" => $this->input->post("youtube")
            );
            //print_r($data);die;
            $bool = $this->About_model->about_content_insert($data);
            if($bool)
            {
                    $this->session->set_flashdata('success', 'Updated Successfully');
                    redirect('admin/about');
                } else {
                    $this->session->set_flashdata('error', 'Image is mandatory');
                    redirect('admin/about');
                }
        }
		$this->load->view('admin/about/about',$data);
	} 

 
}
