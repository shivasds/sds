<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login extends CI_Controller {

	function __construct(){
        /* Session Checking Start*/
        parent::__construct();
        $this->load->model(array('login_model'));
        $this->load->library('session'); 
        //  if ($this->session->userdata('is_loggedin')) {
        //     if($this->session->userdata('role') == "admin")
        //         redirect(base_url()."admin"); 
        // }     
    }
 

    function admin() {
        if ($this->session->userdata('is_loggedin')) {
            if($this->session->userdata('role') == "admin")
                redirect(base_url()."admin"); 
        }  
        if($this->input->post()){
            $username=$this->input->post('username');
            $password=$this->input->post('password');  
            $data = $this->login_model->admin_login($username,$password); 
            if($data){ 
                $newdata = array(
                    'id' => $data->id,
                    'username'  => $username,
                    'email' => $data->email,
                    'is_loggedin' => TRUE,
                    'role' => 'admin'
                );
                $this->session->set_userdata($newdata);
                redirect(base_url().'admin');
            }
            else{
                $this->data['error'] = true;
                $this->data['message'] = "Oops! Invalid Username/Password";
            }
        }
        $this->load->view('admin/login', $this->data);
    }

    function logout() {
        $this->session->sess_destroy();
        $this->session->unset_userdata('is_loggedin'); 
            redirect(base_url().'login'); 
    }
    function forget_pass() {
        $email = $this->input->post('email');
        if($this->login_model->forget_password($email))
            echo "success";
        else
            echo "error";
    } 

}
