<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Login_model extends CI_Model {

    public function __construct()
    {
        // Call the CI_Model constructor
        parent::__construct();
    }

    public function admin_login($username,$password){
    	$password = md5($password);
    	$query = $this->db->select()
    		->where('username',$username)
    		->where('password',$password) 
    		->from('user')
    		->get(); 
    	$result = $query->result(); 
        return $result;
    }

     
    public function forget_password($email){
        $query = $this->db->select()
            ->where('email',trim($email))
            ->from('user')
            ->get();
        $result = $query->result();
        if(count($result) > 0){
            $this->db->update(
                'user',
                array(
                    "password" => md5($result[0]->emp_code)
                ),
                array(
                    "id" => $result[0]->id
                )
            );
            $this->load->library('email');
            
            $this->email->initialize(email_config());

            $this->email->from("info@secondsdigital.com", "Admin");
            $this->email->to($email);

            $this->email->subject("Password Reset");
            $this->email->message("Your password has been reseted to your emp_code");

            $this->email->send();
            return true;
        }
        else
            return false;
    }
 
 
 

    function updateWhere($where,$table_name='',$data='')
            {

              foreach ($where as $leadid) {
               // print_r($where);die;
                $this->db->set($data);
                $this->db->where($where);
                $this->db->update($table_name);       
            }
            return true;
            }
}