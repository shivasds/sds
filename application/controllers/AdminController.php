<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class AdminController extends CI_Controller {
 	function __construct(){ 
		parent::__construct();
		$this->load->model('Home_model'); 
        $this->load->model('Common_model'); 
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
		$this->load->view('admin/dashboard',$data);
	} 
    public function changePassword($value='')
    {
        $data['heading'] = "Update Password";
        if($this->input->post())
        {
            $psw = md5(trim($this->input->post("changepswd")));
            $data = array("password" => $psw);
            $this->Common_model->updateRow(1,$data,"id","user");
            $this->session->set_flashdata('success', "Password Updated Successfully");
            redirect('admin/changePassword');
        }
        $this->load->view("admin/change_password",$data);
    }
    public function add_slider($value='')
    {
        $data['heading'] = "Add Slider";
        if($this->input->post())
        {
             if (isset($_FILES) && isset($_FILES["slider"]['tmp_name']) && $_FILES["slider"]['tmp_name']) {
                    $file = $_FILES["slider"]['tmp_name'];
                    $path = './uploads/sliders/';
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
                    if (!$this->upload->do_upload('slider')) {
                        $this->session->set_flashdata('error', $this->upload->display_errors());
                        redirect('admin/add_slider');
                    } else {
                        $image = $this->upload->data('file_name');
                    }
                    $data = array(
                        'img_alt' => $this->input->post('img_alt'), 
                        'image' => $image,
                        'type'=>$this->input->post('type'),
                        'date_created' => date('Y-m-d')
                    );  
                     $this->Common_model->insertRow($data,'banners'); 
                    $this->session->set_flashdata('success', 'slider added Successfully');
                    redirect('admin/add_slider');
                } else {
                    $this->session->set_flashdata('error', 'Uploading Failed');
                    redirect('admin/add_slider');
                }
        }
        $this->load->view("admin/sliders/add_slider",$data);
    }
    public function list_sliders($value='')
    {
        $data['testimonials'] = $this->Common_model->get_table_data('banners');
        $this->load->view('admin/sliders/list_sliders',$data); 
    }
    public function edit_slider($id='')
    {
        $where = array("id"=>$id);
        $data['test'] = $this->Home_model->get_table_data('banners',$where);

        $this->load->view('admin/sliders/edit_sliders',$data); 
    }
    public function update_sliders($id='')
    {
        if($this->input->post())
         {
            if (isset($_FILES) && isset($_FILES["slider"]['tmp_name']) && $_FILES["slider"]['tmp_name']) {
                    $file = $_FILES["slider"]['tmp_name'];
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
                    if (!$this->upload->do_upload('slider')) {
                        $this->session->set_flashdata('error', $this->upload->display_errors());
                        redirect('admin/add_slider');
                    } else {
                        $image = $this->upload->data('file_name');
                    }
                }
                else
                {
                    $image=$this->input->post('image');
                }
                    $data = array( 
                        'date_created' =>date("Y-m-d"),
                        'type'=>$this->input->post('type'),
                        'image' => $image, 
                        'img_alt'=>$this->input->post('img_alt') 
                    );   
                    $bool = $this->Common_model->updateRow($id,$data,'id','banners');
                   // die($this->db->last_query());
                    $this->session->set_flashdata('success', 'Banners Updated Successfully');
                    redirect('admin/list_sliders');
               
          
         }
    }
    public function delete_slider($id='')
    {
        $this->Common_model->deleteRow($id, 'id', 'banners');
                   
        $this->session->set_flashdata('success', 'Banner Deleted Successfully');
         redirect(base_url()."admin/list_sliders"); 
    }


	public function CityAdd()
	{
		$this->load->view('admin/CityAdd');
	}
	
	public function CityEdit()
	{
		$this->load->view('admin/CityEdit');
    }
    
    public function profile()
	{
		$this->load->view('admin/profile');
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
    public function Update_metatags($value='')
    {
        $data['heading'] = "Update ".$this->uri->segment(3)." page meta tags";
        $where = array("page"=>$this->uri->segment(3));
        $data['meta'] = $this->Home_model->get_table_data('meta_tags',$where);
        if($this->input->post())
        {
        $where = $this->uri->segment(3);
        if(empty($data['meta']))
        {
        $data = array(
        "meta_title" => $this->input->post("meta_title"),
        "meta_keywords" => $this->input->post("meta_keywords"),
        "meta_desc" => $this->input->post("meta_desc"),
        "google_tags" => $this->input->post("google_tags"),
        "page"=>$this->uri->segment(3)
        );
        $bool = $this->Home_model->insertRow($data,'meta_tags');
        if($bool)
        {
        $this->session->set_flashdata('success','Updated Successfully');
                    redirect('admin/metatags/'.$this->uri->segment(3));
                } 
        else {
                    $this->session->set_flashdata('error', 'Failed');
                    redirect('admin/metatags/'.$this->uri->segment(3)) ;
                }
        }
        
        else
        {
        $data = array(
        "meta_title" => $this->input->post("meta_title"),
        "meta_keywords" => $this->input->post("meta_keywords"),
        "meta_desc" => $this->input->post("meta_desc"),
        "google_tags" => $this->input->post("google_tags")
        );
        }
        $bool = $this->Home_model->updateRow($this->uri->segment(3),$data,'page','meta_tags');
        if($bool)
        {
        $this->session->set_flashdata('success','Updated Successfully');
                    redirect('admin/metatags/'.$this->uri->segment(3));
                } 
        else {
                    $this->session->set_flashdata('error', 'Failed');
                    redirect('admin/metatags/'.$this->uri->segment(3)) ;
                }
        }
        $this->load->view("admin/meta_tags",$data);
    }
}
