<?php

if (!defined('BASEPATH'))
    exit('No direct script access allowed');

class Home_model extends MY_Model {
public function __construct()
    {
        // Call the CI_Model constructor
        parent::__construct();
    }
public function get_table_data($table='',$where='')
{
            $this->db->select('*');
            if($where)
            {
            $this->db->where($where);
            }
            $this->db->from($table);
            $result = $this->db->get()->result_array();
            return $result;
}

     
}
