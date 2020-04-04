<?php
if (!defined('BASEPATH'))
    exit('No direct script access allowed');
class About_model extends MY_Model {

    function __construct() {
        parent::__construct();
    }
      public function about_content_insert($data){
              $query = $this->db->insert('about', $data);
             if($query){
            //  echo $this->db->last_query();die;
                  return true;

               }
               else
               {
                $this->db->error(); 
               }
           }
           public function get_table_data($table='',$where='')
{
            $this->db->select('*');
            if($where)
            {
            $this->db->where($where)
            ->order_by('id','desc')
            ->limit(1);

            }
            $this->db->order_by('id','desc')
            ->limit(1);
            $this->db->from($table);
            $result = $this->db->get()->result_array();

            return $result;
}
    
     

}