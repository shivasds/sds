<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class AdminController extends CI_Controller {
 	function __construct(){
		/* Session Checking Start*/
		parent::__construct();
		$this->load->model('Home_model'); 
		$this->load->model('Testimonials_model'); 
		$this->load->library('upload');
		 
         
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
	public function add_testimonial()
	{ 

		if($this->input->post())
		{ 
			   if (isset($_FILES) && isset($_FILES["uploadfile"]['tmp_name']) && $_FILES["uploadfile"]['tmp_name']) {
                    $file = $_FILES["uploadfile"]['tmp_name'];
                    $path = './uploads/testimonials/';
                    if (!is_dir($path)) {
                        mkdir($path, 0777, TRUE);
                    }
                    $file_type = 'gif|jpg|jpeg|png';
                    $config['upload_path'] = $path; //give the path to upload the image in folder
        $config['remove_spaces'] = TRUE;
        $config['encrypt_name'] = TRUE; // for encrypting the name
        $config['allowed_types'] = $file_type;
        $config['max_size'] = '78000';
        $config['overwrite'] = FALSE;

                    $this->upload->initialize($config);
                    if (!$this->upload->do_upload('uploadfile')) {
                        $this->session->set_flashdata('error', $this->upload->display_errors());
                        redirect('AdminController/add_testimonial');
                    } else {
                        $image = $this->upload->data('file_name');
                    }
                    $data = array(
                        'name' => $this->input->post('name'),
                        'description' => $this->input->post('description'), 
                        'job_desc' => $this->input->post('job_desc'),
                        'works_at'=>$this->input->post('works_at'),
                        'photo' => $image,
                        'img_desc'=>$this->input->post('img_desc'), 
                        'img_alt'=>$this->input->post('img_alt') 
                    );  
                     $this->Testimonials_model->training_assignment_insert($data);
                    $this->session->set_flashdata('success', 'Testimonial added Successfully');
                    redirect('AdminController/add_testimonial');
                } else {
                    $this->session->set_flashdata('error', 'Image is mandatory');
                    redirect('AdminController/add_testimonial');
                }
		}

		 $this->load->view('admin/add_testimonial');
	}
	public function list_testimonial($value='')
	{
		$data['testimonials'] = $this->Home_model->get_table_data('testimonials');
		$this->load->view('admin/list_testimonials',$data); 
	}
	public function edit_testimonial($id='')
	{
		$where = array("id"=>$id);
		$data['test'] = $this->Home_model->get_table_data('testimonials',$where);

		$this->load->view('admin/edit_testimonials',$data); 
	}
	public function update_testimonial($id='')
	{
		if($this->input->post())
		 {
		 	if (isset($_FILES) && isset($_FILES["uploadfile"]['tmp_name']) && $_FILES["uploadfile"]['tmp_name']) {
                    $file = $_FILES["uploadfile"]['tmp_name'];
                    $path = './uploads/testimonials/';
                    if (!is_dir($path)) {
                        mkdir($path, 0777, TRUE);
                    }
                    $file_type = 'gif|jpg|jpeg|png';
                    $config['upload_path'] = $path; //give the path to upload the image in folder
        $config['remove_spaces'] = TRUE;
        $config['encrypt_name'] = TRUE; // for encrypting the name
        $config['allowed_types'] = $file_type;
        $config['max_size'] = '78000';
        $config['overwrite'] = FALSE;

                    $this->upload->initialize($config);
                    if (!$this->upload->do_upload('uploadfile')) {
                        $this->session->set_flashdata('error', $this->upload->display_errors());
                        redirect('AdminController/add_testimonial');
                    } else {
                        $image = $this->upload->data('file_name');
                    }
                }
                else
                {
                	$image=$this->input->post('image');
                }
                    $data = array(
                        'name' => $this->input->post('name'),
                        'description' => $this->input->post('description'), 
                        'job_desc' => $this->input->post('job_desc'),
                        'works_at'=>$this->input->post('works_at'),
                        'photo' => $image,
                        'img_desc'=>$this->input->post('img_desc'), 
                        'img_alt'=>$this->input->post('img_alt') 
                    );  
                    $this->Testimonials_model->updateRow($id,$data,'id','testimonials');
                    $this->session->set_flashdata('success', 'Testimonial Updated Successfully');
                    redirect('AdminController/list_testimonial');
               
		  
		 }
	}
	public function delete_testimonial($id='')
	{
		$this->Testimonials_model->deleteRow($id, 'id', 'testimonials');
                   
		$this->session->set_flashdata('success', 'Testimonial Deleted Successfully');
		 redirect(base_url()."AdminController/list_testimonial"); 
	}
	function set_upload_options($path, $file_type) {
        // upload an image options
        $config = array();
        $config['upload_path'] = $path; //give the path to upload the image in folder
        $config['remove_spaces'] = TRUE;
        $config['encrypt_name'] = TRUE; // for encrypting the name
        $config['allowed_types'] = $file_type;
        $config['max_size'] = '78000';
        $config['overwrite'] = FALSE;
        return $config;
    }
}
